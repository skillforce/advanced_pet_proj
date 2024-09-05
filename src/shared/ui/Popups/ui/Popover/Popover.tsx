import React, { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../ui/styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export const Popover = memo(
    ({
        className,
        trigger,
        direction = 'bottom right',
        children,
    }: PopoverProps) => {
        const optionsAdditionalClasses = [mapDirectionClass[direction]];
        return (
            <div
                className={classNames(cls.PopoverContainer, {}, [
                    className,
                    popupCls.popup,
                ])}
            >
                <HPopover>
                    <HPopover.Button as="div" className={popupCls.trigger}>
                        {trigger}
                    </HPopover.Button>

                    <HPopover.Panel
                        className={classNames(
                            cls.panel,
                            {},
                            optionsAdditionalClasses,
                        )}
                    >
                        {children}
                    </HPopover.Panel>
                </HPopover>
            </div>
        );
    },
);
