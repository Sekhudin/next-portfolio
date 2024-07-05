import { ApolloLink, FetchResult, Observer, RequestHandler } from '@apollo/client';
import type { ErrorCallback } from 'types/common';

class ReportErrorLink extends ApolloLink {
  errorCallback!: ErrorCallback;

  constructor(cb: ErrorCallback) {
    super();
    this.errorCallback = cb;
  }

  request: RequestHandler = (operation, forward) => {
    const observable = forward(operation);
    observable.subscribe({ error: this.errorCallback });
    return observable;
  };

  protected onError(error: any, observer?: Observer<FetchResult>): false | void {
    this.errorCallback(error);
  }
}

const reportErrorLink = (cb: ErrorCallback) => new ReportErrorLink(cb);
export default reportErrorLink;
