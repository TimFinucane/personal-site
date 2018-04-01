import * as React from 'react';

import styles from './styles.scss';

/*
 * A component that converts itself to a menu when hovered over.
 * Current behaviour is that it does not change back when unhovered. This
 * could be changed however to being on a timer.
 */
interface WelcomeMenuProps
{
    title: string,
    elements: Array<string>,
    on_pressed: (button_name: string) => void;
}

export default class WelcomeMenu extends React.Component<WelcomeMenuProps, { menu_state: number }>
{
    constructor( props: WelcomeMenuProps )
    {
        super( props );

        this.state = { menu_state: 0 };
    }

    /*
     * Called when mouse hovers over title text
     */
    hovered()
    {
        if( this.state.menu_state == 0 )
        {
            this.expand();
        }
    }

    /*
     * Expands the list by adding an item from props.elements to the top.
     * Wait is how long to wait before adding another item
     */
    expand( wait = 0.5 )
    {
        const curState = this.state.menu_state;

        if( curState == this.props.elements.length )
        {
            return;
        } else {
            // Add an item in another 0.5s
            setTimeout( this.expand.bind(this), wait * 1000 );
        }
        this.setState( { menu_state: curState + 1 } );
    }

    /*
     * Renders a number of elements equal to 
     */
    render_menu()
    {
        // Transition properties here

        // This annoyingly girthy code shows a number of elements from the elementlist, starting with the last elements:
        // 1 -> last. 2 -> second_to_last, last. 3 -> 3rd_to_last...
        return <ul className={styles.menu}>
            {
                Array.from({length: this.state.menu_state}, (x,i)=>this.state.menu_state - i)
                .map( i => {
                    const text = this.props.elements[this.props.elements.length-i];
                    // Key is new every time to force css animations active
                    const key = this.state.menu_state * this.props.elements.length + i;
                    return <li
                        key={key}
                        className={i == this.state.menu_state ? styles.create : styles.slide}
                        onClick={() => this.props.on_pressed( text )}
                    >
                        {text}
                    </li> 
                } )
            }
        </ul>;
    }

    render()
    {
        return <div className={styles.welcome_menu} onMouseOver={(this.hovered.bind(this))}>
            <h1 className={styles.title}>{this.props.title}</h1>
            {this.render_menu()}
            </div>;
    }
}
