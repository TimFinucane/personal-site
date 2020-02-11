import React from 'react';

export default function Home() {
  return (
    <div>
      <nav>
        {/* Menu */}
        <ul>
          <li>
            <h2>Experience</h2>
            <ul>
              <li>Job 1</li>
              <li>Job 2</li>
            </ul>
          </li>
          <li>
            <h2>Projects</h2>
            <ul>
              <li>Project 1</li>
              <li>Project 2</li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* Actual content */}
      <div>
        <section>
          <h2>First heading</h2>
        </section>
      </div>
    </div>
  );
}
