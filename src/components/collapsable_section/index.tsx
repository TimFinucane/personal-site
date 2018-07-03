/*
 * A section with a header that is collapsable
 */
import * as React from 'react';
import * as styles from './styles.scss';

export default class CollapsableSection extends React.Component<{ header: string; body: string; }, { collapsed: boolean; }>
{
    public constructor( props: any )
    {
        super( props );

        this.state = { collapsed: true };
    }

    public render()
    {
        return <div className={styles.collapsableSection}>
            <h1 onClick={this.on_click.bind(this)}>{this.props.header}</h1>
            {this.state.collapsed ? null : <p>{this.props.body}</p>}
        </div>;
    }

    private on_click()
    {
        this.setState( { collapsed: !this.state.collapsed } );
    }
}
