import './word-bash-card.scss';

import React from 'react';

import { Card } from '../../Card';
import { LocalIcon } from '../../icons/LocalIcon';
import { OnePlayerIcon } from '../../icons/OnePlayerIcon';
import { baseLinkUrl } from '../../../AppState';

export const WordBashCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'word-bash logo'}></div>}
      title={'Word Bash'}
      icons={[<OnePlayerIcon />, <LocalIcon />]}
      blurb={'Make words out of jumbled letters. Try for longer words to get more points.'}
      link={baseLinkUrl + 'wordbash'}
    />
  );
};
