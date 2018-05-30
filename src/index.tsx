import * as React from 'react';
import * as react_dom from 'react-dom';
import * as redux from 'redux';

import WelcomeMenu from './components/welcome-menu';
import { selections } from './reducers/selection';

import './styles.scss';

const store = redux.createStore( redux.combineReducers( { selections } ) );

react_dom.render(
    <WelcomeMenu
        title="Hello, World!"
        elements={['about', 'experience', 'projects']}
        on_pressed={ (name: string) => console.log( name ) }
    />,
    document.getElementById( 'finucane-portfolio' )
);
