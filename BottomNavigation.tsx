
import React from 'react';
import { Home, History, User } from 'lucide-react';

type Screen = 'home' | 'scan' | 'result' | 'history' | 'profile' | 'health' | 'sustainability';

interface BottomNavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  currentScreen, 
  onNavigate 
}) => {
  const navItems = [
    { id: 'home' as Screen, icon: Home, label: 'Início' },
    { id: 'history' as Screen, icon: History, label: 'Histórico' },
    { id: 'profile' as Screen, icon: User, label: 'Perfil' }
  ];

  // Hide navigation on scan, result, health, and sustainability screens
  if (currentScreen === 'scan' || currentScreen === 'result' || currentScreen === 'health' || currentScreen === 'sustainability') {
    return null;
  }

  return (
    <div className="bg-white border-t border-gray-200 px-6 py-3">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <item.icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''} transition-transform duration-200`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
