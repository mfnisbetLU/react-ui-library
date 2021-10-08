import React from 'react';
// import { useTheme } from 'styled-components';

import { LabelLayout, LabelLayoutProps } from '@Layouts';

// values that we want to be able to change
export interface StateProps extends LabelLayoutProps {
    // state: int;
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
    ...props
}: StateProps): React.ReactElement => {
    // const theme = useTheme();

    return (
        <LabelLayout>
            <div>Hello World!</div>
            <div>UwU!</div>
        </LabelLayout>
    );
};
