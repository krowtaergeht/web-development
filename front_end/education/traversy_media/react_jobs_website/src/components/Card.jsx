// Define a functional component named Card that accepts props
const Card = ({children, bg = 'bg-gray-100'}) => {
  // Return JSX to render the component
  return (
    // Use a div element with dynamic classes for styling, including a default or passed background color
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {/* // Render children elements passed into the Card component */}
        {children}
    </div>
  )
}

// Export the Card component to be used in other parts of the application
export default Card