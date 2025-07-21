import React, { useState } from 'react';
import { Download, FileText, Video, HelpCircle, Play, CheckCircle, X, Eye } from 'lucide-react';
import { Resource, QuizQuestion } from '../types';
const sampleResources: Resource[] = [
  {
    id: '1',
    title: 'Maximizando seu Aprendizado com a Teacher Poli',
    description: 'Ebook Completo Explicando Todas as Funcionalidades da Teacher Poli',
    type: 'pdf',
    pdfUrl: '/sample.pdf',
    size: '2.5 MB',
    rating: 4.8,
    downloads: 1250
  },
  {
    id: '2',
    title: 'Curso Stress in Pronunciation',
    description: 'Conteúdo complementar para aprofundar seus estudos e aprender como os nativos realmente falam',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/mttHTuEK5Xs',
    size: '1.2 GB',
    rating: 4.9,
    downloads: 890
  },
  {
    id: '3',
    title: 'Quiz: Teste seus Conhecimentos',
    description: 'Avalie seu progresso com questões sobre gramática e vocabulário',
    type: 'quiz',
    questions: [
      {
        id: '1',
        question: 'Qual é a forma correta do verbo "to be" na terceira pessoa do singular?',
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 1,
        explanation: '"Is" é a forma correta do verbo "to be" para he, she, it.'
      },
      {
        id: '2',
        question: 'Como se diz "obrigado" em inglês?',
        options: ['Please', 'Sorry', 'Thank you', 'Excuse me'],
        correctAnswer: 2,
        explanation: '"Thank you" é a forma mais comum de agradecer em inglês.'
      }
    ],
    rating: 4.7,
    downloads: 650
  }
];

export default function EnhancedResourcesSection() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: string]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const t = (key: string) => key;

  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return FileText;
      case 'video':
        return Video;
      case 'quiz':
        return HelpCircle;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'bg-red-100 text-red-600';
      case 'video':
        return 'bg-blue-100 text-blue-600';
      case 'quiz':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const handleResourceClick = (resource: Resource) => {
    setSelectedResource(resource);
    setShowModal(true);
    if (resource.type === 'quiz') {
      setQuizAnswers({});
      setQuizSubmitted(false);
    }
  };

  const handleQuizAnswer = (questionId: string, answerIndex: number) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const submitQuiz = () => {
    if (!selectedResource?.questions) return;
    
    let correct = 0;
    selectedResource.questions.forEach(question => {
      if (quizAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    
    setQuizScore(correct);
    setQuizSubmitted(true);
  };

  const downloadResource = (resource: Resource) => {
    // Simulate download
    const element = document.createElement('a');
    const file = new Blob([`Conteúdo do recurso: ${resource.title}`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${resource.title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{t('resources.title')}</h2>
        <p className="text-sm sm:text-base text-gray-600">{t('resources.subtitle')}</p>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {sampleResources.map((resource) => {
          const Icon = getIcon(resource.type);
          return (
            <div key={resource.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${getTypeColor(resource.type)}`}>
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(resource.type)}`}>
                  {resource.type.toUpperCase()}
                </span>
              </div>
              
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{resource.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3">{resource.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                {resource.size && <span className="text-xs sm:text-sm">{resource.size}</span>}
                {resource.rating && (
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-xs sm:text-sm ml-1">{resource.rating}</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                {resource.downloads && (
                  <span className="text-xs sm:text-sm text-gray-500">{resource.downloads} acessos</span>
                )}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleResourceClick(resource)}
                    className="inline-flex items-center px-3 sm:px-4 py-2 bg-purple-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    {resource.type === 'video' ? <Play className="mr-1 h-4 w-4" /> : 
                     resource.type === 'quiz' ? <HelpCircle className="mr-1 h-4 w-4" /> :
                     <Eye className="mr-1 h-4 w-4" />}
                    <span className="hidden sm:inline">
                      {resource.type === 'video' ? t('resources.watch') : 
                       resource.type === 'quiz' ? t('resources.takeQuiz') : t('resources.view')}
                    </span>
                    <span className="sm:hidden">
                      {resource.type === 'video' ? '▶' : 
                       resource.type === 'quiz' ? '?' : '👁'}
                    </span>
                  </button>
                  {resource.type === 'pdf' && (
                    <button
                      onClick={() => downloadResource(resource)}
                      className="inline-flex items-center px-3 py-2 bg-gray-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {showModal && selectedResource && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{selectedResource.title}</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Video Content */}
              {selectedResource.type === 'video' && selectedResource.videoUrl && (
                <div className="aspect-video mb-4">
                  <iframe
                    src={selectedResource.videoUrl}
                    title={selectedResource.title}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  />
                </div>
              )}

              {/* PDF Content */}
              {selectedResource.type === 'pdf' && (
                <div className="text-center py-12">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">{t('resources.pdfPreview') || 'Visualização de PDF em desenvolvimento'}</p>
                  <button
                    onClick={() => downloadResource(selectedResource)}
                    className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Baixar PDF
                  </button>
                </div>
              )}

              {/* Quiz Content */}
              {selectedResource.type === 'quiz' && selectedResource.questions && (
                <div className="space-y-6">
                  {selectedResource.questions.map((question, index) => (
                    <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        {index + 1}. {question.question}
                      </h4>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <label
                            key={optionIndex}
                            className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                              quizSubmitted
                                ? optionIndex === question.correctAnswer
                                  ? 'border-green-500 bg-green-50'
                                  : quizAnswers[question.id] === optionIndex && optionIndex !== question.correctAnswer
                                  ? 'border-red-500 bg-red-50'
                                  : 'border-gray-200'
                                : quizAnswers[question.id] === optionIndex
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={optionIndex}
                              checked={quizAnswers[question.id] === optionIndex}
                              onChange={() => handleQuizAnswer(question.id, optionIndex)}
                              disabled={quizSubmitted}
                              className="mr-3"
                            />
                            <span className="text-sm">{option}</span>
                            {quizSubmitted && optionIndex === question.correctAnswer && (
                              <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                            )}
                          </label>
                        ))}
                      </div>
                      {quizSubmitted && question.explanation && (
                        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <strong>Explicação:</strong> {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}

                  {!quizSubmitted ? (
                    <button
                      onClick={submitQuiz}
                      disabled={Object.keys(quizAnswers).length !== selectedResource.questions.length}
                      className="w-full py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Enviar Respostas
                    </button>
                  ) : (
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        Resultado: {quizScore}/{selectedResource.questions.length}
                      </h4>
                      <p className="text-gray-600">
                        {quizScore === selectedResource.questions.length
                          ? '🎉 Parabéns! Você acertou todas!'
                          : quizScore >= selectedResource.questions.length / 2
                          ? '👍 Bom trabalho! Continue praticando!'
                          : '📚 Continue estudando e tente novamente!'}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <p className="text-gray-600 text-sm mt-4">{selectedResource.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}