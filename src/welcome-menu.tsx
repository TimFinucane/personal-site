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

    hovered()
    {
        if( this.state.menu_state == 0 )
        {
            this.expand();
        }
    }

    expand()
    {
        const curState = this.state.menu_state;

        if( curState == this.props.elements.length )
        {
            return;
        } else {
            // Add an item in another 0.5s
            setTimeout( this.expand.bind(this), 500 );
        }
        this.setState( { menu_state: curState + 1 } );
    }

    /*
     * Renders a number of elements equal to 
     */
    renderMenu()
    {
        // Transition properties here

        // This annoyingly girthy code shows a number of elements from the elementlist, starting with the last elements:
        // 1 -> last, 2 -> second_to_last, last, 3 -> 3rd_to_last...
        return <ul className={styles.menu}>
            {
                Array.from({length: this.state.menu_state}, (x,i)=>this.state.menu_state - i)
                .map( i => {
                    const text = this.props.elements[this.props.elements.length-i];
                    return <li key={text} className={i == this.state.menu_state ? styles.create : styles.slide}>
                        {text}
                    </li> 
                } )
            }
        </ul>;
    }

    render()
    {
        return <div className={styles.welcome_menu} onMouseOver={this.hovered.bind(this)}>
            <h1 className={styles.title}>{this.props.title}</h1>
            {this.renderMenu()}
            </div>;
    }
}
