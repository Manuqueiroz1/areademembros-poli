import React from 'react';
import { Play, Brain, ExternalLink, BookOpen, Users, Settings } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'onboarding', label: 'Comece por Aqui', icon: Play },
    { id: 'ai-assistant', label: 'Gere seu Plano de Estudos', icon: Brain },
    { id: 'teacher-poli', label: 'Teacher Poli', icon: ExternalLink },
    { id: 'resources', label: 'Bônus', icon: BookOpen },
    { id: 'community', label: 'Comunidade', icon: Users },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}