import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'

const Header = () => {
  const { data: session } = useSession()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/login' })
  }

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white">
      <h1 className="text-xl font-semibold text-gray-900">Sagemode</h1>
      <div className="flex items-center gap-6">
        <div className="flex items-center border-l border-gray-200 pl-6">
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Hi! {session?.user?.name || 'User'}
              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <button
                  onClick={() => {
                    setIsDropdownOpen(false)
                    // Handle profile details navigation
                    window.location.href = '/?view=profile'
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile Details
                </button>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header