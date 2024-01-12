import {
    Fragment, memo, ReactNode, useState,
} from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './ListBox.module.scss';

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
];

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

}

export const ListBox = memo(({
    className, items, value, onChange, defaultValue, readonly,
}: ListBoxProps) => (
    <HListBox
        as="div"
        className={classNames(cls.ListBoxContainer, { [cls.readonly]: readonly }, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
    >
        <HListBox.Button className={cls.trigger}>
            <Button>
                {value || defaultValue}
            </Button>
        </HListBox.Button>
        <HListBox.Options className={cls.options}>
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
));
