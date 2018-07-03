/*
 * A section with a header that is collapsable
 */
import * as React from 'react';
import * as styles from './styles.scss';

export default class CollapsableSection extends React.Component<
    { header: string; body: string; heading_level?: number }, // props
    { collapsed: boolean; } // state
    >
{
    public static defaultProps = {
        heading_level: 1
    };

    public constructor( props: any )
    {
        super( props );

        this.state = { collapsed: true };
    }

    public render()
    {
        const Heading = "h" + this.props.heading_level!.toString();

        return <div className={styles.collapsableSection}>
            <Heading className={styles.heading} onClick={this.on_click.bind(this)}>{this.props.header}</Heading>
            {this.state.collapsed ? null : <p dangerouslySetInnerHTML={{__html: this.props.body}} />}
        </div>;
    }

    private on_click()
    {
        this.setState( { collapsed: !this.state.collapsed } );
    }
}
