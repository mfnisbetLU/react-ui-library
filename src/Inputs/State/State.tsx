import React from 'react';
import { LabelLayout, LabelLayoutProps  } from '@Layouts';
import styled from 'styled-components';
import { StyledIcon } from 'styled-icons/types';

export interface StateProps extends LabelLayoutProps {
    states: StyledIcon[];
    colors: string[];
    currentState: number;
    size: string;
    // onChange: function;
    // iconProps: { colour: string };
    // size: string;
}

export const State: React.FC<StateProps> = ({
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
    let elements = [];

    const ColDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 3%;
    `

    for (let i=0; i<states.length; i++) {
        let currentElement =
            <ColDiv>
                {React.createElement(
                    states[i],
                    {
                        height: size,
                        width: size,
                        color: (currentState >= i) ? colors[1] : colors[0],
                    }
                )}
                Hello
            </ColDiv>;

        elements.push(currentElement);
    }

    const RowDiv = styled.div`
        display: flex;
        flex-direction: row;
    `

    return (
        <RowDiv>
            {elements}
        </RowDiv>
    );
};
