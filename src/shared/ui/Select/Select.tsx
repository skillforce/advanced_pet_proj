import React, {
    ChangeEvent, memo, SelectHTMLAttributes, useMemo,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Select.module.scss';

interface SelectOption{
    value:string
    content:string
}
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>{
    className?: string
    label?:string
    options?:SelectOption[];
    value?:string;
    onChange?:(value:string)=>void
}

export const Select = memo(({
    className,
    label,
    options,
    value,
    onChange,
    ...restProps
} : SelectProps) => {
    const mods:Mods = {};

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
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
});
