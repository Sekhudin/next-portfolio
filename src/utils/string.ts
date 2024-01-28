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
}
export default Str;
