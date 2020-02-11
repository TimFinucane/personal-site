import React from 'react';

import styles from './menu.scss';

interface Props {
  sections: string[];
  onSelected(name: string): void;
}

export default function Menu({ sections, onSelected }: Props) {
  return (
    <nav className={styles.menu}>
      <ul className={styles.navList}>
        {sections.map(section => (
          <li key={section}>
            <a href={`#${section}`} onClick={() => onSelected(section)}>
              <span>{section}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
