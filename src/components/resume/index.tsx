/*
 * A nice looking resume for showing multiple sections with
 * functionality for showing and hiding each individual section.
 */

import * as React from 'react';

import * as styles from './styles.scss';

export default class Resume extends React.Component<{sections: Map<string, JSX.Element>}, {}>
{
    public render()
    {
        // Create a table row for each section, with the left side being the 'menu' part and
        // the right side holding the content
        return <table id={styles.table}>
            {
                Array.from( this.props.sections, ([key, value]) =>
                    <tr>
                        <td id={styles.sectionName} onClick={this.toggle_section.bind(this)}>{key}</td>
                        <td id={styles.sectionBody}>{value}</td>
                    </tr>
                )
            }
        </table>;
    }

    private toggle_section( section: string )
    {
    }
}
