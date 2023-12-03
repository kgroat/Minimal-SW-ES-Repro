/// <reference lib="WebWorker" />
import * as doIt from 'some-module';

interface ServiceWorkerGlobalScope {
  __WB_MANIFEST: any;
}

declare const self: ServiceWorkerGlobalScope;

console.log(self.__WB_MANIFEST);

doIt();
