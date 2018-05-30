import * as React from 'react';
const styles = require('./styles.scss');

interface PassageSliderProps
{
    inner: JSX.Element;
    old_inner: JSX.Element;
}

export default class PassageSlider extends React.Component<PassageSliderProps, {body: JSX.Element}>
{
    constructor( props: PassageSliderProps )
    {
        super(props);

        if( this.props.old_inner === null )
            this.state = { body: <div className={styles.bodyAdded}>{this.props.inner}</div> };
        else
        {
            this.state = { body: <div>
                <div className={styles.bodyReplaced}>{this.props.old_inner}</div>
                <div className={styles.bodyReplacing}>{this.props.inner}</div>
            </div> };

            setTimeout( () => this.setState( { body: <div>{this.props.inner}</div> } ), 500 );
        }
    }

    public render()
    {
        return this.state.body;
    }

    private initial_body()
    {
        let element;

        if( this.props.old_inner === null )
            element = <div className={styles.bodyAdded}>{this.props.inner}</div>
        else
        {
            element = <div>
                <div className={styles.bodyReplaced}>{this.props.old_inner}</div>
                <div className={styles.bodyReplacing}>{this.props.inner}</div>
            </div>;

            setTimeout( () => this.setState( { body: this.final_body() } ), 500 );
        }

        return element;
    }

    private final_body()
    {
        return <div>{this.props.inner}</div>;
    }
}
