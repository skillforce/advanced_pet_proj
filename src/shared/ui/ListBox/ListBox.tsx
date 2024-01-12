import {
    Fragment, memo, ReactNode, useState,
} from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import cls from './ListBox.module.scss';

type DropdownDirection = 'top' | 'bottom'

export interface ListBoxItem {
    value:string;
    content:ReactNode;
    disabled?:boolean
}

interface ListBoxProps {
    items?:ListBoxItem[];
    className?: string
    value:string
    defaultValue:string
    onChange:<T extends string>(value:T)=>void
    readonly?:boolean
    direction?:DropdownDirection
    label?:string

}

const mapDirectionClass:Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export const ListBox = memo(({
    className, items, value, onChange, defaultValue, readonly, direction = 'bottom', label,
}: ListBoxProps) => {
    const optionsAdditionalClasses = [
        mapDirectionClass[direction],
    ];
    return (
        <HStack gap="4">
            {label && <span className={classNames('', { [cls.disabled]: readonly }, [])}>{`${label}>`}</span>}
            <HListBox
                as="div"
                className={classNames(cls.ListBoxContainer, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value || defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, { [cls.disabled]: readonly }, optionsAdditionalClasses)}>
                    {items?.map(({ value, content, disabled }) => (
                        <HListBox.Option
                            key={value}
                            value={value}
                            disabled={disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, {
                                    [cls.active]: active,
                                    [cls.disabled]: disabled,
                                }, [])}
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
});
