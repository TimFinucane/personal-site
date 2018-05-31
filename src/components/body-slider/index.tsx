import * as React from 'react';
import * as styles from './styles.scss';

interface PassageSliderProps
{
    inner: JSX.Element;
    old_inner?: JSX.Element;
}

class PassageSlider extends React.Component<PassageSliderProps, {body: JSX.Element}>
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
            element = <div className={styles.bodyAdded}>{this.props.inner}</div>;
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

/*
 * This wraps the PassageSlider with a mechanism recording and storing the old_inner
 */
export default ( props: {inner: JSX.Element}, state: {old_inner: JSX.Element} ) => {
    // Store the state here before we modify it
    const cur_inner = props.inner;
    const old_inner = state.old_inner;

    // And record what the inner is now for next time
    state.old_inner = props.inner;

    if( old_inner )
        return <PassageSlider inner = {cur_inner} old_inner = {old_inner} />;
    else
        return <PassageSlider inner = {cur_inner} />
};
