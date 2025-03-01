// src/hooks/useAnalytics.js
export const useAnalytics = () => {
    // Função para enviar evento para o GTM
    const trackEvent = (eventName, eventParams = {}) => {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: eventName,
          ...eventParams
        });
      }
    };
  
    // Função para enviar evento diretamente para o GA4
    const trackGA4Event = (eventName, eventParams = {}) => {
      if (window.gtag) {
        window.gtag('event', eventName, eventParams);
      }
    };
  
    // Função para rastrear pageviews
    const trackPageView = (pagePath) => {
      // Via GTM
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'page_view',
          page_path: pagePath || window.location.pathname
        });
      }
      
      // Via GA4 direto (caso necessário)
      if (window.gtag) {
        window.gtag('config', 'G-NSE4CTFDH2', {
          page_path: pagePath || window.location.pathname
        });
      }
    };
  
    return { trackEvent, trackGA4Event, trackPageView };
  };