import React from 'react';

import { MimicCard } from '../cards/games/mimic/MimicCard';
import { RunnerGameCard } from '../cards/games/runner-game/RunnerGameCard';
import { TextFallCard } from '../cards/games/text-fall/TextFallCard';
import { WordBashCard } from '../cards/games/word-bash/WordBashCard';
import { BoxCrossCard } from '../cards/games/box-cross/BoxCrossCard';

export const GamesScreen: React.FC = () => {
  return (
    <>
      <BoxCrossCard />
      <WordBashCard />
      <MimicCard />
      <RunnerGameCard />
      <TextFallCard />
    </>
  );
};
