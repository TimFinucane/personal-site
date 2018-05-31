import * as React from 'react';
import * as styles from './styles.scss';

interface PassageSliderProps
{
    inner?: JSX.Element;
}

export default class PassageSlider extends React.Component<PassageSliderProps, {previous?: JSX.Element | null}>
{
    public componentWillReceiveProps( nextProps: PassageSliderProps )
    {
        this.setState( { previous: this.props.inner } );
    }

    public render()
    {
        if( this.state && this.state.previous )
        {
            setTimeout( () => this.setState( { previous: null } ), 500 );
            return <div>
                <div className={styles.bodyReplaced}>{this.state.previous}</div>
                <div className={styles.bodyReplacing}>{this.props.inner}</div>
            </div>;
        }
        else if( this.state && this.state.previous === null )
            return <div>{this.props.inner}</div>;
        else if( this.props.inner )
            return <div className={styles.bodyAdded}>{this.props.inner}</div>;
        else
            return null;
    }
}
