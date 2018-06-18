import * as React from 'react';

import { withRouter, RouteComponentProps } from 'react-router-dom';
import SlidingMenu from './sliding-menu';
import SlidingBody from './sliding-body';

import * as styles from './styles.scss';

interface PageHeaderProps extends RouteComponentProps<any>
{
    title: string;
    options: Map<string, {about: string, url: string}>;
}

class PageHeader extends React.Component<PageHeaderProps, {selection?: string}>
{
    public render()
    {
        const is_main = this.props.location.pathname === "/";

        return <div id={[styles.pageHeader, is_main ? styles.centered : styles.top].join(' ')}>
            <SlidingMenu
                title={this.props.title}
                elements={Array.from(this.props.options.keys())}
                on_hover={this.select.bind(this)}
                on_click={(option) => this.props.history.push( this.props.options.get( option )!.url )}
                vertical={is_main}
            />
            <SlidingBody inner={this.state ? this.state.selection : undefined}/>
        </div>;
    }

    private select( option: string )
    {
        if( this.previous_selection !== option ) // Will not be undefined, option must be key
            this.setState( { selection: this.props.options.get( option )!.about } );

        this.previous_selection = option;
    }

    private previous_selection: string = '';
}

export default withRouter<PageHeaderProps>(PageHeader);
