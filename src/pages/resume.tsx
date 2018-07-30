/*
 * The resume page
 */
import * as React from 'react';

import CollapsableSection from '../components/collapsable_section';
import content from '../static/resume.json';
import * as styles from './resume.scss';

export default () => {
    return <div className={styles.resumeContainer}>
        <div className={styles.resume}>
            <h1>{content.name}</h1>
            {/* TODO: Contact details */}
            {content.sections.map( (section: any) =>
                <CollapsableSection header={section.title} body={section.body} heading_level={2}/>
            )}
        </div>
    </div>;
}