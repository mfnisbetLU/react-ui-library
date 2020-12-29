import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Chair, IChair } from '@Containers/Chair';

type getOccupancyColorType = () => string;

type occupancyStatusTypes = 'Vacant' | 'Reserved' | 'Occupied';

type getChairsType = (
    array: Array<IChair>,
    relativeSize: number,
) => JSX.Element[];

type generateKeyType = (pre: string) => string;

export interface ICircleTable {
    /**
     * The unique identifier for the table
     */
    tableID: string;
    /**
     * Array of chairs
     */
    chairs: Array<IChair>;
    /**
     * The name of the party assigned to the table
     */
    partyName: string;
    /**
     * The occupancy status for the table
     */
    occupancyStatus: occupancyStatusTypes;
    /**
     * The size for the component relative to the parent
     */
    relativeSize: number;
}

/**
 * Primary UI component for user interaction
 */
export const CircleTable: React.FC<ICircleTable> = ({
    tableID = 'T1',
    chairs = [],
    partyName = 'Null',
    occupancyStatus = 'Vacant',
    relativeSize = 1.0,
    ...props
}) => {
    const { colors } = useTheme();

    /**
     * Determines the correct color for Status and ColorDiv based on occupancyStatus
     * and returns the hexadecimal color value as a string
     *
     * @return {string} - Hexadecimal color value
     */
    const getOccupancyColor: getOccupancyColorType = () => {
        switch (occupancyStatus) {
            case 'Vacant':
                return colors.occupancyStatusColors.Vacant;

            case 'Reserved':
                return colors.occupancyStatusColors.Reserved;

            case 'Occupied':
                return colors.occupancyStatusColors.Occupied;

            default:
                return '';
        }
    };

    /**
     * Returns a JSX element array containing the Chairs and ChairWrappers
     * @param array {Array<IChair>} - array of chairs
     * @return {JSX.Element[]} - Chairs and ChairWrappers for the table
     */
    const getChairs: getChairsType = (array) => {
        return array.map((item, index) => (
            <ChairWrapper
                relativeSize={relativeSize}
                numOfChairs={array.length}
                counter={index + 1}
                key={generateKey(item.position + index)}
                position={item.position}
            >
                <Chair
                    relativeSize={relativeSize}
                    position={item.position}
                    occupiedBy={item.occupiedBy}
                    isSeated={item.isSeated}
                    isVisible={item.isVisible}
                    isRound={item.isRound}
                />
            </ChairWrapper>
        ));
    };

    /**
     * Generates a unique key based on a string and a random number
     * @param pre - a string to append to random number
     * @returns {string} a unique key
     */
    const generateKey: generateKeyType = (pre) => {
        return `${pre}_${Math.random()}`;
    };

    // Calculate the tangent based on the number of chairs in the array
    const tan = Math.tan(Math.PI / chairs.length);

    return (
        <div {...props}>
            <TableBody
                relativeSize={relativeSize}
                numOfChairs={chairs.length}
                chairTableBackground={colors.chairTableBackground}
                tangentValue={tan}
                occupancyColor={getOccupancyColor()}
            >
                {getChairs(chairs, relativeSize)}

                <TableInfo>
                    <div>
                        {tableID}
                        <br />
                        {partyName}
                        <br />
                        <Status occupancyColor={getOccupancyColor()}>
                            {occupancyStatus}
                        </Status>
                        <br />
                    </div>
                </TableInfo>
            </TableBody>
        </div>
    );
};

type Position = 'top' | 'bottom' | 'left' | 'right';

type getPositionValueType = (position: Position) => number;

type getTurnValueType = (
    counter: number,
    numOfChairs: number,
    position: Position,
) => string;

const minChairsBeforeTableResize = 4;
const tangentValueForLessThanThreeChairs = 1.73;
const minChairsBeforeSetTangentValue = 3;

/**
 * Returns a number value for each position (right, left, top, bottom)
 * that will allow chairs to be positioned on the correct side of the
 * table when there are less than three chairs at a CircleTable component
 *
 * @param position - the position on the table ("top", "bottom", "left", "right")
 * @return {number} - the value associated with a given position
 */
const getPositionValue: getPositionValueType = (position) => {
    switch (position) {
        case 'top':
            return 0.75;
        case 'bottom':
            return 0.25;
        case 'left':
            return 0.5;
        default:
            return 1;
    }
};

/**
 * Returns a string with the correct CSS turn positioning for a given chair
 *
 * @param counter - the chair's number relative to other chairs in the array
 * @param numOfChairs - the total number of chairs at the table
 * @param position - the position for the chair ('top', 'bottom', 'left', 'right')
 * @return {string} - the correct turn value for a specific chair
 */
const getTurnValue: getTurnValueType = (counter, numOfChairs, position) => {
    if (numOfChairs < minChairsBeforeSetTangentValue) {
        return `${getPositionValue(position)}turn / 1`;
    }
    return `${counter}turn / ${numOfChairs}`;
};

/**
 * Variables for the styled components
 */

interface ITableBody {
    numOfChairs: number;
    tangentValue: number;
    occupancyColor: string;
    chairTableBackground: string;
    relativeSize: number;
}

const TableBody = styled.div<ITableBody>`
    --d: ${({ relativeSize }) => 6.5 * relativeSize}em; /* chair size */
    --rel: 1; /* how much extra space we want between images, 1 = one chair size */
    --tan: ${({ numOfChairs, tangentValue }) =>
        numOfChairs < minChairsBeforeSetTangentValue
            ? tangentValueForLessThanThreeChairs
            : tangentValue};
    --r: calc(
        ${({ numOfChairs }) =>
                numOfChairs < minChairsBeforeTableResize ? 1.0 : 0.5} *
            (1 + var(--rel)) * var(--d) / var(--tan)
    ); /* circle radius */
    --s: calc(2 * var(--r)); /* container size */
    position: relative;
    width: var(--s);
    height: var(--s);
    background: ${({ chairTableBackground }) => chairTableBackground};
    border-radius: 50%;
    border-style: solid;
    border-color: ${({ occupancyColor }) => occupancyColor};
    border-width: ${({ relativeSize }) => relativeSize * 1.5}em;
    margin: ${({ relativeSize }) => relativeSize * 3}em;
`;

interface IChairWrapper {
    counter: number;
    numOfChairs: number;
    position: Position;
    relativeSize: number;
}

const ChairWrapper = styled.div<IChairWrapper>`
    --d: ${({ relativeSize }) => 6.5 * relativeSize}em; /* chair size */
    --rel: 1; /* how much extra space we want between images, 1 = one image size */
    --r: calc(
        ${({ numOfChairs }) =>
                numOfChairs < minChairsBeforeTableResize ? 1.0 : 0.5} *
            (1 + var(--rel)) * var(--d) / var(--tan)
    ); /* circle radius */
    position: absolute;
    top: 50%;
    left: 50%;
    margin: calc(-0.5 * var(--d));
    width: var(--d);
    height: var(--d);
    --az: calc(
        ${({ counter, position, numOfChairs }) =>
            getTurnValue(counter, numOfChairs, position)}
    );
    transform: rotate(var(--az)) translate(var(--r))
        rotate(calc(-1 * var(--az)));
`;

const TableInfo = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.colors.background};
    padding: calc(var(--s) / 2.4) 0;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    font-weight: bold;
`;

interface IStatus {
    occupancyColor: string;
}

const Status = styled.div<IStatus>`
    color: ${({ occupancyColor }) => occupancyColor};
`;
