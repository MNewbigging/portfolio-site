import './css-anims-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { baseLinkUrl } from '../../../AppState';

export const CssAnimsCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'css-anims logo'}></div>}
      title={'CSS Anims'}
      blurb={'Collection of css drawings and animations I do for fun.'}
      link={baseLinkUrl + 'css-anims'}
      buttonText={'open'}
    />
  );
};
