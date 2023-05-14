import './keyboardist-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { LocalIcon } from '../../icons/LocalIcon';
import { OnePlayerIcon } from '../../icons/OnePlayerIcon';
import { baseLinkUrl } from '../../../AppState';

export const KeyboardistCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'keyboardist logo'}></div>}
      title={'Keyboardist'}
      icons={[<OnePlayerIcon />, <LocalIcon />]}
      blurb={
        'I made the keyboard in Blender, audio with Tonejs and animations with Threejs and gsap. Press the power button to turn it on!'
      }
      link={baseLinkUrl + 'keyboardist'}
      buttonText={'open'}
    />
  );
};
