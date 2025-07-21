import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface EmailVerificationPageProps {
  onVerificationSuccess: (email: string) => void;
}

// 🔧 CONFIGURAÇÃO DE E-MAILS DE TESTE
// Para liberar e-mails de teste, adicione-os no array abaixo:
const TEST_EMAILS = [
  'teste@teacherpoli.com',
  'admin@teacherpoli.com',
  'demo@teacherpoli.com'
  // Adicione mais e-mails de teste aqui conforme necessário
];

export default function EmailVerificationPage({ onVerificationSuccess }: EmailVerificationPageProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isTestMode, setIsTestMode] = useState(false);

  const verifyEmailWithHotmart = async (email: string): Promise<boolean> => {
    // 🔧 IMPLEMENTAÇÃO DO WEBHOOK DA HOTMART
    // Substitua esta função pela integração real com a API da Hotmart
    try {
      const response = await fetch('/api/verify-hotmart-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      return data.isValid;
    } catch (error) {
      console.error('Erro ao verificar e-mail na Hotmart:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Verificar se é um e-mail de teste
      if (TEST_EMAILS.includes(email.toLowerCase())) {
        setTimeout(() => {
          onVerificationSuccess(email);
          setIsLoading(false);
        }, 1000);
        return;
      }

      // Verificar com a Hotmart
      const isValid = await verifyEmailWithHotmart(email);
      
      if (isValid) {
        onVerificationSuccess(email);
      } else {
        setError('E-mail não encontrado em nossas compras. Verifique se você digitou o e-mail correto usado na compra da Hotmart.');
      }
    } catch (error) {
      setError('Erro ao verificar e-mail. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestMode = () => {
    setIsTestMode(true);
    setEmail('teste@teacherpoli.com');
  };

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
          <h1 className="text-xl sm:text-3xl font-bold text-white mb-2 leading-tight">
            Bem-vindo à Teacher Poli!
          </h1>
          <p className="text-purple-100 text-sm sm:text-base">
            Para acessar sua área de membros, confirme o e-mail usado na compra
          </p>
        </div>

        {/* Verification Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Verificação de E-mail
            </h2>
            <p className="text-gray-600 text-sm">
              Digite o e-mail que você usou para comprar o curso na Hotmart
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-mail da compra
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                placeholder="seu@email.com"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start space-x-2">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? (
                <>
                  <Loader className="mr-2 h-5 w-5 animate-spin" />
                  Verificando...
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Verificar E-mail
                </>
              )}
            </button>
          </form>

          {/* Test Mode Button - Remove in production */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={handleTestMode}
              className="w-full text-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              🔧 Modo de Teste (Desenvolvimento)
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs sm:text-sm">
              Não encontrou seu e-mail?{' '}
              <a
                href="mailto:suporte@teacherpoli.com"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Entre em contato conosco
              </a>
            </p>
          </div>
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