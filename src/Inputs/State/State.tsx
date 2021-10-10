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
            color: ${currentState >= i
                ? colors.focusedIcon
                : colors.nonFocusedIcon};
        `;

        const Bar = styled.div`
            display: inline-block;
            border-radius: 50%;
            width: ${parseInt(size[0]) * 5}em;
            height: ${parseInt(size[0]) / 10}em;
            ${i === states.length - 1
                ? `background-color: transparent`
                : `background-color: ${
                      currentState >= i + 1
                          ? colors.focusedIcon
                          : colors.nonFocusedIcon
                  }`};
            align-self: center;
        `;

        const TextWrapper = styled.p`
            color: ${currentState === i
                ? colors.focusedText
                : colors.nonFocusedText};
            font-weight: ${currentState === i ? 'bold' : 'normal'};
            text-align: center;
            font-size: ${parseInt(size[0]) / 3}em;
        `;

        return (
            <RowDiv>
                <ColDiv>
                    <StateIcon />
                    <TextWrapper>{state.text}</TextWrapper>
                </ColDiv>
                <Bar />
            </RowDiv>
        );
    });

    return (
        <LabelLayout>
            <RowDiv>{elements}</RowDiv>
        </LabelLayout>
    );
};

const ColDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1%;
`;

const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
`;
