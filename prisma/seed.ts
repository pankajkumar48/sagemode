import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create a test user
  const hashedPassword = await hash('test123', 10)
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: hashedPassword,
      name: 'Test User',
    },
  })

  // Create email accounts for the user
  const emailAccounts = await Promise.all([
    prisma.emailAccount.create({
      data: {
        email: 'sender1@example.com',
        emailsSent: 0,
        warmUpEmails: 0,
        healthScore: 100,
        userId: user.id,
      },
    }),
    prisma.emailAccount.create({
      data: {
        email: 'sender2@example.com',
        emailsSent: 0,
        warmUpEmails: 0,
        healthScore: 100,
        userId: user.id,
      },
    }),
  ])

  // Create campaigns
  const campaigns = await Promise.all([
    prisma.campaign.create({
      data: {
        name: 'Test Campaign 1',
        status: 'Draft',
        progress: 0,
        sent: 0,
        clicks: 0,
        replies: 0,
        opportunities: 0,
      },
    }),
    prisma.campaign.create({
      data: {
        name: 'Test Campaign 2',
        status: 'Active',
        progress: 0,
        sent: 0,
        clicks: 0,
        replies: 0,
        opportunities: 0,
      },
    }),
  ])

  // Associate email accounts with campaigns
  await prisma.emailAccount.update({
    where: { id: emailAccounts[0].id },
    data: {
      campaigns: {
        connect: campaigns.map(campaign => ({ id: campaign.id })),
      },
    },
  })

  await prisma.emailAccount.update({
    where: { id: emailAccounts[1].id },
    data: {
      campaigns: {
        connect: campaigns.map(campaign => ({ id: campaign.id })),
      },
    },
  })

  console.log('Seed data created successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 