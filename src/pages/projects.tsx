import * as React from 'react';
import * as styles from './projects.scss';

import CollapsableList from '../components/collapsable_list';
import projects from '../static/projects.json';

function create_project( project: any ) {
    return <div>
        <p>Languages: {project.languages.join(", ")}</p>
        <p>Link: {project.link}</p>
        <p>{project.description}</p>
    </div>;
}

export default () => {
    return <div className={styles.projectsContainer}>
        <div className={styles.projects}>
            <h1>Projects</h1>
            <p>Find more on my <a href="https://github.com/TimFinucane">github</a></p>
            <CollapsableList sections={new Map(
                projects.map( (project: any) => [project.name, create_project(project)]  )
            )}/>
        </div>
    </div>;
}