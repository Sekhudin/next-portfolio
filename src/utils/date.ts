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

namespace Dt {
  export function ISOtoLocal(isoString: string): string {
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

  export function ISOtoCustom(isoString: string, customFormat?: CustomFormat): string {
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

export default Dt;
