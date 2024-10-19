const Button = ({ to, children }) => {

  // Check if the value passed to the prop is an external URL
  const isExternalURL = to && to.startsWith(`http`)

  // Perform check to render the component as a link or as a button
  const isLink = isExternalURL

  // Function to render the component as a link
  const renderAsLink = () =>
    <a href={to}>{children}</a>

  // Function to render the component as a button
  const renderAsButton = () =>
    <button>{children}</button>

  return (
    // Call functions to render the component as a link or as a button
    isLink ? renderAsLink() : renderAsButton()
  )
}

export default Button