import React from 'react';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { MODE } from '../../configs/env.config';

class Debuger {
  /* eslint-disable no-console */
  showError(e: any) {
    if (MODE.isDevelopment) {
      if (typeof e === 'object') {
        console.debug('[Debugger] ERROR :', { ...e });
        return;
      }
      console.debug('[Debugger] ERROR :', e);
    }
  }

  apolloError() {
    if (MODE.isDevelopment && MODE.debug) {
      console.debug(`Apollo Client [Development]`);
      loadDevMessages();
      loadErrorMessages();
    }
  }

  component(title: string = 'component', value: any = '', deps: any[] = []) {
    if (!MODE.isDevelopment || !MODE.debug) return;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      console.debug(`${title} mounted or updated`, value);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    console.debug(`${title} render`);
  }
}

const debuger = new Debuger();
export default debuger;
