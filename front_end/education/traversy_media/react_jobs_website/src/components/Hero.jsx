// Define a functional component named Hero that accepts props with default values for title and subtitle
const Hero = ({title = 'Become a React Dev', subtitle = 'Find the React job that fits'}) => {
  // Return JSX to render the component
  return (
    // Use a section element with classes for styling, including background color, padding, and margin
    <section className="bg-indigo-700 py-20 mb-4">
      {/* // Use a div element to center the content and set max width, with responsive padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* // Use another div element for text alignment */}
        <div className="text-center">
          {/* // Use an h1 element for the main title, with responsive text size and styling classes */}
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {/* // Render the title prop inside the h1 element */}
            {title}
          </h1>
          {/* // Use a paragraph element for the subtitle, with margin for spacing and styling classes */}
          <p className="my-4 text-xl text-white">
            {/* // Render the subtitle prop inside the paragraph element */}
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

// Export the Hero component to be used in other parts of the application
export default Hero