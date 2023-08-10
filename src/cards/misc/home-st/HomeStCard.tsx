import './home-st-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { LocalIcon } from '../../icons/LocalIcon';
import { OnePlayerIcon } from '../../icons/OnePlayerIcon';
import { baseLinkUrl } from '../../../AppState';

export const HomeStCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'home-st logo'}></div>}
      title={'Home St'}
      icons={[<OnePlayerIcon />, <LocalIcon />]}
      blurb={'I modelled my house in Blender, displayed with ThreeJs.'}
      link={baseLinkUrl + 'home-st'}
      buttonText={'open'}
    />
  );
};
