import './soundshapes-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { LocalIcon } from '../../icons/LocalIcon';
import { OnePlayerIcon } from '../../icons/OnePlayerIcon';
import { baseLinkUrl } from '../../../AppState';

export const SoundshapesCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'soundshapes logo'}></div>}
      title={'SoundShapes (WIP)'}
      icons={[<OnePlayerIcon />, <LocalIcon />]}
      blurb={
        'Arrange shapes and circular beaters on a canvas, watch as the beaters strike the shapes and make glorious sound!'
      }
      link={baseLinkUrl + 'soundshapes'}
      buttonText={'open'}
    />
  );
};
