namespace Pg {
  export function pageOfPage(page: number, pageSize: number, totalData: number) {
    const totalPage = Math.ceil(totalData / pageSize);
    return {
      page,
      totalPage,
      text: `${page} of ${totalPage}`,
    };
  }
}

export default Pg;
