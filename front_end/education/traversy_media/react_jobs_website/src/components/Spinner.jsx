// Import ClipLoader component from react-spinners library for loading animation
import Cliploader from 'react-spinners/ClipLoader';

// Define CSS override for ClipLoader styling
const override = {
    display: 'block', // Ensure the loader is block displayed
    margin: '100px auto', // Center the loader with automatic margins
};

// Define Spinner functional component with loading prop
const Spinner = ({loading}) => {
  // Return JSX for the Spinner component
  return (
    // ClipLoader component for the loading animation
    <Cliploader
      color='#4338ca' // Set the color of the spinner
      loading={loading} // Pass loading state to control the animation
      cssOverride={override} // Apply CSS override for custom styling
      size={150} // Set the size of the spinner
    />
  )
}

// Export Spinner component for use in other parts of the application
export default Spinner