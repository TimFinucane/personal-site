import * as redux from 'redux';

export const CHANGE_SELECTION = 'change_selection';

export function selections( state = { selection: null }, action: redux.Action )
{
    if( action.type === CHANGE_SELECTION )
        Object.assign( state, { selection: (action as any).selection } );

    return state;
}