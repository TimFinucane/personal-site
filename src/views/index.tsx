import React from 'react';

import Menu from './menu';
import Home from './home';
import styles from './styles.scss';
import Projects from './projects';
import Resume from './resume';

export default class Website extends React.PureComponent {
  public render() {
    return (
      <div className={styles.page}>
        <Menu sections={this.sections.map(({ name }) => name)} onSelected={() => { }} />
        <div className={styles.pageBody}>
          {this.sections.map((section) => (
            <section key={section.name}>
              <section.component />
            </section>
          ))}
        </div>
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
