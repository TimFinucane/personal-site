import React from 'react';

import styles from './styles.scss';

interface Props {
  sections: string[];
  onSelected(name: string): void;
}

export default function Menu({ sections, onSelected }: Props) {
  return (
    <div className={styles.menu}>
      <h1>Tim Finucane</h1>
      <ul className={styles.linkList}>
        {sections.map((section) => (
          <li key={section}>
            <button type="button" onClick={() => onSelected(section)}>{section}</button>
          </li>
        ))}
      </ul>
      <div className={styles.bottomPadding} />
    </div>
  );
}
