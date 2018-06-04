import * as commonApi from './projectApi/commonApi';
import * as manageApi from './projectApi/manageApi';

window.vaApi = Object.assign(...[{}, commonApi, manageApi]);
