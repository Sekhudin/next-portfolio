import { MONTHS } from 'configs/constant.config';

type CustomDateFormat = 'M D, Y';
class StringUtils {
  private value: string;
  constructor(value?: unknown) {
    if (value && typeof value === 'string') {
      this.value = value;
    } else {
      this.value = '';
    }
  }

  toTitleCase(): string {
    if (this.value.includes(' ')) {
      return this.value
        .split(' ')
        .map((v) => v.charAt(0).toUpperCase().trim() + v.slice(1).toLowerCase().trim())
        .join(' ')
        .trim();
    }
    return this.value.charAt(0).toUpperCase().trim() + this.value.slice(1).toLowerCase().trim();
  }

  capitalizeFirstLetter(): string {
    if (!this.value.length) return this.value;
    return this.value.charAt(0).toUpperCase().trim() + this.value.slice(1).toLowerCase().trim();
  }

  getFirstCharacters(n: number = 2): string {
    if (!this.value || this.value.length < 1) return '';
    if (this.value.length <= n) return this.value.toUpperCase();
    return this.value.slice(0, n).toUpperCase();
  }

  slugify(): string {
    return this.value
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  formatSlug(): string {
    return this.value.replace(/[-_]/g, ' ');
  }

  asTag() {
    return '#'.concat(this.value);
  }

  parseDate(): string {
    const date = new Date(this.value);
    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    } as Intl.DateTimeFormatOptions;
    return date.toLocaleDateString('id-ID', dateOptions);
  }

  parseCustomDate(customFormat?: CustomDateFormat): string {
    const format: CustomDateFormat = customFormat || 'M D, Y';
    const date = new Date(this.value);

    const day = date.getDate();
    const mKey = date.getMonth().toString() as keyof typeof MONTHS;
    const year = date.getFullYear();

    if (format === 'M D, Y') {
      return `${MONTHS[mKey].en} ${day}, ${year}`;
    }

    return `${MONTHS[mKey].en} ${day}, ${year}`;
  }
}

const stringUtils = (value?: unknown) => new StringUtils(value);
export default stringUtils;
