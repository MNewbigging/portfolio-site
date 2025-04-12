import React, { useState } from 'react';
import './root.scss';
import { Projects } from '../projects/projects';
import { About } from '../about/about';

type TabType = 'projects' | 'about';

export function Root() {
  const [tab, setTab] = useState<TabType>('about');

  const getTabClass = (tabType: TabType) => {
    let base = 'tab-heading';
    if (tab === tabType) {
      base += ' active';
    }
    return base;
  };

  const selectTab = (tabType: TabType) => {
    setTab(tabType);
  };

  const screen = tab === 'projects' ? <Projects /> : <About />;

  return (
    <div className='root'>
      <div className='navbar'>
        <div className={getTabClass('projects')} onClick={() => selectTab('projects')}>
          Projects
        </div>
        <div className={getTabClass('about')} onClick={() => selectTab('about')}>
          About
        </div>
      </div>
      <div className='body'>{screen}</div>
    </div>
  );
}
