import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageHeader from './components/page-header';
import Resume from './components/resume';

import pages from './static/pages.json';
import resume from './static/resume.json';
import * as styles from './styles.scss';

// Load static content
const header_menu = new Map<string, {about: string, url: string}>(
    pages.map( (page: any) => [page.name, {about: page.description, url: page.link}] )
);
const resume_sections = new Map<string, JSX.Element>(
    resume.map( (section: any) => [section.name, <p>{section.body}</p>] )
);

const App = () => (
    <BrowserRouter>
        <div>
            <PageHeader title="Hello, World!" options={header_menu} />
            <div id={styles.bodyContent}>
                <Switch>
                    <Route exact path="/" component={() => <p>hi</p>}/>
                    <Route path="/resume"component={() => <p>resume</p>} />
                    <Route path="/projects" component={() => <p>projects</p>}/>
                    <Route path="/referrals" component={() => <p>referrals</p>}/>
                    <Route><p>404 - FILE NOT FOUND</p></Route>
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);

// Render the home page as default page
render(
    <App />,
    document.getElementById( 'finucane-portfolio' )
);
