import * as React from 'react';
import * as react_dom from 'react-dom';

import Home from './home';

import pages from './static/pages.json';
import './styles.scss';

// Load static content
const page_names: [string] = pages.map( (page: any) => page.name );
const page_descriptions: [string] = pages.map( (page: any) => page.content );

// Render the home page as default page
react_dom.render(
    <Home title="Hello, World!" options={page_names} abouts={page_descriptions} />,
    document.getElementById( 'finucane-portfolio' )
);
