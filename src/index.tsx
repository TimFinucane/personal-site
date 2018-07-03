import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageHeader from './components/page-header';

import pages from './static/pages.json';
import * as styles from './styles.scss';

// Load static content
const header_menu = new Map<string, {about: string, url: string}>(
    pages.map( (page: any) => [page.name, {about: page.description, url: page.link}] )
);

const App = () => (
    <BrowserRouter>
        <div>
            <PageHeader title="Hello, World!" options={header_menu} />
            <div id={styles.bodyContent}>
                <Switch>
                    <Route exact path="/" component={() => <h1 style={{textAlign: 'center'}}>Site under construction 🤷</h1>}/>
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
