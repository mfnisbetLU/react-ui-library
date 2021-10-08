import React, {
    Children,
    isValidElement,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import styled, { useTheme } from 'styled-components';
import { AngleDown } from '@styled-icons/fa-solid/AngleDown';
import {
    clickable,
    darken,
    flex,
    position,
    scroll,
    styledCondition,
    transition,
} from '@Utils/Mixins';
import { useTransition } from '@Utils/Hooks';
import { LabelLayout, LabelLayoutProps } from '@Layouts';

export interface SelectProps extends LabelLayoutProps {
    disabled?: boolean;
    placeholder?: string | HTMLOptionElement;
    value?: string | number | HTMLOptionElement;
    onChange?: Function;
    limit?: number;
    iconProps?: { style: any };
}

export const Select: React.FC<SelectProps> = ({
    disabled,
    value,
    children,
    limit = 4,
    placeholder = '',
    onChange = (): void => undefined,
    name,
    iconProps,
    ...props
}): React.ReactElement => {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(false);
    const options = Children.toArray(children);

    const { success, error } = props;
    const displayProps = { success, error, disabled };

    const [, mount, animation] = useTransition(expanded, {
        end: theme.speed[SPEED],
    });

    const selected = useMemo(
        (): React.ReactNode =>
            options.find(
                (option): boolean =>
                    isValidElement(option) &&
                    option.props.value === String(value),
            ),
        [children, value],
    );

    const onSelect = useCallback(
        ({ currentTarget }): void => {
            onChange({
                target: {
                    value: currentTarget.getAttribute('value'),
                    name,
                },
            });
        },
        [name],
    );

    useEffect((): void | (() => void | undefined) => {
        if (expanded) {
            const listener = (): void => {
                setExpanded(false);
            };
            const timer = window.setTimeout((): void => {
                window.addEventListener('click', listener, { once: true });
            }, 10);

            return (): void => {
                window.clearTimeout(timer);
                window.removeEventListener('click', listener);
            };
        }
        return undefined;
    }, [expanded]);

    return (
        <LabelLayout {...props}>
            <Container>
                <SelectDisplay
                    {...displayProps}
                    onClick={
                        !disabled ? (): void => setExpanded(true) : undefined
                    }
                >
                    <SelectText>
                        {selected
                            ? (selected as React.ReactElement).props.children
                            : placeholder}
                    </SelectText>
                    <Icon {...iconProps} />
                </SelectDisplay>
                {mount && (
                    <SelectList
                        limit={Math.min(options.length, limit)}
                        expanded={animation}
                    >
                        {createList(options, onSelect, value)}
                    </SelectList>
                )}
            </Container>
        </LabelLayout>
    );
};


