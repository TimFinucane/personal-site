import * as React from 'react';
import * as styles from './styles.scss';

interface SlidingBodyProps
{
    inner?: JSX.Element;
}

export default class SlidingBody extends React.Component<SlidingBodyProps, {previous?: JSX.Element | null}>
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

            return <div>
                <div className={styles.bodyReplacing} key={this.timeoutHandle}>{this.props.inner}</div>
                <div className={styles.bodyReplaced} key={this.timeoutHandle + "1"}>{this.state.previous}</div>
            </div>;
        }
        else if( this.state && this.state.previous === null )
        {
            this.timeoutHandle = undefined;
            return <div className={styles.bodyBase}>{this.props.inner}</div>;
        }
        else if( this.props.inner )
            return <div className={styles.bodyAdded}>{this.props.inner}</div>;
        else
            return null;
    }

    private timeoutHandle?: number;
}
