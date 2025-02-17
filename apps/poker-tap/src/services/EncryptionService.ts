export const EncryptionService = {
  encrypt: (data: string): string => {
    return btoa(data);
  },

  decrypt: (encryptedData: string): string => {
    return atob(encryptedData);
  },
};
