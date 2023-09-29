import './home-st-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { baseLinkUrl } from '../../../AppState';

export const HomeStCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'home-st logo'}></div>}
      title={'Home St'}
      blurb={
        'I modelled my house in Blender, displayed in ThreeJs and implemented some basic movement and camera controls.'
      }
      link={baseLinkUrl + 'home-st'}
      buttonText={'open'}
    />
  );
};
