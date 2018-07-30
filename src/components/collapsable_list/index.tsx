/*
 * A sequence of items, each of which are collapsable
 */

import * as React from 'react';

import * as styles from './styles.scss';

export default class CollapsableList extends React.Component<{sections: Map<string, JSX.Element>}, {selected: string[]}>
{
    public constructor( props: any )
    {
        super( props );

        this.state = {selected: []};
    }

    public render()
    {
        // Create a table row for each section, with the left side being the 'menu' part and
        // the right side holding the content
        return <table className={styles.table}><tbody>
            {
                Array.from( this.props.sections, ([key, value]) =>
                    <tr key={key}>
                        <td className={styles.sectionName} onClick={this.toggle_section.bind(this, key)}>{key}</td>
                        <td className={
                            [styles.sectionBody, this.state.selected.includes( key ) ? styles.expanded : styles.retracted].join(" ")}
                        >
                            {value}
                        </td>
                    </tr>
                )
            }
        </tbody></table>;
    }

    private toggle_section( section: string )
    {
        if( this.state.selected.includes( section ) )
            this.setState( { selected: this.state.selected.filter( (value) => value !== section ) } );
        else
            this.setState( { selected: this.state.selected.concat( [section] ) } );
    }
}
