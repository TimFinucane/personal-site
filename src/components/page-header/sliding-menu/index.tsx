import * as React from 'react';
import * as styles from './styles.scss';

/*
 * A component that converts itself to a menu when hovered over.
 * Current behaviour is that it does not change back when unhovered. This
 * could be changed however to being on a timer.
 */
export interface SlidingMenuProps
{
    title: string;
    elements: string[];
    on_hover: (element: string) => void;
    on_click: (element: string) => void;

    vertical: boolean;
}

export default class SlidingMenu extends React.Component<SlidingMenuProps, { menu_state: number }>
{
    constructor( props: SlidingMenuProps )
    {
        super( props );

        this.state = { menu_state: 0 };
    }

    public render()
    {
        const dir_style = this.props.vertical ? styles.vertical : styles.horizontal;

        return <div className={[styles.slideMenu, dir_style].join(' ')} onMouseOver={(this.hovered.bind(this))}>
            <h1 className={[styles.title, dir_style].join(' ')}>{this.props.title}</h1>
            {this.render_menu( dir_style )}
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

        if( this.is_end_state() )
            return;
        else
            setTimeout( this.expand.bind(this), wait * 1000 ); // Add an item in another 0.5s

        this.setState( { menu_state: curState + 1 } );
    }

    /*
     * Renders a number of elements equal to
     */
    private render_menu( dir_style: string )
    {
        // Transition properties here

        // This annoyingly girthy code shows a number of elements from the elementlist, starting with the last elements:
        // 1 -> last. 2 -> second_to_last, last. 3 -> 3rd_to_last...
        return <ul className={[styles.menu, dir_style].join(' ')}>
            {
                Array.from( {length: this.state.menu_state}, (x, i) => this.state.menu_state - i )
                .map( (i) => {
                    const text = this.props.elements[this.props.elements.length - i];
                    // Key is new every time to force css animations active
                    const key = this.state.menu_state * this.props.elements.length + i;
                    return <li
                        key={key}
                        className={[(i === this.state.menu_state ? styles.create : styles.slide), dir_style].join(' ')}
                        onMouseOver={this.is_end_state() ? () => this.props.on_hover( text ) : undefined}
                        onClick={this.is_end_state() ? () => this.props.on_click( text ) : undefined}
                    >
                        {text}
                    </li>;
                } )
            }
        </ul>;
    }

    private is_end_state()
    {
        return this.state.menu_state === this.props.elements.length;
    }
}
