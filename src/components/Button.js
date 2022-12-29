// import { PropTypes } from "prop-types";
import className from 'classnames';

// ...rest = collection of diff eventHandlers
const Button = ({
  children,
  rounded,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  ...rest
}) => {
  const objStyles = {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-400 bg-yellow-400 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger,
  };
  // rest provides passing (extra className to <button html> and diff handlers)

  const classess = className(
    rest.className,
    'flex items-center',
    'px-3',
    'py-1.5',
    'border',
    objStyles
  );

  return (
    <button {...rest} className={classess}>
      {children}
    </button>
  );
};
Button.propTypes = {
  // rounded: PropTypes.bool ...
  checkIsUniqueVariant: (
    { primary, secondary, warning, danger, success },
    propName,
    componentName
  ) => {
    // true == 1 vs undefined (!!undefined = false)
    // Number(true) -> 1 Number(false)->0
    // propName = checkIsName; componentName = Button
    let variants = ' rounded,primary,secondary,outlined,warning,danger,success';
    const isUniqueCount =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (isUniqueCount > 1) {
      return new Error(
        `Invalid props: only one prop in ${variants} can be true`
      );
    }
  },
};

export default Button;
