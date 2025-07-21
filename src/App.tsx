import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { User } from './types';

// Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import OnboardingSection from './components/OnboardingSection';
import AIAssistantSection from './components/AIAssistantSection';
import TeacherPoliSection from './components/TeacherPoliSection';
import ResourcesSection from './components/ResourcesSection';
import CommunitySection from './components/CommunitySection';
import SettingsSection from './components/SettingsSection';

// Login/Auth Components (simulados para demonstração)
const LoginPage = ({ onLogin }: { onLogin: (email: string, password?: string) => void }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Área de Membros - Teacher Poli</h2>
      <button
        onClick={() => onLogin('usuario@exemplo.com', 'senha123')}
        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Entrar (Demo)
      </button>
    </div>
  </div>
);

export default function App() {
  const [user, setUser] = useLocalStorage<User | null>('teacherpoli_user', null);
  const [activeTab, setActiveTab] = useState('onboarding');

  const handleLogin = async (email: string, password?: string) => {
    // Simular login
    setUser({
      name: email.split('@')[0],
      email,
      isVerified: true,
      hasPassword: true,
      hasGeneratedPlan: false,
      firstAccess: true
    });
  };

  const handleLogout = () => {
    setUser(null);
    setActiveTab('onboarding');
  };

  const handlePlanGenerated = () => {
    if (user) {
      setUser({
        ...user,
        hasGeneratedPlan: true
      });
    }
  };

  // Determine locked tabs based on user progress
  const getLockedTabs = () => {
    if (!user) return [];
    
    const locked = [];
    if (!user.hasGeneratedPlan) {
      locked.push('teacher-poli');
    }
    return locked;
  };

  // Authentication flow
  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Main application
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header userName={user.name} onLogout={handleLogout} />
      <Navigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        lockedTabs={getLockedTabs()}
      />
      
      <main className="pb-8">
        {activeTab === 'onboarding' && <OnboardingSection />}
        {activeTab === 'ai-assistant' && (
          <AIAssistantSection onPlanGenerated={handlePlanGenerated} />
        )}
        {activeTab === 'teacher-poli' && <TeacherPoliSection />}
        {activeTab === 'resources' && <ResourcesSection />}
        {activeTab === 'community' && <CommunitySection />}
        {activeTab === 'settings' && <SettingsSection />}
      </main>
    </div>
  );
}