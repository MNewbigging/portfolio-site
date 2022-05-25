import './code-compendium.scss';

import React from 'react';

import { Card } from '../../Card';
import { LocalIcon } from '../../icons/LocalIcon';
import { OnePlayerIcon } from '../../icons/OnePlayerIcon';
import { baseLinkUrl } from '../../../AppState';

export const CodeCompendiumCard: React.FC = () => {
  return (
    <Card
      logo={<div className={'code-compendium logo'}></div>}
      title={'Code Compendium'}
      icons={[<OnePlayerIcon />, <LocalIcon />]}
      blurb={'Library of common components and code snippets I use between projects'}
      link={baseLinkUrl + 'code-compendium'}
      buttonText={'open'}
    />
  );
};
