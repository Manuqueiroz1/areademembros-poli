import { useLocalStorage } from './useLocalStorage';

export type Language = 'pt' | 'es' | 'en';

interface Translations {
  [key: string]: {
    pt: string;
    es: string;
    en: string;
  };
}

const translations: Translations = {
  // Header
  'header.title': {
    pt: 'Área de Membros - Teacher Poli',
    es: 'Área de Miembros - Teacher Poli',
    en: 'Members Area - Teacher Poli'
  },
  'header.logout': {
    pt: 'Sair',
    es: 'Salir',
    en: 'Logout'
  },
  
  // Navigation
  'nav.onboarding': {
    pt: 'Comece por Aqui',
    es: 'Empiece por Aquí',
    en: 'Start Here'
  },
  'nav.ai-assistant': {
    pt: 'Gere seu Plano de Estudos',
    es: 'Genere su Plan de Estudios',
    en: 'Generate Your Study Plan'
  },
  'nav.teacher-poli': {
    pt: 'Teacher Poli',
    es: 'Teacher Poli',
    en: 'Teacher Poli'
  },
  'nav.resources': {
    pt: 'Bônus',
    es: 'Bonos',
    en: 'Bonus'
  },
  'nav.community': {
    pt: 'Comunidade',
    es: 'Comunidad',
    en: 'Community'
  },
  'nav.settings': {
    pt: 'Configurações',
    es: 'Configuraciones',
    en: 'Settings'
  },
  
  // Onboarding Section
  'onboarding.title': {
    pt: 'Comece por Aqui',
    es: 'Empiece por Aquí',
    en: 'Start Here'
  },
  'onboarding.subtitle': {
    pt: 'Dê os primeiros passos na sua jornada de aprendizado com a Teacher Poli',
    es: 'Dé los primeros pasos en su viaje de aprendizaje con Teacher Poli',
    en: 'Take the first steps in your learning journey with Teacher Poli'
  },
  'onboarding.videoList': {
    pt: 'Lista de Vídeos',
    es: 'Lista de Videos',
    en: 'Video List'
  },
  'onboarding.selectVideo': {
    pt: 'Selecione um vídeo para começar',
    es: 'Seleccione un video para comenzar',
    en: 'Select a video to start'
  },
  'onboarding.markCompleted': {
    pt: 'Marcar como Concluído',
    es: 'Marcar como Completado',
    en: 'Mark as Completed'
  },
  'onboarding.completed': {
    pt: 'Concluído',
    es: 'Completado',
    en: 'Completed'
  },

  // AI Assistant Section
  'ai.title': {
    pt: 'Gere seu Plano de Estudos',
    es: 'Genere su Plan de Estudios',
    en: 'Generate Your Study Plan'
  },
  'ai.subtitle': {
    pt: 'Crie um plano personalizado de 30 dias com nossa IA especializada em ensino de inglês',
    es: 'Cree un plan personalizado de 30 días con nuestra IA especializada en enseñanza de inglés',
    en: 'Create a personalized 30-day plan with our AI specialized in English teaching'
  },
  'ai.welcomeMessage': {
    pt: 'Olá! Sou sua assistente de IA da Teacher Poli. Estou aqui para ajudar você a criar um plano de estudos personalizado. Para começar, me conte sobre seus objetivos de aprendizado e seu nível atual.',
    es: '¡Hola! Soy tu asistente de IA de Teacher Poli. Estoy aquí para ayudarte a crear un plan de estudios personalizado. Para empezar, cuéntame sobre tus objetivos de aprendizaje y tu nivel actual.',
    en: 'Hello! I am your Teacher Poli AI assistant. I am here to help you create a personalized study plan. To get started, tell me about your learning goals and current level.'
  },
  'ai.basicEnglish': {
    pt: 'Inglês Básico',
    es: 'Inglés Básico',
    en: 'Basic English'
  },
  'ai.basicEnglishDesc': {
    pt: 'Plano para iniciantes em inglês',
    es: 'Plan para principiantes en inglés',
    en: 'Plan for English beginners'
  },
  'ai.intermediateEnglish': {
    pt: 'Inglês Intermediário',
    es: 'Inglés Intermedio',
    en: 'Intermediate English'
  },
  'ai.intermediateEnglishDesc': {
    pt: 'Aperfeiçoe suas habilidades',
    es: 'Perfeccione sus habilidades',
    en: 'Improve your skills'
  },
  'ai.advancedEnglish': {
    pt: 'Inglês Avançado',
    es: 'Inglés Avanzado',
    en: 'Advanced English'
  },
  'ai.advancedEnglishDesc': {
    pt: 'Fluência e proficiência',
    es: 'Fluidez y competencia',
    en: 'Fluency and proficiency'
  },
  'ai.30days': {
    pt: '30 dias',
    es: '30 días',
    en: '30 days'
  },
  'ai.quickTemplates': {
    pt: 'Templates Rápidos',
    es: 'Plantillas Rápidas',
    en: 'Quick Templates'
  },
  'ai.generatedPlan': {
    pt: 'Seu Plano Gerado',
    es: 'Su Plan Generado',
    en: 'Your Generated Plan'
  },
  'ai.downloadPlan': {
    pt: 'Baixar Plano em PDF',
    es: 'Descargar Plan en PDF',
    en: 'Download Plan as PDF'
  },
  'ai.downloadPlanShort': {
    pt: 'Baixar PDF',
    es: 'Descargar PDF',
    en: 'Download PDF'
  },
  'ai.validFor30Days': {
    pt: 'Válido por 30 dias. Após esse período, gere um novo plano.',
    es: 'Válido por 30 días. Después de este período, genere un nuevo plan.',
    en: 'Valid for 30 days. After this period, generate a new plan.'
  },
  'ai.assistant': {
    pt: 'Assistente Teacher Poli',
    es: 'Asistente Teacher Poli',
    en: 'Teacher Poli Assistant'
  },
  'ai.specialist': {
    pt: 'Especialista em planos de estudo',
    es: 'Especialista en planes de estudio',
    en: 'Study plans specialist'
  },
  'ai.placeholder': {
    pt: 'Digite sua mensagem...',
    es: 'Escriba su mensaje...',
    en: 'Type your message...'
  },

  // Teacher Poli Section
  'teacherpoli.title': {
    pt: 'Teacher Poli Platform',
    es: 'Plataforma Teacher Poli',
    en: 'Teacher Poli Platform'
  },
  'teacherpoli.subtitle': {
    pt: 'Acesse a plataforma completa de ensino de inglês',
    es: 'Acceda a la plataforma completa de enseñanza de inglés',
    en: 'Access the complete English teaching platform'
  },
  'teacherpoli.chatTitle': {
    pt: 'Converse com a Teacher Poli IA',
    es: 'Converse con Teacher Poli IA',
    en: 'Chat with Teacher Poli AI'
  },
  'teacherpoli.chatDescription': {
    pt: 'Professora IA que conversa sobre qualquer assunto, gera textos, corrige seus exercícios e oferece feedback personalizado para acelerar seu aprendizado.',
    es: 'Profesora IA que conversa sobre cualquier tema, genera textos, corrige sus ejercicios y ofrece retroalimentación personalizada para acelerar su aprendizaje.',
    en: 'AI teacher that talks about any subject, generates texts, corrects your exercises and offers personalized feedback to accelerate your learning.'
  },
  'teacherpoli.enterButton': {
    pt: '🚀 ENTRAR NA TEACHER POLI',
    es: '🚀 ENTRAR EN TEACHER POLI',
    en: '🚀 ENTER TEACHER POLI'
  },
  'teacherpoli.enterButtonShort': {
    pt: '🚀 ENTRAR',
    es: '🚀 ENTRAR',
    en: '🚀 ENTER'
  },
  'teacherpoli.demo': {
    pt: 'Ver Demonstração',
    es: 'Ver Demostración',
    en: 'View Demo'
  },
  'teacherpoli.demoShort': {
    pt: 'Demo',
    es: 'Demo',
    en: 'Demo'
  },
  'teacherpoli.quickAccess': {
    pt: 'Acesso Rápido à Plataforma',
    es: 'Acceso Rápido a la Plataforma',
    en: 'Quick Platform Access'
  },
  'teacherpoli.quickAccessDesc': {
    pt: 'Clique no botão abaixo para acessar diretamente sua conta na Teacher Poli',
    es: 'Haga clic en el botón de abajo para acceder directamente a su cuenta en Teacher Poli',
    en: 'Click the button below to directly access your Teacher Poli account'
  },
  'teacherpoli.input': {
    pt: 'Pratique leitura',
    es: 'Practique lectura',
    en: 'Practice reading'
  },
  'teacherpoli.writing': {
    pt: 'Melhore sua escrita',
    es: 'Mejore su escritura',
    en: 'Improve your writing'
  },
  'teacherpoli.roleplay': {
    pt: 'Simule situações',
    es: 'Simule situaciones',
    en: 'Simulate situations'
  },
  'teacherpoli.speaking': {
    pt: 'Pratique conversação',
    es: 'Practique conversación',
    en: 'Practice conversation'
  },

  // Resources Section
  'resources.title': {
    pt: 'Bônus Exclusivos',
    es: 'Bonos Exclusivos',
    en: 'Exclusive Bonuses'
  },
  'resources.subtitle': {
    pt: 'Materiais extras, vídeos e quizzes para turbinar seus estudos',
    es: 'Materiales extra, videos y cuestionarios para potenciar sus estudios',
    en: 'Extra materials, videos and quizzes to boost your studies'
  },
  'resources.watch': {
    pt: 'Assistir',
    es: 'Ver',
    en: 'Watch'
  },
  'resources.takeQuiz': {
    pt: 'Fazer Quiz',
    es: 'Hacer Quiz',
    en: 'Take Quiz'
  },
  'resources.view': {
    pt: 'Visualizar',
    es: 'Ver',
    en: 'View'
  },
  'resources.download': {
    pt: 'Baixar PDF',
    es: 'Descargar PDF',
    en: 'Download PDF'
  },
  'resources.submitAnswers': {
    pt: 'Enviar Respostas',
    es: 'Enviar Respuestas',
    en: 'Submit Answers'
  },
  'resources.result': {
    pt: 'Resultado',
    es: 'Resultado',
    en: 'Result'
  },
  'resources.explanation': {
    pt: 'Explicação',
    es: 'Explicación',
    en: 'Explanation'
  },
  'resources.accesses': {
    pt: 'acessos',
    es: 'accesos',
    en: 'accesses'
  },

  // Community Section
  'community.title': {
    pt: 'Comunidade WhatsApp',
    es: 'Comunidad WhatsApp',
    en: 'WhatsApp Community'
  },
  'community.subtitle': {
    pt: 'Conecte-se com milhares de estudantes e pratique inglês todos os dias',
    es: 'Conéctese con miles de estudiantes y practique inglés todos los días',
    en: 'Connect with thousands of students and practice English every day'
  },
  'community.joinTitle': {
    pt: 'Junte-se à Nossa Comunidade',
    es: 'Únase a Nuestra Comunidad',
    en: 'Join Our Community'
  },
  'community.joinDescription': {
    pt: 'Mais de 1.500 alunos ativos praticando inglês, compartilhando experiências e se ajudando mutuamente.',
    es: 'Más de 1.500 estudiantes activos practicando inglés, compartiendo experiencias y ayudándose mutuamente.',
    en: 'Over 1,500 active students practicing English, sharing experiences and helping each other.'
  },
  'community.activeMembers': {
    pt: 'Membros Ativos',
    es: 'Miembros Activos',
    en: 'Active Members'
  },
  'community.membersCount': {
    pt: 'membros ativos',
    es: 'miembros activos',
    en: 'active members'
  },
  'community.enterCommunity': {
    pt: 'Entrar na Comunidade',
    es: 'Entrar en la Comunidad',
    en: 'Join Community'
  },
  'community.enter': {
    pt: 'Entrar',
    es: 'Entrar',
    en: 'Join'
  },
  'community.whatYouFind': {
    pt: 'O que você encontra na comunidade',
    es: 'Lo que encuentras en la comunidad',
    en: 'What you find in the community'
  },
  'community.rules': {
    pt: 'Regras da Comunidade',
    es: 'Reglas de la Comunidad',
    en: 'Community Rules'
  },
  'community.allowed': {
    pt: '✅ Permitido:',
    es: '✅ Permitido:',
    en: '✅ Allowed:'
  },
  'community.notAllowed': {
    pt: '❌ Não permitido:',
    es: '❌ No permitido:',
    en: '❌ Not allowed:'
  },

  // Settings
  'settings.title': {
    pt: 'Configurações',
    es: 'Configuraciones',
    en: 'Settings'
  },
  'settings.subtitle': {
    pt: 'Personalize sua experiência de aprendizado',
    es: 'Personalice su experiencia de aprendizaje',
    en: 'Customize your learning experience'
  },
  'settings.appearance': {
    pt: 'Aparência',
    es: 'Apariencia',
    en: 'Appearance'
  },
  'settings.appearance.subtitle': {
    pt: 'Personalize o tema da interface',
    es: 'Personalice el tema de la interfaz',
    en: 'Customize the interface theme'
  },
  'settings.theme': {
    pt: 'Tema',
    es: 'Tema',
    en: 'Theme'
  },
  'settings.theme.light': {
    pt: 'Claro',
    es: 'Claro',
    en: 'Light'
  },
  'settings.theme.dark': {
    pt: 'Escuro',
    es: 'Oscuro',
    en: 'Dark'
  },
  'settings.theme.system': {
    pt: 'Sistema',
    es: 'Sistema',
    en: 'System'
  },
  'settings.language': {
    pt: 'Idioma',
    es: 'Idioma',
    en: 'Language'
  },
  'settings.language.subtitle': {
    pt: 'Escolha o idioma da interface',
    es: 'Elija el idioma de la interfaz',
    en: 'Choose the interface language'
  },
  'settings.language.interface': {
    pt: 'Idioma da Interface',
    es: 'Idioma de la Interfaz',
    en: 'Interface Language'
  },
  'settings.account': {
    pt: 'Conta',
    es: 'Cuenta',
    en: 'Account'
  },
  'settings.account.subtitle': {
    pt: 'Gerencie suas informações pessoais',
    es: 'Gestione su información personal',
    en: 'Manage your personal information'
  },
  'settings.changePassword': {
    pt: 'Alterar senha',
    es: 'Cambiar contraseña',
    en: 'Change password'
  },
  'settings.personalData': {
    pt: 'Dados pessoais',
    es: 'Datos personales',
    en: 'Personal data'
  },
  'settings.purchaseHistory': {
    pt: 'Histórico de compras',
    es: 'Historial de compras',
    en: 'Purchase history'
  },
  'settings.notifications': {
    pt: 'Notificações',
    es: 'Notificaciones',
    en: 'Notifications'
  },
  'settings.notifications.subtitle': {
    pt: 'Configure suas preferências de notificação',
    es: 'Configure sus preferencias de notificación',
    en: 'Configure your notification preferences'
  },
  'settings.emailReminder': {
    pt: 'E-mail de lembrete',
    es: 'Recordatorio por correo',
    en: 'Email reminder'
  },
  'settings.emailReminder.desc': {
    pt: 'Receba lembretes para estudar',
    es: 'Reciba recordatorios para estudiar',
    en: 'Receive study reminders'
  },
  'settings.newContent': {
    pt: 'Novos conteúdos',
    es: 'Nuevo contenido',
    en: 'New content'
  },
  'settings.newContent.desc': {
    pt: 'Seja notificado sobre novos materiais',
    es: 'Sea notificado sobre nuevos materiales',
    en: 'Be notified about new materials'
  },
  'settings.communityNotif': {
    pt: 'Comunidade',
    es: 'Comunidad',
    en: 'Community'
  },
  'settings.communityNotif.desc': {
    pt: 'Atividades da comunidade WhatsApp',
    es: 'Actividades de la comunidad WhatsApp',
    en: 'WhatsApp community activities'
  },
  'settings.privacy': {
    pt: 'Privacidade e Segurança',
    es: 'Privacidad y Seguridad',
    en: 'Privacy & Security'
  },
  'settings.privacy.subtitle': {
    pt: 'Gerencie suas configurações de privacidade',
    es: 'Gestione su configuración de privacidad',
    en: 'Manage your privacy settings'
  },
  'settings.privacyPolicy': {
    pt: 'Política de Privacidade',
    es: 'Política de Privacidad',
    en: 'Privacy Policy'
  },
  'settings.termsOfUse': {
    pt: 'Termos de Uso',
    es: 'Términos de Uso',
    en: 'Terms of Use'
  },
  'settings.exportData': {
    pt: 'Exportar dados',
    es: 'Exportar datos',
    en: 'Export data'
  },
  'settings.deleteAccount': {
    pt: 'Excluir conta',
    es: 'Eliminar cuenta',
    en: 'Delete account'
  },

  // Locked Module
  'locked.title': {
    pt: 'Módulo Bloqueado',
    es: 'Módulo Bloqueado',
    en: 'Locked Module'
  },
  'locked.description': {
    pt: 'Para acessar este módulo, você precisa primeiro gerar seu plano de estudos personalizado.',
    es: 'Para acceder a este módulo, primero debe generar su plan de estudios personalizado.',
    en: 'To access this module, you need to first generate your personalized study plan.'
  },
  'locked.generatePlan': {
    pt: 'Gerar Meu Plano de Estudos',
    es: 'Generar Mi Plan de Estudios',
    en: 'Generate My Study Plan'
  },

  // Email Verification
  'email.welcome': {
    pt: 'Bem-vindo à Teacher Poli!',
    es: '¡Bienvenido a Teacher Poli!',
    en: 'Welcome to Teacher Poli!'
  },
  'email.confirmEmail': {
    pt: 'Para acessar sua área de membros, confirme o e-mail usado na compra',
    es: 'Para acceder a su área de miembros, confirme el correo usado en la compra',
    en: 'To access your members area, confirm the email used for purchase'
  },
  'email.verification': {
    pt: 'Verificação de E-mail',
    es: 'Verificación de Correo',
    en: 'Email Verification'
  },
  'email.enterEmail': {
    pt: 'Digite o e-mail que você usou para comprar o curso na Hotmart',
    es: 'Ingrese el correo que usó para comprar el curso en Hotmart',
    en: 'Enter the email you used to buy the course on Hotmart'
  },
  'email.purchaseEmail': {
    pt: 'E-mail da compra',
    es: 'Correo de compra',
    en: 'Purchase email'
  },
  'email.verifyEmail': {
    pt: 'Verificar E-mail',
    es: 'Verificar Correo',
    en: 'Verify Email'
  },
  'email.verifying': {
    pt: 'Verificando...',
    es: 'Verificando...',
    en: 'Verifying...'
  },
  'email.testMode': {
    pt: '🔧 Modo de Teste (Desenvolvimento)',
    es: '🔧 Modo de Prueba (Desarrollo)',
    en: '🔧 Test Mode (Development)'
  },
  'email.notFound': {
    pt: 'Não encontrou seu e-mail?',
    es: '¿No encontró su correo?',
    en: "Didn't find your email?"
  },
  'email.contact': {
    pt: 'Entre em contato conosco',
    es: 'Contáctenos',
    en: 'Contact us'
  },

  // Password Creation
  'password.createTitle': {
    pt: 'Crie sua Senha',
    es: 'Cree su Contraseña',
    en: 'Create Your Password'
  },
  'password.verified': {
    pt: 'E-mail verificado com sucesso! Agora crie uma senha segura para acessar sua conta.',
    es: '¡Correo verificado con éxito! Ahora cree una contraseña segura para acceder a su cuenta.',
    en: 'Email verified successfully! Now create a secure password to access your account.'
  },
  'password.emailVerified': {
    pt: 'E-mail Verificado!',
    es: '¡Correo Verificado!',
    en: 'Email Verified!'
  },
  'password.createSecure': {
    pt: 'Agora crie uma senha para acessar sua conta',
    es: 'Ahora cree una contraseña para acceder a su cuenta',
    en: 'Now create a password to access your account'
  },
  'password.newPassword': {
    pt: 'Nova Senha',
    es: 'Nueva Contraseña',
    en: 'New Password'
  },
  'password.confirmPassword': {
    pt: 'Confirmar Senha',
    es: 'Confirmar Contraseña',
    en: 'Confirm Password'
  },
  'password.strength': {
    pt: 'Força da senha:',
    es: 'Fuerza de la contraseña:',
    en: 'Password strength:'
  },
  'password.strong': {
    pt: 'Forte',
    es: 'Fuerte',
    en: 'Strong'
  },
  'password.good': {
    pt: 'Boa',
    es: 'Buena',
    en: 'Good'
  },
  'password.medium': {
    pt: 'Média',
    es: 'Media',
    en: 'Medium'
  },
  'password.weak': {
    pt: 'Fraca',
    es: 'Débil',
    en: 'Weak'
  },
  'password.requirements': {
    pt: 'Requisitos da senha:',
    es: 'Requisitos de la contraseña:',
    en: 'Password requirements:'
  },
  'password.createAndContinue': {
    pt: 'Criar Senha e Continuar',
    es: 'Crear Contraseña y Continuar',
    en: 'Create Password and Continue'
  },
  'password.creating': {
    pt: 'Criando senha...',
    es: 'Creando contraseña...',
    en: 'Creating password...'
  },

  // Login
  'login.title': {
    pt: 'Área de Membros - Teacher Poli',
    es: 'Área de Miembros - Teacher Poli',
    en: 'Members Area - Teacher Poli'
  },
  'login.titleShort': {
    pt: 'Teacher Poli',
    es: 'Teacher Poli',
    en: 'Teacher Poli'
  },
  'login.subtitle': {
    pt: 'Acesse com suas credenciais da Teacher Poli',
    es: 'Acceda con sus credenciales de Teacher Poli',
    en: 'Access with your Teacher Poli credentials'
  },
  'login.email': {
    pt: 'E-mail',
    es: 'Correo',
    en: 'Email'
  },
  'login.password': {
    pt: 'Senha',
    es: 'Contraseña',
    en: 'Password'
  },
  'login.enter': {
    pt: 'Entrar',
    es: 'Entrar',
    en: 'Login'
  },
  'login.forgotPassword': {
    pt: 'Esqueci minha senha',
    es: 'Olvidé mi contraseña',
    en: 'Forgot my password'
  },
  'login.firstTime': {
    pt: 'Primeira vez aqui?',
    es: '¿Primera vez aquí?',
    en: 'First time here?'
  },
  'login.verifyPurchaseEmail': {
    pt: 'Verificar e-mail da compra',
    es: 'Verificar correo de compra',
    en: 'Verify purchase email'
  },
  
  // Common
  'common.loading': {
    pt: 'Carregando...',
    es: 'Cargando...',
    en: 'Loading...'
  },
  'common.save': {
    pt: 'Salvar',
    es: 'Guardar',
    en: 'Save'
  },
  'common.cancel': {
    pt: 'Cancelar',
    es: 'Cancelar',
    en: 'Cancel'
  }
};

export function useLanguage() {
  const [language, setLanguage] = useLocalStorage<Language>('teacherpoli_language', 'pt');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return {
    language,
    setLanguage,
    t
  };
}