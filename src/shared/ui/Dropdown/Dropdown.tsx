import React, { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Dropdown.module.scss';

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

const mapDirectionClass:Record<DropdownDirection, string> = {
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,

};

export const Dropdown = memo(({
    className, trigger, items, direction = 'bottom right',
}: DropdownProps) => {
    const { t } = useTranslation();

    const menuAdditionalClasses = [
        mapDirectionClass[direction],
    ];
    return (
        <Menu as="div" className={classNames(cls.DropdownContainer, {}, [className])}>
            <Menu.Button className={cls.button}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuAdditionalClasses)}>
                {items.map(({
                    href, onClick, disabled, content,
                }) => {
                    const menuOptionContent = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            onClick={onClick}
                            className={classNames(cls.item, { [cls.active]: active }, [])}
                        >
                            {content}
                        </button>
                    );
                    if (href) {
                        return (
                            <Menu.Item as={AppLink} className={cls.linkMenuItem} to={href} disabled={disabled}>
                                {menuOptionContent}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item as={Fragment} disabled={disabled}>
                            {menuOptionContent}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
