import { LANGUAGE, FRAMEWORK, DEVTOOLS } from 'src/config/tools';
import HOC from './tools-hoc';

export const LanguasgeList = HOC(LANGUAGE);
export const FrameworkList = HOC(FRAMEWORK);
export const DevtoolsList = HOC(DEVTOOLS);
