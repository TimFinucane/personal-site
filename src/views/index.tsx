import React from 'react';

import Menu from './menu';
import Home from './home';
import Projects from './projects';
import Resume from './resume';

import styles from './styles.scss';

export default class Website extends React.PureComponent {
  public render() {
    return (
      <div className={styles.page}>
        <Menu sections={this.sections.map(({ name }) => name)} onSelected={() => { }} />
      </div>
    );
  }

  private sections = [
    {
      name: 'home',
      component: Home,
    },
    {
      name: 'projects',
      component: Projects,
    },
    {
      name: 'resume',
      component: Resume,
    },
  ];
}
