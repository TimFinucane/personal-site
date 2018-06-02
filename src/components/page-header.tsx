import * as React from 'react';

import { withRouter, RouteComponentProps } from 'react-router-dom';
import SlidingMenu from './sliding-menu';
import SlidingBody from './sliding-body';

interface PageHeaderProps extends RouteComponentProps<any>
{
    title: string;
    options: string[];
    abouts: string[];
}

class PageHeader extends React.Component<PageHeaderProps, {selection?: JSX.Element}>
{
    public render()
    {
        return <div id="front-page">
            <SlidingMenu
                title={this.props.title}
                elements={this.props.options}
                on_hover={this.select.bind(this)}
                on_click={(i) => {console.log(i); }}
                vertical={(this.props as any).location.pathname === "/"}
            />
            <SlidingBody inner={this.state ? this.state.selection : undefined}/>
        </div>;
    }

    private select( option: string )
    {
        const index = this.props.options.indexOf( option );

        if( this.previous_selection !== index )
            this.setState( { selection: <p>{this.props.abouts[index]}</p> } );

        this.previous_selection = index;
    }

    private previous_selection: number = -1;
}

export default withRouter<PageHeaderProps>(PageHeader);
