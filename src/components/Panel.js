import classNames from 'classnames';

// ...rest = collection of diff eventHandlers
const Panel = ({children,className,...rest}) => {  
  const classess = classNames(   
    'bg-green-50',
    'shadow',
    'p-3',
    'rounded',
    'border',
    'w-full',
    className
  );  
  return (
    <div {...rest} className={classess}>
      {children}
    </div>
  );
};

export default Panel;