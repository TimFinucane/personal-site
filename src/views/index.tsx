import React from "react";
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";

import Menu from "./menu";
import HomePage from "./home-page";
import ExperiencePage from "./experience-page";

import styles from "./styles.scss";
import Background from "./background";

interface State {
  directory?: string;
}

export default class Website extends React.PureComponent<{}, State> {
  public render() {
    return (
      <Router>
        <div className={styles.page}>
          <div className={styles.pageBody}>
            <Background />
            <Switch>
              {Website.sections.map(({ name, component: Component }) => (
                <Route path={`/${name}`}>
                  <Component />
                </Route>
              ))}
            </Switch>
          </div>
          <Menu sections={Website.sections.map(({ name }) => name)} onSelected={directory => this.setState({ directory })} />
        </div>
      </Router>
    );
  }
  public state: State = {};

  private static sections = [
    {
      name: "home",
      component: HomePage
    },
    {
      name: "experience",
      component: ExperiencePage
    }
  ];
}
