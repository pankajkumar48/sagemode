import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white">
      <h1 className="text-xl font-semibold text-gray-900">Email Accounts</h1>
      <div className="flex items-center gap-6">
        <p className="text-gray-600">Connect accounts to send emails from</p>
        <div className="flex items-center border-l border-gray-200 pl-6">
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
            My Organisation
            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          <span className="text-lg font-medium">+</span>
          ADD NEW
        </button>
      </div>
    </div>
  )
}

export default Header