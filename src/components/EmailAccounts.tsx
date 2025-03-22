'use client'

import React, { useEffect, useState } from 'react';

interface EmailAccount {
  id: number;
  email: string;
  emailsSent: number;
  warmUpEmails: number;
  healthScore: number;
}

const EmailAccounts = () => {
  const [accounts, setAccounts] = useState<EmailAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch('/api/email-accounts');
        if (!response.ok) {
          throw new Error('Failed to fetch email accounts');
        }
        const data = await response.json();
        setAccounts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Email Accounts</h1>
      <div className="bg-white rounded-lg shadow">
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emails Sent</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Warm Up Emails</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Health Score</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {accounts.map((account: EmailAccount) => (
                  <tr key={account.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{account.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{account.emailsSent}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{account.warmUpEmails}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{account.healthScore}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailAccounts; 