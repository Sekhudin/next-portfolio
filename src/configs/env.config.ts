export const APP = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || '',
};

export const MODE = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  debug: false,
};

export const CONTACT = {
  WA: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || '',
  EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
};

export const SOCIAL_MEDIA = {
  GITHUB: process.env.NEXT_PUBLIC_GITHUB || '',
  LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN || '',
  TWITTER: process.env.NEXT_PUBLIC_TWITTER || '',
  INSTAGRAM: process.env.NEXT_PUBLIC_INSTAGRAM || '',
};

export const HASHNODE_CLIENT = {
  EP: process.env.NEXT_PUBLIC_HASHNODE_EP || '',
  HOST: process.env.NEXT_PUBLIC_HASHNODE_MY_HOST || '',
  ACCESS_TOKEN: process.env.NEXT_PUBLIC_HASHNODE_ACCESS_TOKEN || '',
  HOMEPAGE: 'https://hashnode.com/',
};

export const GITHUB_CLIENT = {
  EP: process.env.NEXT_PUBLIC_GITHUB_EP || '',
  APP_NAME: process.env.NEXT_PUBLIC_GITHUB_APP_NAME || '',
  ACCESS_TOKEN: process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN || '',
  BEARER_ACCESS_TOKEN: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
};

export const EMAIL_JS = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
};

export enum GQL_Client {
  NAME = 'personal-portfolio',
  VERSION = '1.0',
}

export enum GQL_Credential {
  INCLUDE = 'include',
  SAME_ORIGIN = 'same-origin',
  OMIT = 'omit',
}
