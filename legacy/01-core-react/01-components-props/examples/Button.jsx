/**
 * Example: Functional component with props and children
 *
 * Key concepts:
 * - Props are read-only
 * - Destructuring for clean API
 * - children for flexible composition
 */

function Button({ children, variant = "primary", onClick, disabled = false }) {
  const baseStyles = "px-4 py-2 rounded font-medium transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// PropTypes for runtime validation (optional if using TypeScript)
// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
//   onClick: PropTypes.func,
//   disabled: PropTypes.bool,
// };

export default Button;
