import OnlineLogo from '/assets/online.svg';
import React from 'react';

export const OnlineIcon: React.FC = () => {
  return (
    <div className='icon-logo' style={{ width: '24px', height: '24px' }} title={'Online'}>
      <OnlineLogo />
    </div>
  );
};
