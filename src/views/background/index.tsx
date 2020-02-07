import React from "react";
import Parallax from "parallax-js";

import styles from './styles.scss';
import face from './face.png';
import background from './background.png';

export default class Background extends React.PureComponent {
  public componentDidMount() {
    if(this.scene.current)
      this.parallax = new Parallax(this.scene.current);
    else
      console.warn("Parallax could not be initialized, scene ref not found.");
  }
  public componentWillUnmount() {
    this.parallax?.disable()
  }

  public render() {
    return (
      <ul className={styles.background} ref={this.scene}>
        <li className={styles.layer} data-depth="0.10">
          <img src={background} />
        </li>
        <li className={styles.layer} data-depth="0.00">
          <img className={styles.centrePiece} src={face} />
        </li>
      </ul>
    );
  }

  private scene = React.createRef<HTMLUListElement>();
  private parallax?: Parallax;
}
