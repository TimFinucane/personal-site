import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageHeader from './components/page-header';
import Resume from './pages/resume';
import Projects from './pages/projects';

import pages from './static/pages.json';
import * as styles from './styles.scss';

// Load static content
const header_menu = new Map<string, {about: string, url: string}>(
    pages.map( (page: any) => [page.name, {about: page.description, url: page.link}] )
);

const App = () => (
    <BrowserRouter>
        <div id={styles.appBody}>
            <div id={styles.bodyHeader}>
                <Route exact path="/" component={() => <div style={{height: '150px' }}/>}/>
                <PageHeader title="Hello, World!" options={header_menu} />
            </div>
            <div id={styles.bodyContent}>
                <Switch>
                    <Route exact path="/"       component={() =>
                        <h1 style={{textAlign: 'center' }}>Welcome to my incomplete site :)</h1> }/>
                    <Route path="/resume"       component={Resume} />
                    <Route path="/projects"     component={Projects}/>
                    <Route path="/referrals"    component={() => <p>referrals</p>}/>
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
