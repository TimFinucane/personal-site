import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageHeader from './components/page-header';
import Resume from './components/resume';

import pages from './static/pages.json';
import './styles.scss';

// Load static content
const header_menu = new Map<string, {about: string, url: string}>(
    pages.map( (page: any) => [page.name, {about: page.description, url: page.link}] )
);

const App = () => (
    <BrowserRouter>
        <div>
            <PageHeader title="Hello, World!" options={header_menu} />
            <Switch>
                <Route exact path="/" component={() => <p>hi</p>}/>
                <Route path="/resume"><Resume sections={new Map([['me', <p>hello</p>]])} /></Route>
                <Route path="/projects" component={() => <p>projects</p>}/>
                <Route path="/referrals" component={() => <p>referrals</p>}/>
                <Route><p>404 - FILE NOT FOUND</p></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

// Render the home page as default page
render(
    <App />,
    document.getElementById( 'finucane-portfolio' )
);
