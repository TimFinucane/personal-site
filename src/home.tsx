import * as React from 'react';

import SlideMenu from './components/slide-menu';
import BodySlider from './components/body-slider';

/*
 * HomePage
 */
interface HomeProps
{
    title: string;
    options: string[];
    abouts: string[];
}

export default class Home extends React.Component<HomeProps, {selection?: JSX.Element}>
{
    public render()
    {
        return <div id="front-page">
            <SlideMenu title={this.props.title} elements={this.props.options} on_hover={this.select.bind(this)}/>
            <BodySlider inner={this.state ? this.state.selection : undefined}/>
        </div>;
    }

    private select( option: string )
    {
        const index = this.props.options.indexOf( option );
        this.setState( { selection: <p>{this.props.abouts[index]}</p> } );
    }
}
