import React, { useState } from 'react';
import { Eye, EyeOff, Lock, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface PasswordCreationPageProps {
  email: string;
  onPasswordCreated: (email: string, password: string) => void;
}

export default function PasswordCreationPage({ email, onPasswordCreated }: PasswordCreationPageProps) {
  const { t } = useLanguage();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const validatePassword = (pwd: string): string[] => {
    const errors: string[] = [];
    
    if (pwd.length < 8) {
      errors.push('A senha deve ter pelo menos 8 caracteres');
    }
    if (!/[A-Z]/.test(pwd)) {
      errors.push('A senha deve conter pelo menos uma letra maiúscula');
    }
    if (!/[a-z]/.test(pwd)) {
      errors.push('A senha deve conter pelo menos uma letra minúscula');
    }
    if (!/[0-9]/.test(pwd)) {
      errors.push('A senha deve conter pelo menos um número');
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
      errors.push('A senha deve conter pelo menos um caractere especial');
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    // Validate password
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setErrors(passwordErrors);
      setIsLoading(false);
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrors(['As senhas não coincidem']);
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call to save password
      // In a real implementation, you would hash the password and save it
      setTimeout(() => {
        onPasswordCreated(email, password);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setErrors(['Erro ao criar senha. Tente novamente.']);
      setIsLoading(false);
    }
  };

  const getPasswordStrength = (pwd: string) => {
    const errors = validatePassword(pwd);
    if (pwd.length === 0) return { strength: 0, label: '', color: '' };
    if (errors.length === 0) return { strength: 100, label: 'Forte', color: 'bg-green-500' };
    if (errors.length <= 2) return { strength: 75, label: 'Boa', color: 'bg-yellow-500' };
    if (errors.length <= 3) return { strength: 50, label: 'Média', color: 'bg-orange-500' };
    return { strength: 25, label: 'Fraca', color: 'bg-red-500' };
  };

  const passwordStrength = getPasswordStrength(password);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <img 
            src="/WhatsApp Image 2025-06-02 at 10.53.02.jpeg" 
            alt="Teacher Poli" 
            className="h-12 sm:h-16 w-auto mx-auto mb-4"
          />
          <h1 className="text-xl sm:text-3xl font-bold text-white mb-2 leading-tight">{t('password.createTitle')}</h1>
          <p className="text-purple-100 text-sm sm:text-base">{t('password.verified')}</p>
        </div>

        {/* Password Creation Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{t('password.emailVerified')}</h2>
            <p className="text-gray-600 text-sm">
              <strong>{email}</strong>
            </p>
            <p className="text-gray-500 text-xs mt-1">{t('password.createSecure')}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">{t('password.newPassword')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-9 sm:pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Digite sua nova senha"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-gray-500">{t('password.strength')}</span>
                    <span className={`font-medium ${
                      passwordStrength.strength >= 75 ? 'text-green-600' :
                      passwordStrength.strength >= 50 ? 'text-yellow-600' :
                      passwordStrength.strength >= 25 ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      {passwordStrength.label}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                      style={{ width: `${passwordStrength.strength}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">{t('password.confirmPassword')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full pl-9 sm:pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Confirme sua senha"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">{t('password.requirements')}</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className={`flex items-center ${password.length >= 8 ? 'text-green-600' : ''}`}>
                  <span className="mr-2">{password.length >= 8 ? '✓' : '•'}</span>
                  Pelo menos 8 caracteres
                </li>
                <li className={`flex items-center ${/[A-Z]/.test(password) ? 'text-green-600' : ''}`}>
                  <span className="mr-2">{/[A-Z]/.test(password) ? '✓' : '•'}</span>
                  Uma letra maiúscula
                </li>
                <li className={`flex items-center ${/[a-z]/.test(password) ? 'text-green-600' : ''}`}>
                  <span className="mr-2">{/[a-z]/.test(password) ? '✓' : '•'}</span>
                  Uma letra minúscula
                </li>
                <li className={`flex items-center ${/[0-9]/.test(password) ? 'text-green-600' : ''}`}>
                  <span className="mr-2">{/[0-9]/.test(password) ? '✓' : '•'}</span>
                  Um número
                </li>
                <li className={`flex items-center ${/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'text-green-600' : ''}`}>
                  <span className="mr-2">{/[!@#$%^&*(),.?":{}|<>]/.test(password) ? '✓' : '•'}</span>
                  Um caractere especial
                </li>
              </ul>
            </div>

            {/* Error Messages */}
            {errors.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                {t('password.creating')}
                    {errors.map((error, index) => (
                      <p key={index} className="text-red-600 text-sm">{error}</p>
                    ))}
                  </div>
                {t('password.createAndContinue')}
              </div>
            )}

            {/* Create Password Button */}
            <button
              type="submit"
              disabled={isLoading || !password || !confirmPassword}
              className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? (
                <>
                  <Loader className="mr-2 h-5 w-5 animate-spin" />
                  Criando senha...
                </>
              ) : (
                <>
                  <Lock className="mr-2 h-5 w-5" />
                  Criar Senha e Continuar
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-purple-100 text-xs sm:text-sm">
            © 2025 Teacher Poli. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}