import * as React from 'react';
import * as styles from './styles.scss';

/*
 * A component that converts itself to a menu when hovered over.
 * Current behaviour is that it does not change back when unhovered. This
 * could be changed however to being on a timer.
 */
interface SlideMenuProps
{
    title: string;
    elements: string[];
    on_pressed: (button_name: string) => void;
}

export default class SlideMenu extends React.Component<SlideMenuProps, { menu_state: number }>
{
    constructor( props: SlideMenuProps )
    {
        super( props );

        this.state = { menu_state: 0 };
    }

    public render()
    {
        return <div className={styles.slideMenu} onMouseOver={(this.hovered.bind(this))}>
            <h1 className={styles.title}>{this.props.title}</h1>
            {this.render_menu()}
            </div>;
    }

    /*
     * Called when mouse hovers over title text
     */
    private hovered()
    {
        if( this.state.menu_state === 0 )
            this.expand();
    }

    /*
     * Expands the list by adding an item from props.elements to the top.
     * Wait is how long to wait before adding another item
     */
    private expand( wait = 0.5 )
    {
        const curState = this.state.menu_state;

        if( curState === this.props.elements.length )
            return;
        else
            setTimeout( this.expand.bind(this), wait * 1000 ); // Add an item in another 0.5s

        this.setState( { menu_state: curState + 1 } );
    }

    /*
     * Renders a number of elements equal to
     */
    private render_menu()
    {
        // Transition properties here

        // This annoyingly girthy code shows a number of elements from the elementlist, starting with the last elements:
        // 1 -> last. 2 -> second_to_last, last. 3 -> 3rd_to_last...
        return <ul className={styles.menu}>
            {
                Array.from( {length: this.state.menu_state}, (x, i) => this.state.menu_state - i )
                .map( (i) => {
                    const text = this.props.elements[this.props.elements.length - i];
                    // Key is new every time to force css animations active
                    const key = this.state.menu_state * this.props.elements.length + i;
                    return <li
                        key={key}
                        className={i === this.state.menu_state ? styles.create : styles.slide}
                        onClick={() => this.props.on_pressed( text )}
                    >
                        {text}
                    </li>;
                } )
            }
        </ul>;
    }
}
