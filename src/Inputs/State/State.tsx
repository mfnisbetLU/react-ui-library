import React, { useState, useEffect } from 'react';
import { LabelLayout, LabelLayoutProps } from '@Layouts';
import styled, { keyframes } from 'styled-components';
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
    currState: number;
    size: string;
}

export const State: React.VFC<StateProps> = ({
    states,
    colors,
    currState,
    size,
    ...props
}: StateProps): React.ReactElement => {
    // const [animation, setAnimation] = useState(0);
    // const handleTransition = () => {};
    // useEffect(handleTransition, [animation]);

    const elements = states.map((state, i) => {
        const StateIcon = styled(state.icon)`
            height: ${size};
            width: ${size};
            color: ${currState >= i
                ? colors.focusedIcon
                : colors.nonFocusedIcon};
        `;

        const breatheAnimation = keyframes`
            0% { width: 0%; }
            100% { width: 100%; }
        `;

        const Bar = styled.div`
            border-radius: 50%;
            width: 100%;
            height: 100%;
            background-color: ${colors.focusedIcon};
            animation-name: ${breatheAnimation};
            animation-timing-function: linear;
            animation-duration: 4s;
            animation-iteration-count: 1;
        `;
        // ${i === states.length - 1
        //     ? `background-color: transparent`
        //     : `background-color: ${
        //           currentState >= i + 1
        //               ? colors.focusedIcon
        //               : colors.nonFocusedIcon
        //       }`};

        const TextWrapper = styled.p`
            color: ${currState === i
                ? colors.focusedText
                : colors.nonFocusedText};
            font-weight: ${currState === i ? 'bold' : 'normal'};
            text-align: center;
            font-size: ${parseInt(size[0]) / 3}em;
        `;

        return (
            <RowDiv>
                <ColDiv>
                    <StateIcon />
                    <TextWrapper>{state.text}</TextWrapper>
                </ColDiv>
                <div
                    style={{
                        width: `${parseInt(size[0]) * 5}em`,
                        height: `${parseInt(size[0]) / 10}em`,
                        alignSelf: 'center',
                        borderRadius: '50%',
                        backgroundColor: colors.nonFocusedIcon,
                    }}
                >
                    <Bar />
                </div>
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
