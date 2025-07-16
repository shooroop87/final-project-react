import { forwardRef, useState } from 'react';
import styles from './input.module.css';
import { EditIcon, PasswordIcon } from './inputIcons';
import type { InputUIProps } from './type';

const iconTypes = {
  password: () => <PasswordIcon />,
  edit: () => <EditIcon />,
};

// type = text | password | email | textarea
// onChange = передаем event в колбэк, например:
//    onChange={(event) => setUsername(event.target.value)}
// value = значение поля, получаемое из стейта
// name = идентификатор для формы и лейбла
// tip = текстовая подсказка под инпутом, есть в некоторых сценариях
// error = true | false ошибка валидации
// errorText = описание ошибки под инпутом
// icon = password | edit
//    Тип иконки в правой части инпута
//    Если тип инпута password, игнорируется и устанвливается PasswordIcon
// rows = количество строк для многострочного поля
export const InputUI = forwardRef<HTMLInputElement, InputUIProps>(
  (
    {
      type,
      label,
      placeholder,
      onChange,
      value,
      name,
      tip,
      error,
      errorText,
      icon,
      rows,
      min,
      max,
      step,
    },
    ref
  ) => {
    const isPassword = type === 'password';
    const [inputType, setInputType] = useState(type);

    const passwordToggle = () => {
      if (inputType === 'password') setInputType('text');
      else if (inputType === 'text') setInputType('password');
    };

    return (
      <div className={styles.container}>
        {label && (
          <label className={styles.label} htmlFor={name}>
            {label}
          </label>
        )}
        <div className={styles['input-wrapper']}>
          {inputType === 'textarea' ? (
            <textarea
              rows={rows}
              placeholder={placeholder}
              value={value}
              name={name}
              id={name}
              onChange={onChange}
              className={error ? `${styles.input} ${styles['error-input']}` : styles.input}
            />
          ) : (
            <input
              type={inputType}
              placeholder={placeholder}
              value={value}
              name={name}
              id={name}
              onChange={onChange}
              className={error ? `${styles.input} ${styles['error-input']}` : styles.input}
              ref={ref}
              {...(type === 'number' && {
                inputMode: 'numeric',
                min,
                max,
                step,
              })}
            />
          )}

          <div className={styles.icon}>
            {isPassword && (
              <button
                aria-label='Показать или скрыть пароль'
                aria-controls={name}
                aria-pressed={inputType === 'password' ? false : true}
                onClick={passwordToggle}
                className={styles['icon-button']}
              >
                <PasswordIcon />
              </button>
            )}
            {icon && !isPassword && iconTypes[icon]?.()}
          </div>
        </div>
        {tip && !error && <span className={`${styles.subtext} ${styles['tip-text']}`}>{tip}</span>}
        {error && <span className={`${styles.subtext} ${styles['error-text']}`}>{errorText}</span>}
      </div>
    );
  }
);

InputUI.displayName = 'InputUI';
