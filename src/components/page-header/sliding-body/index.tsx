import * as React from 'react';
import * as styles from './styles.scss';

interface SlidingBodyProps
{
    inner?: string;
}

export default class SlidingBody extends React.Component<SlidingBodyProps, {previous?: string | null}>
{
    public componentWillReceiveProps( nextProps: SlidingBodyProps )
    {
        if( nextProps.inner !== this.props.inner && !this.timeoutHandle )
            this.setState( { previous: this.props.inner } );
    }

    public render()
    {
        if( this.state && this.state.previous && this.props.inner )
        {
            if( !this.timeoutHandle )
                this.timeoutHandle = window.setTimeout( () => this.setState( { previous: null } ), 490 );

            return <div className={styles.transitionContainer}>
                <div className={styles.replacing} key={this.timeoutHandle}>{this.props.inner}</div>
                <div className={styles.replaced} key={this.timeoutHandle + "1"}>{this.state.previous}</div>
            </div>;
        }
        else if( this.state && this.state.previous === null )
        {
            this.timeoutHandle = undefined;
            return <div className={styles.alone}>{this.props.inner}</div>;
        }
        else if( this.props.inner )
            return <div className={styles.added}>{this.props.inner}</div>;
        else
            return <div className={styles.alone} />;
    }

    private timeoutHandle?: number;
}
