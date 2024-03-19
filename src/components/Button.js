import className from 'classnames';
import { twMerge } from 'tailwind-merge';


const finalClassName = className({
  'px-3 py-1.5 border border-blue-600 text-white bg-blue-500 rounded': true,
  'border-blue-600': true,
  'text-white': true,
  'bg-blue-500': true,
  'rounded': true,
  'px-3': true,
  'py-1.5': true,
});

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  outline,
  rounded,
  ...rest 
}) {
  const classes = twMerge(
   className('flex items-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-600 text-white': primary,
    'border-gray-400 bg-gray-500 text-white': secondary,
    'border-green-400 bg-green-500 text-white': success,
    'border-red-400 bg-red-500 text-white': danger,
    'border-yellow-400 bg-yellow-500 text-white': warning,
    'border-blue-500 bg-blue-500 text-white': info,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger
  })
);

  return <button {...rest} className={classes}>{children}</button>;
}

Button.propTypes = {
 checkVariationValue: ({ primary, secondary, success, danger, warning, info }) => {
  const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!danger) + Number(!!warning) + Number(!!info);

  if (count > 1) {
    return new Error(
      `You cannot use more than one variation at a time`
    )}
  },
};

export default Button;