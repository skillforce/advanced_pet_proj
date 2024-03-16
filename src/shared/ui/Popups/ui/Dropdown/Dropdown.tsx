import React, { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../ui/styles/consts';
import { AppLink } from '../../../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import popupCls from '../styles/popup.module.scss';

export interface DropdownItem{
    disabled?:boolean;
    content?:ReactNode;
    onClick?:()=>void;
    href?:string;
}
interface DropdownProps {
    className?: string
    items:DropdownItem[]
    trigger:ReactNode
    direction?:DropdownDirection
}

export const Dropdown = memo(({
    className, trigger, items, direction = 'bottom right',
}: DropdownProps) => {
    const menuAdditionalClasses = [
        mapDirectionClass[direction],
    ];
    return (
        <Menu as="div" className={classNames(cls.DropdownContainer, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuAdditionalClasses)}>
                {items.map(({
                    href, onClick, disabled, content,
                }, index) => {
                    const menuOptionContent = ({ active }: { active: boolean }) => (
                        <button
                            key={`dropdown-key${index}`}
                            type="button"
                            onClick={onClick}
                            className={classNames(cls.item, { [popupCls.active]: active }, [])}
                        >
                            {content}
                        </button>
                    );
                    if (href) {
                        return (
                            <Menu.Item key={`dropdown-key${index}`} as={AppLink} className={cls.linkMenuItem} to={href} disabled={disabled}>
                                {menuOptionContent}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item key={`dropdown-key${index}`} as={Fragment} disabled={disabled}>
                            {menuOptionContent}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
