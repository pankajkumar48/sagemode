'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Campaigns from '@/components/Campaigns'
import EmailAccounts from '@/components/EmailAccounts'
import Settings from '@/components/Settings'
import ProfileDetails from '@/components/ProfileDetails'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams();
  const view = searchParams.get('view');
  const [selectedComponent, setSelectedComponent] = React.useState('Email Accounts');

  const renderComponent = () => {
    if (view === 'profile') {
      return <ProfileDetails />;
    }

    switch (selectedComponent) {
      case 'Email Accounts':
        return <EmailAccounts />;
      case 'Campaigns':
        return <Campaigns />;
      case 'Settings':
        return <Settings />;
      default:
        return <EmailAccounts />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar onMenuItemSelect={setSelectedComponent} />
      <div className="ml-16">
        <Header />
        <main>
          {renderComponent()}
        </main>
      </div>
    </div>
  );
}
