class CommonUtils {
  static paginate(totalData: number, current: number, pageSize: number) {
    const total: number = Math.ceil(totalData / pageSize);
    const status: string = `${current} of ${total}`;
    return { current, total, status };
  }
}

export default CommonUtils;
