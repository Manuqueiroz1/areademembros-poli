import React from 'react';
import { Download, FileText, Headphones, Video, BookOpen, Star } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'audio' | 'video' | 'ebook';
  size: string;
  rating: number;
  downloads: number;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Guia Completo de Gramática Inglesa',
    description: 'Material completo com todas as regras gramaticais essenciais',
    type: 'pdf',
    size: '2.5 MB',
    rating: 4.8,
    downloads: 1250
  },
  {
    id: '2',
    title: 'Áudios para Pronúncia',
    description: 'Exercícios de pronúncia com nativos americanos e britânicos',
    type: 'audio',
    size: '45 MB',
    rating: 4.9,
    downloads: 890
  },
  {
    id: '3',
    title: 'Videoaulas Extras',
    description: 'Conteúdo complementar para aprofundar seus estudos',
    type: 'video',
    size: '120 MB',
    rating: 4.7,
    downloads: 2100
  },
  {
    id: '4',
    title: 'E-book: Inglês para Negócios',
    description: 'Vocabulário e expressões essenciais para o ambiente corporativo',
    type: 'ebook',
    size: '1.8 MB',
    rating: 4.6,
    downloads: 750
  }
];

export default function ResourcesSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return FileText;
      case 'audio':
        return Headphones;
      case 'video':
        return Video;
      case 'ebook':
        return BookOpen;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'bg-red-100 text-red-600';
      case 'audio':
        return 'bg-green-100 text-green-600';
      case 'video':
        return 'bg-blue-100 text-blue-600';
      case 'ebook':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Bônus Exclusivos</h2>
        <p className="text-gray-600">Materiais extras e conteúdos especiais para turbinar seus estudos</p>
      </div>

      {/* Featured Resource */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-1" />
              Bônus em Destaque
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Kit Completo de Conversação
            </h3>
            <p className="text-purple-100 mb-6">
              Mais de 100 diálogos práticos para situações do dia a dia, com áudio nativo e exercícios interativos.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Download className="mr-2 h-4 w-4" />
              Download Gratuito
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-purple-200 text-sm">Diálogos</div>
              </div>
              <div>
                <div className="text-2xl font-bold">5h</div>
                <div className="text-purple-200 text-sm">de Áudio</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-purple-200 text-sm">Exercícios</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-purple-200 text-sm">Avaliação</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => {
          const Icon = getIcon(resource.type);
          return (
            <div key={resource.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${getTypeColor(resource.type)}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(resource.type)}`}>
                  {resource.type.toUpperCase()}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{resource.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{resource.size}</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span>{resource.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{resource.downloads} downloads</span>
                <button className="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Study Tips */}
      <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Dicas de Estudo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">📚</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Estude Diariamente</h4>
            <p className="text-gray-600 text-sm">Dedique pelo menos 30 minutos por dia aos estudos para melhores resultados.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🎧</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Pratique a Escuta</h4>
            <p className="text-gray-600 text-sm">Use os áudios disponíveis para treinar sua compreensão auditiva.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">💬</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Pratique Conversação</h4>
            <p className="text-gray-600 text-sm">Participe da comunidade e pratique com outros estudantes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}