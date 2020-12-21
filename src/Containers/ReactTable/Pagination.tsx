import React from 'react';
import styled from 'styled-components';
import { RowSelector, IRowSelectorProps } from './RowSelector';
import { PageSelector, IPageSelectorProps } from './PageSelector';
import { MainInterface, ResponsiveInterface } from '../../Utils/BaseStyles';
import { flex, media } from '../../Utils/Mixins';

export interface IPaginationProps extends IRowSelectorProps, IPageSelectorProps, MainInterface, ResponsiveInterface,React.HTMLAttributes<HTMLDivElement> {
    rowSelectorProps?: IRowSelectorProps;
    pageSelectorProps?: IPageSelectorProps
};

export const Pagination: React.FC<IPaginationProps> = ({
    pageSize,
    setPageSize,
    pageOptionsLength,
    pageSelectOptions,
    goToPreviousPage,
    goToNextPage,
    goToPage,
    pageLength,
    rowSelectorProps,
    pageSelectorProps,
    ...props
}): React.ReactElement => {
    return (
        <Wrapper {...props}>
            <RowSelector 
                pageSize={pageSize}
                setPageSize={setPageSize}
                pageOptionsLength={pageOptionsLength}
                pageSelectOptions={pageSelectOptions}
                {...rowSelectorProps}
            />
            <PageSelector 
                goToPreviousPage={goToPreviousPage}
                goToNextPage={goToNextPage}
                goToPage={goToPage}
                pageLength={pageLength}
                {...pageSelectorProps}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    ${flex('space-between')};
    ${media(
    'phone',
    `
        ${flex('column')};
    `,
    )};
    display: grid;
    grid-template-columns: 4fr 3fr 1fr;
    ${media(
        'tablet',
        `
       grid-template-columns: 2fr 1fr 1fr; 
    `,
    )}
`;