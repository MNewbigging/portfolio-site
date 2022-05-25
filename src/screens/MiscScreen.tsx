import React from 'react';

import { CssAnimsCard } from '../cards/misc/css-anims/CssAnimsCard';
import { DeskSceneCard } from '../cards/misc/desk-scene/DeskSceneCard';

export const MiscScreen: React.FC = () => {
  return (
    <>
      <DeskSceneCard />
      <CssAnimsCard />
    </>
  );
};
