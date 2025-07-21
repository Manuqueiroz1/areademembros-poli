import React from 'react';
import { Monitor, Moon, Sun, Globe, Palette, Bell, User, Shield } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';

export default function SettingsSection() {
  const { theme, setTheme, actualTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const getLanguageLabel = (lang: string) => {
    switch (lang) {
      case 'pt': return 'Português';
      case 'es': return 'Español';
      case 'en': return 'English';
      default: return 'Português';
    }
  };

  const getThemeIcon = (themeType: string) => {
    switch (themeType) {
      case 'light': return Sun;
      case 'dark': return Moon;
      case 'system': return Monitor;
      default: return Monitor;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{t('settings.title')}</h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{t('settings.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Appearance Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Palette className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('settings.appearance')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('settings.appearanceSubtitle')}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{t('settings.theme')}</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'light', label: t('settings.themeLight'), icon: Sun },
                  { value: 'dark', label: t('settings.themeDark'), icon: Moon },
                  { value: 'system', label: t('settings.themeSystem'), icon: Monitor }
                ].map((themeOption) => {
                  const Icon = themeOption.icon;
                  return (
                    <button
                      key={themeOption.value}
                      onClick={() => setTheme(themeOption.value as any)}
                      className={`flex flex-col items-center p-4 rounded-lg border-2 transition-colors ${
                        theme === themeOption.value
                          ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                      }`}
                    >
                      <Icon className={`h-6 w-6 mb-2 ${
                        theme === themeOption.value ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'
                      }`} />
                      <span className={`text-sm font-medium ${
                        theme === themeOption.value ? 'text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {themeOption.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Language Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Globe className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('settings.language')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('settings.languageSubtitle')}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{t('settings.languageInterface')}</label>
              <div className="space-y-2">
                {[
                  { value: 'pt', label: 'Português', flag: '🇧🇷' },
                  { value: 'es', label: 'Español', flag: '🇪🇸' },
                  { value: 'en', label: 'English', flag: '🇺🇸' }
                ].map((languageOption) => (
                  <button
                    key={languageOption.value}
                    onClick={() => setLanguage(languageOption.value as any)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-colors ${
                      language === languageOption.value
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{languageOption.flag}</span>
                      <span className={`font-medium ${
                        language === languageOption.value ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {languageOption.label}
                      </span>
                    </div>
                    {language === languageOption.value && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('settings.account')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('settings.accountSubtitle')}</p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-colors">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('settings.changePassword')}</span>
              <span className="text-gray-400 dark:text-gray-500">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-colors">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('settings.personalData')}</span>
              <span className="text-gray-400 dark:text-gray-500">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-colors">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('settings.purchaseHistory')}</span>
              <span className="text-gray-400 dark:text-gray-500">→</span>
            </button>
          </div>
        </div>

        {/* Notifications Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <Bell className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('settings.notificationsTitle')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('settings.notificationsSubtitle')}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('settings.emailReminder')}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t('settings.emailReminderDesc')}</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600 transition-colors">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('settings.newContent')}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t('settings.newContentDesc')}</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600 transition-colors">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('settings.communityNotifications')}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t('settings.communityNotificationsDesc')}</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <Shield className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('settings.privacyTitle')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{t('settings.privacySubtitle')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-colors">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('settings.privacyPolicy')}</span>
            <span className="text-gray-400 dark:text-gray-500">→</span>
          </button>
          <button className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-colors">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('settings.termsOfUse')}</span>
            <span className="text-gray-400 dark:text-gray-500">→</span>
          </button>
          <button className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-colors">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('settings.exportData')}</span>
            <span className="text-gray-400 dark:text-gray-500">→</span>
          </button>
          <button className="flex items-center justify-between p-3 rounded-lg border border-red-200 dark:border-red-800 hover:border-red-300 dark:hover:border-red-700 transition-colors text-red-600 dark:text-red-400">
            <span className="text-sm font-medium">{t('settings.deleteAccount')}</span>
            <span className="text-red-400 dark:text-red-500">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}