import OnePlayerLogo from '/assets/onePlayer.svg';
import React from 'react';

export const OnePlayerIcon: React.FC = () => {
  return (
    <div className='icon-logo' style={{ width: '22px', height: '22px' }} title={'One Player'}>
      <OnePlayerLogo />
    </div>
  );
};
