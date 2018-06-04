import './adapter/manage';

import mock from './adapter/adapter';

mock.onAny().passThrough();
