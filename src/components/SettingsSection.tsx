import React from 'react';
import { Monitor, Moon, Sun, Globe, Palette, Bell, User, Shield } from 'lucide-react';
import { AppSettings } from '../types';

interface SettingsSectionProps {
  settings: AppSettings;
  onSettingsChange: (settings: AppSettings) => void;
}

export default function SettingsSection({ settings, onSettingsChange }: SettingsSectionProps) {
  const handleThemeChange = (theme: 'light' | 'dark' | 'system') => {
    onSettingsChange({ ...settings, theme });
  };

  const handleLanguageChange = (language: 'pt' | 'es' | 'en') => {
    onSettingsChange({ ...settings, language });
  };

  const getLanguageLabel = (lang: string) => {
    switch (lang) {
      case 'pt': return 'Português';
      case 'es': return 'Español';
      case 'en': return 'English';
      default: return 'Português';
    }
  };

  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case 'light': return Sun;
      case 'dark': return Moon;
      case 'system': return Monitor;
      default: return Monitor;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Configurações</h2>
        <p className="text-sm sm:text-base text-gray-600">Personalize sua experiência de aprendizado</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Appearance Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Palette className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Aparência</h3>
              <p className="text-sm text-gray-600">Personalize o tema da interface</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Tema</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'light', label: 'Claro', icon: Sun },
                  { value: 'dark', label: 'Escuro', icon: Moon },
                  { value: 'system', label: 'Sistema', icon: Monitor }
                ].map((theme) => {
                  const Icon = theme.icon;
                  return (
                    <button
                      key={theme.value}
                      onClick={() => handleThemeChange(theme.value as any)}
                      className={`flex flex-col items-center p-4 rounded-lg border-2 transition-colors ${
                        settings.theme === theme.value
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Icon className={`h-6 w-6 mb-2 ${
                        settings.theme === theme.value ? 'text-purple-600' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm font-medium ${
                        settings.theme === theme.value ? 'text-purple-600' : 'text-gray-700'
                      }`}>
                        {theme.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Language Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Globe className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Idioma</h3>
              <p className="text-sm text-gray-600">Escolha o idioma da interface</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Idioma da Interface</label>
              <div className="space-y-2">
                {[
                  { value: 'pt', label: 'Português', flag: '🇧🇷' },
                  { value: 'es', label: 'Español', flag: '🇪🇸' },
                  { value: 'en', label: 'English', flag: '🇺🇸' }
                ].map((language) => (
                  <button
                    key={language.value}
                    onClick={() => handleLanguageChange(language.value as any)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-colors ${
                      settings.language === language.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{language.flag}</span>
                      <span className={`font-medium ${
                        settings.language === language.value ? 'text-blue-600' : 'text-gray-700'
                      }`}>
                        {language.label}
                      </span>
                    </div>
                    {settings.language === language.value && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Conta</h3>
              <p className="text-sm text-gray-600">Gerencie suas informações pessoais</p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <span className="text-sm font-medium text-gray-700">Alterar senha</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <span className="text-sm font-medium text-gray-700">Dados pessoais</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <span className="text-sm font-medium text-gray-700">Histórico de compras</span>
              <span className="text-gray-400">→</span>
            </button>
          </div>
        </div>

        {/* Notifications Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <Bell className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Notificações</h3>
              <p className="text-sm text-gray-600">Configure suas preferências de notificação</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">E-mail de lembrete</p>
                <p className="text-xs text-gray-500">Receba lembretes para estudar</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600 transition-colors">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">Novos conteúdos</p>
                <p className="text-xs text-gray-500">Seja notificado sobre novos materiais</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600 transition-colors">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">Comunidade</p>
                <p className="text-xs text-gray-500">Atividades da comunidade WhatsApp</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <Shield className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Privacidade e Segurança</h3>
            <p className="text-sm text-gray-600">Gerencie suas configurações de privacidade</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <span className="text-sm font-medium text-gray-700">Política de Privacidade</span>
            <span className="text-gray-400">→</span>
          </button>
          <button className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <span className="text-sm font-medium text-gray-700">Termos de Uso</span>
            <span className="text-gray-400">→</span>
          </button>
          <button className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <span className="text-sm font-medium text-gray-700">Exportar dados</span>
            <span className="text-gray-400">→</span>
          </button>
          <button className="flex items-center justify-between p-3 rounded-lg border border-red-200 hover:border-red-300 transition-colors text-red-600">
            <span className="text-sm font-medium">Excluir conta</span>
            <span className="text-red-400">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}