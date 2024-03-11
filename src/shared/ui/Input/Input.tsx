import React, {
    ChangeEvent, InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
interface InputProps extends HTMLInputProps{
    className?: string
    value?: string|number
    onChange?:(value:string)=>void;
    autofocus?: boolean,
    readonly?:boolean

}

export const Input = memo((props : InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...restProps
    } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef(null) as MutableRefObject<HTMLInputElement|null>;

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            inputRef?.current?.focus();
        }
    }, [autofocus]);

    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };

    const onInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onSelect = (e:any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };
    const mods:Mods = {
        [cls.readonly]: readonly,
    };
    const isCaretVisible = isFocused && !readonly;

    return (
        <div className={classNames(cls.inputContainer, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    readOnly={readonly}
                    ref={inputRef}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onInputChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...restProps}
                />
                {isCaretVisible && <span className={cls.caret} style={{ left: caretPosition * 8.8 }} />}
            </div>

        </div>

    );
});
