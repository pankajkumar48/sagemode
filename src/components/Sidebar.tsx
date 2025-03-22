import React from 'react';
import Image from 'next/image';

interface MenuItem {
  icon: string;
  label: string;
  active: boolean;
}

interface SidebarProps {
  onMenuItemSelect: (label: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onMenuItemSelect }) => {
  const [menuItems, setMenuItems] = React.useState<MenuItem[]>([
    { icon: '/file.svg', label: 'Email Accounts', active: true },
    { icon: '/globe.svg', label: 'Campaigns', active: false },
    { icon: '/window.svg', label: 'Settings', active: false },
  ]);

  const handleMenuItemClick = (label: string) => {
    setMenuItems(menuItems.map(item => ({
      ...item,
      active: item.label === label
    })));
    onMenuItemSelect(label);
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4">
      {menuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => handleMenuItemClick(item.label)}
          className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${
            item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Image
            src={item.icon}
            alt={item.label}
            width={24}
            height={24}
            className={item.active ? 'text-blue-600' : 'text-gray-600'}
          />
        </button>
      ))}
    </div>
  );
};

export default Sidebar;