import React from "react";
import PropTypes from "prop-types";
import { Loader2 } from "lucide-react";

const ButtonPrimary = React.forwardRef(
  ({ className, children, loading, title, ...props }, ref) => {
    return (
      <button
        className={
          "text-lg capitalize px-5 py-3 font-semibold bg-gradient-to-b from-primaryColor to-[#4a78b8] rounded-md text-black hover:opacity-90 transition-all disabled:opacity-80 " +
          className
        }
        ref={ref}
        disabled={loading}
        title={title}
        {...props}
      >
        {loading ? (
          <div className="min-w-[100px] flex justify-center h-6">
            <Loader2 className="w-5 h-5 text-black animate-spin" />
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

ButtonPrimary.displayName = "ButtonPrimary";

ButtonPrimary.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
  title: PropTypes.string,
};

export default ButtonPrimary;
