import React from "react";
import { Link } from "react-router-dom";

import styles from "./menu.scss";

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
            <Link to={section}>
              <span>{section}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
