import './tbg-platform-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { LocalIcon } from '../../icons/LocalIcon';
import { OnePlayerIcon } from '../../icons/OnePlayerIcon';

export const TbgPlatformCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'tbg-platform logo'}></div>}
      title={'TBG Platform (WIP)'}
      icons={[<OnePlayerIcon />, <LocalIcon />]}
      blurb={'Platform for creating text-based games, currently a work in progress.'}
      link={'https://tbg-platform.github.io/frontend/'}
      buttonText={'open'}
    />
  );
};
