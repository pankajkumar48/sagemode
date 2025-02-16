import Image from 'next/image'

const Sidebar = () => {
  const menuItems = [
    { icon: '/globe.svg', label: 'Dashboard', active: false },
    { icon: '/file.svg', label: 'Email Accounts', active: true },
    { icon: '/window.svg', label: 'Settings', active: false },
  ]

  return (
    <div className="w-16 bg-white border-r border-gray-200 h-screen fixed left-0 top-0">
      <div className="flex flex-col items-center">
        <div className="p-4">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">S</span>
          </div>
        </div>
        <nav className="w-full pt-4">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className={`p-4 flex justify-center cursor-pointer transition-colors duration-200 ${
                item.active 
                  ? 'bg-purple-50 border-l-4 border-purple-600' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className={`flex items-center justify-center ${item.active ? '-ml-1' : ''}`}>
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${
                    item.active 
                      ? 'opacity-100 brightness-75 contrast-125' 
                      : 'opacity-60 hover:opacity-80'
                  }`}
                />
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar