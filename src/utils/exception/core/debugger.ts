namespace Debug {
  /* eslint-disable no-console */
  export function error(e: any) {
    if (process.env.NODE_ENV === 'development') {
      if (typeof e === 'object') {
        console.log('ERROR :', { ...e });
        return;
      }
      console.log('ERROR :', e);
    }
  }
}

export default Debug;
