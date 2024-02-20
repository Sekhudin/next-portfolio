namespace Util {
  export function page(current: number, pageSize: number, totalData: number) {
    const total: number = Math.ceil(totalData / pageSize);
    const status: string = `${current} of ${total}`;
    return { current, total, status };
  }
}

export default Util;
