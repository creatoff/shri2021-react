import {Link} from "react-router-dom";
import './styles.scss';


function Button({
    href,
    children,
    theme = 'control',
    size,
    icon = null,
    type = 'button',
    ...rest
  }) {

  const cls = {
    default: 'button',
    theme: theme ? `button_theme_${theme}` : '',
    size: size ? `button_size_${size}` : '',
    textless: !children ? 'button_textless' : '',
  };

  const className = `${Object.values(cls).join(' ')}`;

  const Icon = icon;

  const content = (
    <>
      {children && <div className="button__label">{ children }</div>}
      {icon && (
        <div className="button__icon">
          <Icon></Icon>
        </div>
      )}
    </>
  );

  if (href) {
    return <Link className={className} to={href} {...rest}>{content}</Link>
  } else {
    return <button className={className} type={type} {...rest}>{content}</button>
  }
}

export default Button;