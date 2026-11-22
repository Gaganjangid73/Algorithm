import { cloneElement, isValidElement } from 'react';

// Works with icon={<FaIcon />} and with icon={FaIcon}.
// The icon is decoration, so we hide it from screen readers.
function renderIcon(icon) {
  if (!icon) return null;
  if (isValidElement(icon)) return cloneElement(icon, { 'aria-hidden': 'true' });
  if (typeof icon === 'function') {
    const Icon = icon;
    return <Icon aria-hidden="true" />;
  }
  return icon;
}

function Button({
  text,
  children,
  icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  ...rest // onClick, disabled, style, aria-* and others pass through here
}) {
  const content = text ?? children;

  return (
    <button type={type} className={className} {...rest}>
      {iconPosition === 'left' && renderIcon(icon)}
      {content}
      {iconPosition === 'right' && renderIcon(icon)}
    </button>
  );
}

export default Button;