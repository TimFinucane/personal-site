import * as React from 'react';
import * as styles from './projects.scss';

import CollapsableList from '../components/collapsable_list';
import projects from '../static/projects.json';
import { AsyncResource } from 'async_hooks';

const external_links = new Map<string, string>( projects.external_links.map( (dependency:any) => [dependency.name, dependency.link] ) );

// Some day i will document this amazing and awful piece of code that tries
//  to do the entire project section body in a single statement.
function create_project( project: any ) {
    return <div>
        <p>Languages:{' '}
        {   // Takes a dependency and converts it into a list of languages and the libraries used
            project.dependencies.map( (dependency: any) =>
                dependency.libraries ?
                    <span>
                        <a href={external_links.get(dependency.name)}>{dependency.name}</a>
                        ({
                            dependency.libraries.map( (name: string) =>
                                <a href={external_links.get(name)}>{name}</a>
                            ).reduce( (accu: [JSX.Element], elem: JSX.Element) =>
                                accu === null ? [elem] : [...accu, ', ', elem],
                                null
                            )
                        })
                    </span>
                    :
                <a href={external_links.get(name)}>{dependency.name}</a>
            ).reduce( (accu: [JSX.Element], elem: JSX.Element) =>
                accu === null ? [elem] : [...accu, ' ', elem],
                null
            )
        }
        </p>
        <p>Link: <a href={project.link}>{project.name}</a></p>
        <p>{project.description}</p>
    </div>;
}

export default () => {
    return <div className={styles.projectsContainer}>
        <div className={styles.projects}>
            <h1>Projects</h1>
            <p>Find more on my <a href="https://github.com/TimFinucane">github</a></p>
            <CollapsableList sections={new Map(
                projects.projects.map( (project: any) => [project.name, create_project(project)]  )
            )}/>
        </div>
    </div>;
}