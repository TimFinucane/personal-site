import * as React from 'react';
import * as ReactDOM from 'react-dom';

import WelcomeMenu from './welcome-menu';

import './styles.scss';

ReactDOM.render(
    <WelcomeMenu
        title="Hello, World!"
        elements={['about', 'experience', 'projects']}
        on_pressed={ (name: string) => console.log( name ) }
    />,
    document.getElementById( 'finucane-portfolio' )
);
