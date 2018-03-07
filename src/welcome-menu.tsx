import * as React from 'react';

const styles = require( './welcome-menu-styles.scss' );

/*
 * A component that converts itself to a menu when hovered over.
 * Current behaviour is that it does not change back when unhovered. This
 * could be changed however to being on a timer.
 */
interface WelcomeMenuProps
{
    title: string,
    elements: Array<string>
}

export class WelcomeMenu extends React.Component<WelcomeMenuProps, { menu_state: number }>
{
    constructor( props: WelcomeMenuProps )
    {
        super( props );

        this.state = { menu_state: 0 };
    }

    expand()
    {
        const curState = this.state.menu_state;

        if( curState == this.props.elements.length )
        {
            return;
        } else {
            // Add an item in another 0.5s
            setTimeout( this.expand.bind(this), 200 );
        }
        this.setState( { menu_state: curState + 1 } );
    }

    /*
     * Renders a number of elements equal to 
     */
    renderMenu()
    {
        // Transition properties here
        return <ul className={styles.menu}>
            {Array.from({length: this.state.menu_state}, (x,i)=>i).map( i => <li key={this.props.elements[i]}>{this.props.elements[i]}</li> )}
        </ul>;
    }

    render()
    {
        return <div className={styles.welcome_menu} onMouseOver={this.expand.bind(this)}>
            <h1 className={styles.title}>{this.props.title}</h1>
            {this.renderMenu()}
            </div>;
    }
}
