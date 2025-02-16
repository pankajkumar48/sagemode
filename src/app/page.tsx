import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import EmptyState from '@/components/EmptyState'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-16">
        <Header />
        <main>
          <EmptyState />
        </main>
      </div>
    </div>
  );
}
