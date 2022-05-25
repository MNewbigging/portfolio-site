import './css-anims-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { LocalIcon } from '../../icons/LocalIcon';
import { OnePlayerIcon } from '../../icons/OnePlayerIcon';
import { baseLinkUrl } from '../../../AppState';

export const CssAnimsCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'css-anims logo'}></div>}
      title={'CSS Anims'}
      icons={[<OnePlayerIcon />, <LocalIcon />]}
      blurb={'Collection of css drawings and animations I do for fun.'}
      link={baseLinkUrl + 'css-anims'}
      buttonText={'open'}
    />
  );
};
