export const sendWhatsAppMessage = (message: string) => {
  const phoneNumber = '+6289505366193';
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappURL, '_blank');
};