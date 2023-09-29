import './text-fall-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { baseLinkUrl } from '../../../AppState';

export const TextFallCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'text-fall logo'}></div>}
      title={'Text Fall'}
      blurb={'Create your own soundscape by typing letters that fall down the screen.'}
      link={baseLinkUrl + 'text-fall'}
    />
  );
};
