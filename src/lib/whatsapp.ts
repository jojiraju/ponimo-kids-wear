export const WHATSAPP_NUMBER = "+919000000000"; // Replace with actual number

export const getWhatsAppUrl = (productName: string, price: number) => {
  const message = `Hello Ponimo! I'm interested in the ${productName} (Price: $${price.toFixed(2)}). Could you provide more details?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
