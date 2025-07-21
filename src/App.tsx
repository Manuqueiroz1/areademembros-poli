import React, { useState } from 'react';
import EmailVerificationPage from './components/EmailVerificationPage';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import Navigation from './components/Navigation';
import OnboardingSection from './components/OnboardingSection';
import AIAssistantSection from './components/AIAssistantSection';
import TeacherPoliSection from './components/TeacherPoliSection';
import EnhancedResourcesSection from './components/EnhancedResourcesSection';
import CommunitySection from './components/CommunitySection';
import SettingsSection from './components/SettingsSection';
import { User, AppSettings } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('onboarding');
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [settings, setSettings] = useState<AppSettings>({
    theme: 'system',
    language: 'pt'
  });

  const handleEmailVerification = (email: string) => {
    const userName = email.split('@')[0];
    setUser({
      name: userName.charAt(0).toUpperCase() + userName.slice(1),
      email: email,
      isVerified: true,
      hasGeneratedPlan: false,
      firstAccess: true
    });
    setIsLoggedIn(true);
  };

  const handleLogin = (credentials: { email: string; password: string }) => {
    // In a real app, this would validate credentials with your backend
    // For now, we'll simulate a successful login
    const userName = credentials.email.split('@')[0];
    setUser({
      name: userName.charAt(0).toUpperCase() + userName.slice(1),
      email: credentials.email,
      isVerified: true,
      hasGeneratedPlan: true, // Assume returning users have generated plans
      firstAccess: false
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
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

  // Show email verification for first-time users
  if (!isLoggedIn && !user) {
    return <EmailVerificationPage onVerificationSuccess={handleEmailVerification} />;
  }

  // Show login page if not logged in
  if (!isLoggedIn || !user || !user.isVerified) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Check if modules should be locked
  const isModuleLocked = (tabId: string) => {
    if (!user.hasGeneratedPlan && user.firstAccess) {
      return !['onboarding', 'ai-assistant'].includes(tabId);
    }
    return false;
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'onboarding':
        return <OnboardingSection />;
      case 'ai-assistant':
        return <AIAssistantSection onPlanGenerated={handlePlanGenerated} />;
      case 'teacher-poli':
        return isModuleLocked('teacher-poli') ? renderLockedModule() : <TeacherPoliSection />;
      case 'resources':
        return isModuleLocked('resources') ? renderLockedModule() : <EnhancedResourcesSection />;
      case 'community':
        return isModuleLocked('community') ? renderLockedModule() : <CommunitySection />;
      case 'settings':
        return <SettingsSection settings={settings} onSettingsChange={setSettings} />;
      default:
        return <OnboardingSection />;
    }
  };

  const renderLockedModule = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🔒</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Módulo Bloqueado</h2>
        <p className="text-gray-600 mb-6">
          Para acessar este módulo, você precisa primeiro gerar seu plano de estudos personalizado.
        </p>
        <button
          onClick={() => setActiveTab('ai-assistant')}
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
        >
          Gerar Meu Plano de Estudos
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userName={user.name} onLogout={handleLogout} />
      <Navigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        lockedTabs={user.hasGeneratedPlan ? [] : ['teacher-poli', 'resources', 'community']}
      />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;