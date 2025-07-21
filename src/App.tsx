import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { User } from './types';

// Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import OnboardingSection from './components/OnboardingSection';
import AIAssistantSection from './components/AIAssistantSection';
import TeacherPoliSection from './components/TeacherPoliSection';
import EnhancedResourcesSection from './components/EnhancedResourcesSection';
import CommunitySection from './components/CommunitySection';
import SettingsSection from './components/SettingsSection';

// Login/Auth Components
import LoginPage from './components/LoginPage';
import EmailVerificationPage from './components/EmailVerificationPage';
import PasswordCreationPage from './components/PasswordCreationPage';

export default function App() {
  const [user, setUser] = useLocalStorage<User | null>('teacherpoli_user', null);
  const [activeTab, setActiveTab] = useState('onboarding');
  const [authStep, setAuthStep] = useState<'login' | 'verify' | 'password' | 'complete'>('login');
  const [tempEmail, setTempEmail] = useState('');

  // Mock functions for authentication flow
  const handleLogin = async (email: string, password?: string) => {
    // Simulate login process
    if (password) {
      // Login with existing account
      setUser({
        name: email.split('@')[0],
        email,
        isVerified: true,
        hasPassword: true,
        hasGeneratedPlan: false,
        firstAccess: false
      });
      setAuthStep('complete');
    } else {
      // New user flow
      setTempEmail(email);
      setAuthStep('verify');
    }
  };

  const handleEmailVerification = () => {
    setAuthStep('password');
  };

  const handlePasswordCreation = (password: string) => {
    setUser({
      name: tempEmail.split('@')[0],
      email: tempEmail,
      isVerified: true,
      hasPassword: true,
      hasGeneratedPlan: false,
      firstAccess: true
    });
    setAuthStep('complete');
  };

  const handleLogout = () => {
    setUser(null);
    setAuthStep('login');
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
  if (!user || authStep !== 'complete') {
    switch (authStep) {
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'verify':
        return <EmailVerificationPage email={tempEmail} onVerify={handleEmailVerification} />;
      case 'password':
        return <PasswordCreationPage onPasswordCreate={handlePasswordCreation} />;
      default:
        return <LoginPage onLogin={handleLogin} />;
    }
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
        {activeTab === 'resources' && <EnhancedResourcesSection />}
        {activeTab === 'community' && <CommunitySection />}
        {activeTab === 'settings' && <SettingsSection />}
      </main>
    </div>
  );
}