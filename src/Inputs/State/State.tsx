import React from 'react';
import { LabelLayout, LabelLayoutProps } from '@Layouts';
import styled from 'styled-components';
import { StyledIcon } from 'styled-icons/types';

interface State {
    icon: StyledIcon;
    text: String;
}

interface Color {
    nonFocusedIcon: string;
    focusedIcon: string;
    nonFocusedText: string;
    focusedText: string;
}

export interface StateProps extends LabelLayoutProps {
    states: State[];
    colors: Color;
    currentState: number;
    size: string;
}

export const State: React.VFC<StateProps> = ({
    states,
    colors,
    currentState,
    size,
    ...props
}: StateProps): React.ReactElement => {
    const elements = states.map((state, i) => {
        const StateIcon = styled(state.icon)`
            height: ${size};
            width: ${size};
            color: ${currentState >= i ? colors.focusedIcon : colors.nonFocusedIcon}
        `

        const TextWrapper = styled.p`
            color: ${currentState === i ? colors.focusedText : colors.nonFocusedText};
            font-weight: ${currentState === i ? 'bold' : 'normal'};
        `

        return (
            <ColDiv>
                <StateIcon />
                <TextWrapper>{state.text}</TextWrapper>
            </ColDiv>
        );
    });

    return <RowDiv>{elements}</RowDiv>;
};

const ColDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3%;
`;

const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
`;
