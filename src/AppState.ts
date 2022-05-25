import { action, makeObservable, observable } from 'mobx';

export const baseLinkUrl = 'https://mnewbigging.github.io/';

export enum NavTab {
  GAMES = 'GAMES',
  APPS = 'APPS',
  MISC = 'MISC',
}

export class AppState {
  public selectedTab = NavTab.GAMES;

  constructor() {
    makeObservable(this, {
      selectedTab: observable,
      setSelectedTab: action,
    });
  }

  public setSelectedTab = (tab: NavTab) => {
    this.selectedTab = tab;
  };

  public getTabClass(tab: NavTab) {
    return this.isActivePanel(tab) ? 'active' : '';
  }

  public isActivePanel(tab: NavTab) {
    return tab === this.selectedTab;
  }
}
