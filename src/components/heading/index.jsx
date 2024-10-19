const Heading = ({
  level = 1,
  children
}) => {
  // Set the heading tag to set the level based on the heading size required
  const HeadingTag = `h${level}`

  return (
    <HeadingTag>{children}</HeadingTag>
  )
}

export default Heading