
export const GA_TRACKING_ID = 'G-NSE4CTFDH2'; // Substitua pelo seu ID

export const gtag = (...args) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
};
