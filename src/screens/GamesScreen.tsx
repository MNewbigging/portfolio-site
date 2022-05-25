import React from 'react';

import { MimicCard } from '../cards/games/mimic/MimicCard';
import { RunnerGameCard } from '../cards/games/runner-game/RunnerGameCard';
import { TextFallCard } from '../cards/games/text-fall/TextFallCard';
import { WordBashCard } from '../cards/games/word-bash/WordBashCard';

export const GamesScreen: React.FC = () => {
  return (
    <>
      <WordBashCard />
      <MimicCard />
      <RunnerGameCard />
      <TextFallCard />
    </>
  );
};
