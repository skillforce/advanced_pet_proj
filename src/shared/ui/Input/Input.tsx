import React, {
    ButtonHTMLAttributes, ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLButtonElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps{
    className?: string
    value?: string
    onChange?:(value:string)=>void;
    autofocus?: boolean,

}

export const Input = memo((props : InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...restProps
    } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef(null);

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

    return (
        <div className={classNames(cls.inputContainer, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
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
                {isFocused && <span className={cls.caret} style={{ left: caretPosition * 8.8 }} />}
            </div>

        </div>

    );
});
