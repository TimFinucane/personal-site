import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageHeader from './components/page-header';

import pages from './static/pages.json';
import './styles.scss';

// Load static content
const header_menu = new Map<string, {about: string, url: string}>(
    pages.map( (page: any) => [page.name, {about: page.description, url: page.name}] )
);

const App = () => (
    <BrowserRouter>
        <div>
            <PageHeader title="Hello, World!" options={header_menu} />
            <Switch>
                <Route exact path="/" component={() => <p>hi</p>}/>
                <Route path="/test" component={() => <p>not hi</p>}/>
            </Switch>
        </div>
    </BrowserRouter>
);

// Render the home page as default page
render(
    <App />,
    document.getElementById( 'finucane-portfolio' )
);
