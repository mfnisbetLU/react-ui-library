import React from 'react';

import { LabelLayout, LabelLayoutProps  } from '@Layouts';
import styled from 'styled-components';
import { ShoppingBag, Payment, Food } from '@styled-icons/fluentui-system-filled';
import { StyledIcon } from 'styled-icons/types';

// values that we want to be able to change
export interface StateProps extends LabelLayoutProps {
    states: StyledIcon[];
    currentState: number;
    // onChange: function;
    // iconProps: { colour: string };
    // size: string;
}

// actual component
export const State: React.FC<StateProps> = ({
    // state: int;
    // onChange: function;
    // iconProps: { colour: string };
    // size: string;
    states = [Food, ShoppingBag, Payment],
    currentState = 0,
    ...props
}: StateProps): React.ReactElement => {
    //const theme = useTheme();

    const StateIcon = styled(states[currentState])`
        height: 3em;
        width: 3em;
        color: #ddd;
    `

    return (
        //<div>{handleChangeState(currentState)}</div>
        <StateIcon />
    );
};

