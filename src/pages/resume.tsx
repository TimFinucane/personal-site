/*
 * The resume page
 */
import * as React from 'react';

import CollapsableSection from '../components/collapsable_section';
import content from '../static/resume.json';

export default () => {
    return <div>
        <h1>{content.name}</h1>
        {/* TODO: Contact details */}
        {content.sections.map( (section: any) =>
            <CollapsableSection header={section.title} body={section.body}/>
        )}
    </div>;
}