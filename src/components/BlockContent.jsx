import PropTypes from "prop-types";

const BlockContent = ({ children, className = "", title }) => {
  return (
    <div
      className={
        "flex flex-col items-center px-3 py-5 border border-borderColor rounded-[24px] bg-black bg-opacity-40 backdrop-blur-[1.5px] " +
        className
      }
    >
      <h3 className="text-xl font-bold">{title}</h3>
      {children}
    </div>
  );
};

BlockContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.any.isRequired,
};

export default BlockContent;
