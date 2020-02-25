import React from 'react';

import styles from './styles.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <nav>
        {/* Menu */}
        <ul>
          <li>
            <a><h2>Experience</h2></a>
            <ul>
              <li><a><h2>Job 1</h2></a></li>
              <li><a><h2>Job 2</h2></a></li>
            </ul>
          </li>
          <li>
            <a><h2>Projects</h2></a>
            <ul>
              <li><a><h3>Project 1</h3></a></li>
              <li><a><h3>Project 2</h3></a></li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* Actual content */}
      <div className={styles.content}>
        <section>
          <h2>First heading</h2>
        </section>
      </div>
    </div>
  );
}
