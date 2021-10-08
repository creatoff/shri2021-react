import './styles.scss';
import {ReactComponent as ClearIcon} from '../../icons/clear.svg';
import {useState, useRef} from 'react';

function FormField({label, name, required = false, placeholder = '', value: initialValue = ''}) {
  
  const [value, setValue] = useState(initialValue);
  // todo: check how to bind clear state with value
  const [isClearVisible, setClearVisibility] = useState(value !== '');
  const [isFocused, setFocus] = useState(false);

  const inputEl = useRef(null);

  const handleInput = (e) => {
    setValue(e.target.value);
    setClearVisibility(e.target.value !== '');
  };

  const handleClear = () => {
    setValue('');
    setClearVisibility(false);
    inputEl.current.focus();
  };
  
  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  const classes = `form-field ${isFocused ? 'form-field_focused' : ''}`;

  return ( 
    <div className={classes}>
      {!!label && <label htmlFor={name} className="form-field__label">
        {label}
        {required ? <span style={{color: '#FF3333'}}>&nbsp;*</span> : ''}
      </label>}
      <div className="form-field__box">
        {isClearVisible && (
          <div
            className="form-field__clear"
            onClick={handleClear}
            onFocus={() => setFocus(true)}
            tabIndex="-1"
          >
            <ClearIcon></ClearIcon>
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
        />
      </div>
      
    </div>
   );
}

export default FormField;