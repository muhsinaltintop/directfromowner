// utils.js
export const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
};

export const slugToTitle = (slug) => {
  return slug
    .split('-')                   // Tireleri boşluk ile değiştirir
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Her kelimenin ilk harfini büyük yapar
    .join(' ');                   // Kelimeleri birleştirir
};
