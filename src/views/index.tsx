import React from 'react';

import Menu from './menu';
import HomePage from './home-page';
import ExperiencePage from './experience-page';

import styles from './styles.scss';
import Background from './background';

export default class Website extends React.PureComponent {
  public render() {
    return (
      <div className={styles.page}>
        <Background />
        <Menu sections={this.sections.map(({ name }) => name)} onSelected={() => { }} />
      </div>
    );
  }

  private sections = [
    {
      name: 'home',
      component: HomePage,
    },
    {
      name: 'experience',
      component: ExperiencePage,
    },
  ];
}
