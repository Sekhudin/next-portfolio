namespace Str {
  export function toTitleCase(text: string): string {
    if (text.includes(' ')) {
      return text
        .split(' ')
        .map((v) => v.charAt(0).toUpperCase().trim() + v.slice(1).toLowerCase().trim())
        .join(' ').trim();
    }
    return text.charAt(0).toUpperCase().trim() + text.slice(1).toLowerCase().trim();
  }

  export function toCapitalFirst(text: string): string {
    if (!text.length) return text;
    return text.charAt(0).toUpperCase().trim() + text.slice(1).toLowerCase().trim();
  }
}
export default Str;
