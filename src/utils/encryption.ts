import CryptoJS from 'crypto-js';

const SECRET_KEY = 'invoicer-secret-key-2024-development';

export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

export const decryptData = (encryptedData: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const encryptInvoiceData = (invoiceData: any): string => {
  return encryptData(JSON.stringify(invoiceData));
};

export const decryptInvoiceData = (encryptedData: string): any => {
  return JSON.parse(decryptData(encryptedData));
};