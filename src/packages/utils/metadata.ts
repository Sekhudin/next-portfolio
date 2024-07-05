import type { InitFunc, GenerateFunc } from 'types/metadata';

class MetaDataUtils {
  init: InitFunc = (metadata) => {
    return metadata;
  };

  generate: GenerateFunc = (cb) => {
    return (props, parent) => cb(props, parent);
  };
}

const util = new MetaDataUtils();
export default util;
