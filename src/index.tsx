import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './home';

import pages from './static/pages.json';
import './styles.scss';

// Load static content
const page_names: [string] = pages.map( (page: any) => page.name );
const page_descriptions: [string] = pages.map( (page: any) => page.content );

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Home title="Hello, World!" options={page_names} abouts={page_descriptions} />}/>
            <Route path="/test" component={() => <p>hi</p>}/>
        </Switch>
    </BrowserRouter>
);

// Render the home page as default page
render(
    <App />,
    document.getElementById( 'finucane-portfolio' )
);
