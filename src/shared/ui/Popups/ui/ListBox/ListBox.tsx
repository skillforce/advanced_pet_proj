import { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './ListBox.module.scss';
import popupCls from '../styles/popup.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack/HStack/HStack';
import { mapDirectionClass } from '../../ui/styles/consts';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value: string;
    defaultValue: string;
    onChange: <T extends string>(value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export const ListBox = memo(
    ({
        className,
        items,
        value,
        onChange,
        defaultValue,
        readonly,
        direction = 'bottom left',
        label,
    }: ListBoxProps) => {
        const optionsAdditionalClasses = [mapDirectionClass[direction]];
        return (
            <HStack gap="4">
                {label && (
                    <span
                        className={classNames(
                            '',
                            { [cls.disabled]: readonly },
                            [],
                        )}
                    >{`${label}>`}</span>
                )}
                <HListBox
                    as="div"
                    className={classNames(cls.ListBoxContainer, {}, [
                        className,
                        popupCls.popup,
                    ])}
                    value={value}
                    onChange={onChange}
                    disabled={readonly}
                >
                    <HListBox.Button className={popupCls.trigger}>
                        <Button disabled={readonly}>
                            {value || defaultValue}
                        </Button>
                    </HListBox.Button>
                    <HListBox.Options
                        className={classNames(
                            cls.options,
                            { [popupCls.disabled]: readonly },
                            optionsAdditionalClasses,
                        )}
                    >
                        {items?.map(({ value, content, disabled }) => (
                            <HListBox.Option
                                key={value}
                                value={value}
                                disabled={disabled}
                                as={Fragment}
                            >
                                {({ active, selected }) => (
                                    <li
                                        className={classNames(
                                            cls.item,
                                            {
                                                [popupCls.active]: active,
                                                [popupCls.disabled]: disabled,
                                            },
                                            [],
                                        )}
                                    >
                                        {selected && '✅'}
                                        {content}
                                    </li>
                                )}
                            </HListBox.Option>
                        ))}
                    </HListBox.Options>
                </HListBox>
            </HStack>
        );
    },
);
