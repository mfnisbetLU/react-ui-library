import React from 'react';
import { LabelLayout, LabelLayoutProps } from '@Layouts';
import styled from 'styled-components';
import { StyledIcon } from 'styled-icons/types';

interface State {
    icon: StyledIcon;
    text: String;
}

export interface StateProps extends LabelLayoutProps {
    states: State[];
    colors: string[];
    currentState: number;
    size: string;
    // onChange: function;
    // iconProps: { colour: string };
    // size: string;
}

export const State: React.VFC<StateProps> = ({
    // state: int;
    // onChange: function;
    // iconProps: { colour: string };
    // size: string;
    states,
    colors,
    currentState,
    size,
    ...props
}: StateProps): React.ReactElement => {
    //const theme = useTheme();
    const ColDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 3%;
    `;

    const elements = states.map((state, i) => {
        return (
            <ColDiv>
                {React.createElement(state.icon, {
                    height: size,
                    width: size,
                    color: currentState >= i ? colors[1] : colors[0],
                })}
                {state.text}
            </ColDiv>
        );
    });

    const RowDiv = styled.div`
        display: flex;
        flex-direction: row;
    `;

    return <RowDiv>{elements}</RowDiv>;
};
