import * as React from 'react';
import * as react_dom from 'react-dom';

import FrontPage from './front-page';

import paragraphs from './static/paragraphs.json';
import './styles.scss';

// Load static content
const paragraph_titles: [string] = paragraphs.paragraphs.map( (p: any) => p.name );
const paragraph_texts: [string] = paragraphs.paragraphs.map( (p: any) => p.content );

// Render the front-page
react_dom.render(
    <FrontPage title="Hello, World!" options={paragraph_titles} abouts={paragraph_texts} />,
    document.getElementById( 'finucane-portfolio' )
);
