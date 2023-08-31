import LogtoClient, { UserScope } from '@logto/browser';

import { endpoint, appId } from './consts';
import Callback from './pages/Callback';
import Home from './pages/Home';

import './index.scss';

const logtoClient = new LogtoClient({
  endpoint: 'https://n2wxlq.logto.app/',
  appId: 'slgggu1ptgbnxeuh4kfqg',
  scopes: [UserScope.Email, UserScope.Phone, UserScope.CustomData, UserScope.Identities],
});
const app = document.querySelector('#app');

// Could replace this with a formal router solution
const isCallback = window.location.pathname.startsWith('/callback');
const render = isCallback ? Callback : Home;

render(app, logtoClient);
