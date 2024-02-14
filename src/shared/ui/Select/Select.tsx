import React, { ChangeEvent, SelectHTMLAttributes, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T>{
    value:T
    content:string
}
interface SelectProps<T extends string> extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>{
    className?: string
    label?:string
    options?:SelectOption<T>[];
    value?:T;
    onChange?:(value:T)=>void
}

export const Select = <T extends string>({
    className,
    label,
    options,
    value,
    onChange,
    ...restProps
} : SelectProps<T>) => {
    const mods:Mods = {};

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionList = useMemo(() => options?.map(({ value, content }) => (
        <option
            className={cls.option}
            value={value}
            key={value}
        >
            {content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.selectWrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>` }
                </span>
            )}
            <select
                className={cls.selectMain}
                onChange={onChangeHandler}
                value={value}
                {...restProps}
            >
                {optionList}
            </select>
        </div>
    );
};
