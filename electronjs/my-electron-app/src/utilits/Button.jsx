import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  children,
  onClick,
  type,
  variant,
  size,
  className,
  ...props
}) => {
  const buttonClass = classNames(
    "rounded-md focus:outline-none",
    {
      "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
      "bg-gray-500 text-white hover:bg-gray-600": variant === "secondary",
      "bg-red-500 text-white hover:bg-red-600": variant === "danger",
      // Sizes
      "px-4 py-2 text-base": size === "md",
      "px-2 py-1 text-sm": size === "sm",
      "px-6 py-3 text-lg": size === "lg",
    },
    className
  );

  return (
    <button type={type} onClick={onClick} className={buttonClass} {...props}>
      {children}
    </button>
  );
};
Button.prototypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

export default Button;
