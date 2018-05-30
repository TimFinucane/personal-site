import * as React from 'react';
import { connect } from 'react-redux';

import PassageSlider from './slider';

function map_state_to_props( state: any, ownProps: {old_selected?: string} ) // TODO: Figure out whether types should be recorded
{
    const inner = <p>{state.selected}</p>;
    const old_inner = <p>{ownProps.old_selected ? ownProps.old_selected : ''}</p>;

    ownProps.old_selected = state.selected;

    return {inner, old_inner};
}

export default connect( map_state_to_props )( PassageSlider );
