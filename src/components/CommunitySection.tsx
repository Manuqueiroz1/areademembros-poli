import React from 'react';
import { MessageCircle, Users, ExternalLink, Phone, Calendar, Star } from 'lucide-react';

export default function CommunitySection() {
  const whatsappGroup = {
    name: 'Comunidade Teacher Poli',
    description: 'Comunidade oficial com todos os alunos da Teacher Poli para praticar inglês, tirar dúvidas e compartilhar experiências',
    members: '1.500+',
    link: 'https://chat.whatsapp.com/KJoq3lyYDqjIYOG5vjYo81?mode=r_c'
  };

  const benefits = [
    {
      icon: MessageCircle,
      title: 'Prática Diária',
      description: 'Pratique inglês todos os dias com outros alunos'
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Conecte-se com pessoas que compartilham do mesmo objetivo que você'
    },
    {
      icon: Phone,
      title: 'Ajuda Rápida',
      description: 'Tire dúvidas rapidamente com a comunidade, sempre vai ter alguém disposto a ajudar'
    },
    {
      icon: Calendar,
      title: 'Eventos Exclusivos',
      description: 'Participe de lives e eventos especiais todas as semanas'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Comunidade WhatsApp</h2>
        <p className="text-gray-600">Conecte-se com milhares de estudantes e pratique inglês todos os dias</p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 mb-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Junte-se à Nossa Comunidade
            </h3>
            <p className="text-green-100 mb-6 text-lg">
              Mais de 1.500 alunos ativos praticando inglês, compartilhando experiências e se ajudando mutuamente.
            </p>
            <div className="flex items-center space-x-6 text-green-100">
              <div className="text-center">
                <div className="text-2xl font-bold">1.500+</div>
                <div className="text-sm">Membros Ativos</div>
              </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-green-100 italic">
                "Meu processo com a Teacher Poli tem sido bacana e revelador. Esse misto de flexibilidade, tecnologia e acessibilidade está tornando o aprendizado algo fácil na minha rotina, e é muito legal saber que tem uma comunidade tão grande de pessoas aprendendo junto comigo."
              </p>
              <p className="text-green-200 mt-2 font-medium">- Lucimara, Aluna e Participante da Comunidade Teacher Poli</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          );
        })}
      </div>

      {/* WhatsApp Groups */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{whatsappGroup.name}</h3>
            <div className="flex items-center justify-center text-gray-500 mb-4">
              <Users className="h-4 w-4 mr-1" />
              <span>{whatsappGroup.members} membros ativos</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-center mb-8">{whatsappGroup.description}</p>
          
          <div className="text-center">
            <a
              href={whatsappGroup.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Entrar na Comunidade
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Community Features */}
      <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">O que você encontra na comunidade</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rules */}
      <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Regras da Comunidade</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">✅ Permitido:</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Praticar inglês com outros membros</li>
              <li>• Compartilhar dúvidas sobre os cursos</li>
              <li>• Ajudar outros alunos</li>
              <li>• Compartilhar conquistas e progressos</li>
              <li>• Participar de atividades em grupo</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">❌ Não permitido:</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Spam ou mensagens promocionais</li>
              <li>• Conteúdo ofensivo ou inadequado</li>
              <li>• Discussões políticas ou religiosas</li>
              <li>• Compartilhar conteúdo protegido por direitos autorais</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
