import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { WelcomeMenu } from './welcome-menu';

import './styles.scss';

ReactDOM.render(
    <WelcomeMenu title="Hello, World!" elements={['about', 'experience', 'projects']} />,
    document.getElementById( 'finucane-portfolio' )
);
