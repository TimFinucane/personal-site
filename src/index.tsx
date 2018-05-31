import * as React from 'react';
import * as react_dom from 'react-dom';
import * as redux from 'redux';

import SlideMenu from './components/slide-menu';
import { selections } from './reducers/selection';

import paragraphs from './static/paragraphs.json';
import './styles.scss';

const store = redux.createStore( redux.combineReducers( { selections } ) );

const paragraph_titles: [string] = paragraphs.paragraphs.map( (p: any) => p.name );
const paragraph_texts: [string] = paragraphs.paragraphs.map( (p: any) => p.content );

react_dom.render(
    <SlideMenu
        title="Hello, World!"
        elements={paragraph_titles}
        on_pressed={ (name: string) => console.log( paragraph_texts[paragraph_titles.indexOf( name )] ) }
    />,
    document.getElementById( 'finucane-portfolio' )
);
