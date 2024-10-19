import Button from "./components/button"
import Heading from "./components/heading"

const App = () => {
  const showAlert = () => {
    alert("Hello, World");
  }

  return (
    <>
      <Heading>Main Heading</Heading>
      <Button onClick={showAlert}>Test Button</Button>
    </>
  )
}

export default App
