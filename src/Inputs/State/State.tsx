import React from 'react';
<<<<<<< HEAD

import { LabelLayout, LabelLayoutProps  } from '@Layouts';
import styled from 'styled-components';
import { ShoppingBag, Payment, Food } from '@styled-icons/fluentui-system-filled';
import { StyledIcon } from 'styled-icons/types';
=======
// import { useTheme } from 'styled-components';

import { LabelLayout, LabelLayoutProps } from '@Layouts';
>>>>>>> 0b97ab18380e70c303d233b6a381e2169b313943

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
<<<<<<< HEAD
    //const theme = useTheme();

    const StateIcon = styled(states[currentState])`
        height: 3em;
        width: 3em;
        color: #ddd;
    `

    return (
        //<div>{handleChangeState(currentState)}</div>
        <StateIcon />
=======
    // const theme = useTheme();

    return (
        <LabelLayout>
            <div>Hello World!</div>
            <div>UwU!</div>
        </LabelLayout>
>>>>>>> 0b97ab18380e70c303d233b6a381e2169b313943
    );
};

