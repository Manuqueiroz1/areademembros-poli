import React from 'react';
import { User, LogOut } from 'lucide-react';

interface HeaderProps {
  userName: string;
  onLogout: () => void;
}

export default function Header({ userName, onLogout }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/WhatsApp Image 2025-06-02 at 10.53.02.jpeg" 
              alt="Teacher Poli" 
              className="h-10 w-auto"
            />
            <div className="ml-4">
              <h1 className="text-xl font-bold text-gray-900">Área de Membros - Teacher Poli</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">{userName}</span>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
