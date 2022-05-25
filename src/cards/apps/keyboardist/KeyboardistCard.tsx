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
        'Create and play multiple keyboards. Set hotkeys for many notes to play chords with one button!'
      }
      link={baseLinkUrl + 'keyboard-player'}
      buttonText={'open'}
    />
  );
};
