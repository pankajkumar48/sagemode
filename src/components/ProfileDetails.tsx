import { useSession } from 'next-auth/react';

const ProfileDetails = () => {
  const { data: session } = useSession();

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-6">Profile Details</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <p className="mt-1 text-sm text-gray-900">{session?.user?.name || 'Not set'}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-sm text-gray-900">{session?.user?.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Account ID</label>
            <p className="mt-1 text-sm text-gray-900">{session?.user?.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails; 