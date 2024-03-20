import React from "react";
import PropTypes from "prop-types"; // ES6

const Input = React.forwardRef(({ className = "", type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={
        "w-full px-4 py-3 transition-all bg-transparent border outline-none border-borderColor focus:border-primaryColor rounded-lg " +
        className
      }
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
