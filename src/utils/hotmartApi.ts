// 🔧 CONFIGURAÇÃO DA API DA HOTMART
// Este arquivo contém as funções para integração com a Hotmart

interface HotmartWebhookPayload {
  event: string;
  data: {
    buyer: {
      email: string;
      name: string;
    };
    purchase: {
      status: string;
      product: {
        id: string;
        name: string;
      };
    };
  };
}

// 🔧 SUBSTITUA ESTAS CONFIGURAÇÕES PELAS SUAS CREDENCIAIS DA HOTMART
const HOTMART_CONFIG = {
  CLIENT_ID: 'your_hotmart_client_id',
  CLIENT_SECRET: 'your_hotmart_client_secret',
  BASIC_TOKEN: 'your_hotmart_basic_token',
  PRODUCT_ID: 'your_product_id'
};

export const verifyHotmartPurchase = async (email: string): Promise<boolean> => {
  try {
    // 🔧 IMPLEMENTAÇÃO REAL DA API DA HOTMART
    // Substitua esta implementação pela integração real com a API da Hotmart
    
    const response = await fetch('https://api-sec-vlc.hotmart.com/payments/api/v1/sales/users', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${HOTMART_CONFIG.BASIC_TOKEN}`,
        'Content-Type': 'application/json',
      },
      // Adicione os parâmetros necessários para buscar por email
    });

    if (!response.ok) {
      throw new Error('Failed to verify purchase');
    }

    const data = await response.json();
    
    // Verificar se o email existe nas compras do produto
    return data.items?.some((purchase: any) => 
      purchase.buyer.email.toLowerCase() === email.toLowerCase() &&
      purchase.product.id === HOTMART_CONFIG.PRODUCT_ID &&
      purchase.status === 'APPROVED'
    ) || false;

  } catch (error) {
    console.error('Error verifying Hotmart purchase:', error);
    return false;
  }
};

export const handleHotmartWebhook = (payload: HotmartWebhookPayload) => {
  // 🔧 PROCESSAMENTO DO WEBHOOK DA HOTMART
  // Esta função deve ser chamada quando receber webhooks da Hotmart
  
  const { event, data } = payload;
  
  switch (event) {
    case 'PURCHASE_APPROVED':
      // Processar compra aprovada
      console.log('Purchase approved for:', data.buyer.email);
      break;
    case 'PURCHASE_REFUNDED':
      // Processar reembolso
      console.log('Purchase refunded for:', data.buyer.email);
      break;
    default:
      console.log('Unhandled webhook event:', event);
  }
};

// 🔧 ENDPOINT PARA RECEBER WEBHOOKS (implementar no backend)
/*
POST /api/hotmart/webhook
{
  "event": "PURCHASE_APPROVED",
  "data": {
    "buyer": {
      "email": "customer@example.com",
      "name": "Customer Name"
    },
    "purchase": {
      "status": "APPROVED",
      "product": {
        "id": "your_product_id",
        "name": "Your Product Name"
      }
    }
  }
}
*/