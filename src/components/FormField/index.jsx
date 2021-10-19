/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { ReactComponent as ClearIcon } from '../../icons/clear.svg';
import './styles.scss';

function FormField({
  layout,
  label,
  label2,
  name,
  required = false,
  placeholder = '',
  value: initialValue = '',
  ...rest
}) {
  const [value, setValue] = useState(initialValue);
  const isClearVisible = value !== '';

  const [isFocused, setFocus] = useState(false);

  const inputEl = useRef(null);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue('');
    inputEl.current.focus();
  };

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  const cls = [
    'form-field',
    isFocused ? 'form-field_focused' : '',
    layout ? `form-field_layout_${layout}` : '',
  ];

  const className = cls.join(' ');

  return (
    <div className={className}>
      {!!label && (
        <label htmlFor={name} className="form-field__label">
          {label}
          {required ? <span style={{ color: '#FF3333' }}>&nbsp;*</span> : ''}
        </label>
      )}
      <div className="form-field__box">
        {isClearVisible && layout !== 'inline' && (
          <div
            className="form-field__clear"
            onClick={handleClear}
            onFocus={() => setFocus(true)}
            tabIndex="-1"
          >
            <ClearIcon />
          </div>
        )}
        <input
          id={name}
          ref={inputEl}
          type="text"
          className="form-field__input"
          required={required}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
        />
      </div>
      {!!label2 && <label htmlFor={name} className="form-field__label">{label2}</label>}
    </div>
  );
}

export default FormField;
