import './index.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { Root } from './root/root';

export const baseLinkUrl = 'https://mnewbigging.github.io/';

const root = createRoot(document.getElementById('app-root'));
root.render(<Root />);

if (module.hot) {
  module.hot.accept();
}
