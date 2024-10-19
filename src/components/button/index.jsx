import PropTypes from "prop-types"

const Button = ({ 
  type = "button",
  to, 
  className, 
  style,
  id,
  onClick,
  openAsTab = false,
  children,
  ...rest // Spread operator to capture any other props
}) => {
  // Check if the value passed to the prop is an external URL
  const isExternalURL = to && to.startsWith(`http`)
  // Check for internal links using RegEx to check for page URLs that start with /
  const isInternalURL = /^\/(?!\/)/.test(to)
  // Check for anchor links using RegEx to check for page URLs that start with #
  const isAnchorURL = to && to.startsWith(`#`)
  // Check if an email address is passed onto the prop using RegEx. This should be without mailto:
  const isEmail = to && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)

  // Perform check to render the component as a link or as a button
  const isLink = to && (isExternalURL || isInternalURL || isAnchorURL || isEmail)

  // Function to render the component as a link
  const renderAsLink = () =>
    <a 
      // Apply mailto: to the start of an email address if this is passed into the prop, or fallback to the default
      href={isEmail ? `mailto:${to}` : to}
      role="button"
      // The attribute will only be rendered if the prop has a value
      className={className ? className : undefined}
      // The attribute will only be rendered if the prop has a value
      style={style ? style : undefined}
      // The attribute will only be rendered if the prop has a value
      id={id ? id : undefined}
      // Conditionally add the target attribute if openAsTab is true
      target={openAsTab ? "blank" : undefined}
      // Conditionally add the rel attribute to protect the referrer URL when a link opens in a new tab
      rel={openAsTab ? "noopener noreferrer" : undefined}
      // Spread any additional props
      {...rest}
    >
      {children}
    </a>

  // Function to render the component as a button
  const renderAsButton = () =>
    <button 
      {...{ type }}
      // The attribute will only be rendered if the prop has a value
      className={className ? className : undefined}
      // The attribute will only be rendered if the prop has a value
      style={style ? style : undefined}
      // The attribute will only be rendered if the prop has a value
      id={id ? id : undefined}
      // The attribute will only be rendered if the prop has a value
      onClick={onClick ? onClick : undefined}
      // Spread any additional props
      {...rest}
    >
      {children}
    </button>

  return (
    // Call functions to render the component as a link or as a button
    isLink ? renderAsLink() : renderAsButton()
  )
}

// Type checking applied using prop-types
Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  to: PropTypes.string, 
  className: PropTypes.string, 
  style: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  openAsTab: PropTypes.bool,
  children: PropTypes.any
}

export default Button