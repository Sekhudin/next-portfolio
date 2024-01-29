const MONTHS = {
  '0': { en: 'January', id: 'Januari' },
  '1': { en: 'February', id: 'Februari' },
  '2': { en: 'March', id: 'Maret' },
  '3': { en: 'April', id: 'April' },
  '4': { en: 'May', id: 'Mei' },
  '5': { en: 'June', id: 'Juni' },
  '6': { en: 'July', id: 'Juli' },
  '7': { en: 'August', id: 'Agustus' },
  '8': { en: 'September', id: 'September' },
  '9': { en: 'October', id: 'Oktober' },
  '10': { en: 'November', id: 'November' },
  '11': { en: 'December', id: 'Desember' },
};

type CustomFormat = 'M D, Y';

namespace Str {
  export function toTitleCase(text: string): string {
    if (text.includes(' ')) {
      return text
        .split(' ')
        .map((v) => v.charAt(0).toUpperCase().trim() + v.slice(1).toLowerCase().trim())
        .join(' ')
        .trim();
    }
    return text.charAt(0).toUpperCase().trim() + text.slice(1).toLowerCase().trim();
  }

  export function toCapitalFirst(text: string): string {
    if (!text.length) return text;
    return text.charAt(0).toUpperCase().trim() + text.slice(1).toLowerCase().trim();
  }

  export function toFallback(text?: string): string {
    if (!text || text.length < 1) return '';
    if (text.length === 1) return text.toUpperCase();
    if (text.length === 2) return text.toUpperCase();
    return text.slice(0, 2).toUpperCase();
  }

  export const slugify = (str: string): string => {
    return str
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  export function toLocalDate(isoString: string): string {
    const date = new Date(isoString);
    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    } as Intl.DateTimeFormatOptions;
    const localdate = date.toLocaleDateString('id-ID', dateOptions);
    return localdate;
  }

  export function toCustomDate(isoString: string, customFormat?: CustomFormat): string {
    const format: CustomFormat = customFormat || 'M D, Y';
    const date = new Date(isoString);

    const day = date.getDate();
    const mKey = date.getMonth().toString() as keyof typeof MONTHS;
    const year = date.getFullYear();

    if (format === 'M D, Y') {
      return `${MONTHS[mKey].en} ${day}, ${year}`;
    }

    return `${MONTHS[mKey].en} ${day}, ${year}`;
  }
}
export default Str;
