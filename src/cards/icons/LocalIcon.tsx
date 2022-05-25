import './local-icon.scss';

import LocalIconLogo from '/assets/local.svg';
import React from 'react';

export const LocalIcon: React.FC = () => {
  return (
    <div
      className='icon-logo local-icon'
      style={{ width: '22px', height: '22px' }}
      title={'Offline'}
    >
      <LocalIconLogo />
    </div>
  );
};
