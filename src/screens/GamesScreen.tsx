import React from 'react';

import { RunnerGameCard } from '../cards/games/runner-game/RunnerGameCard';
import { TextFallCard } from '../cards/games/text-fall/TextFallCard';
import { WordBashCard } from '../cards/games/word-bash/WordBashCard';
import { BoxCrossCard } from '../cards/games/box-cross/BoxCrossCard';
import { ShootingRangeCard } from '../cards/games/shooting-range/ShootingRangeCard';

export const GamesScreen: React.FC = () => {
  return (
    <>
      <ShootingRangeCard />
      <BoxCrossCard />
      <WordBashCard />
      <RunnerGameCard />
      <TextFallCard />
    </>
  );
};
