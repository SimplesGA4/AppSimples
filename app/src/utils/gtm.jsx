
export const pushToDataLayer = (event) => {
    console.log("Disparando para o dataLayer:", event);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
};
  