// Import Link component from react-router-dom for navigation
import {Link} from 'react-router-dom';

// Define ViewAllJobs functional component
const ViewAllJobs = () => {
  // Return JSX for the ViewAllJobs component
  return (
    // Section container for styling and layout
    <section className="m-auto max-w-lg my-10 px-6">
      {/* // Link component for navigation to the jobs page */}
      <Link
        to='/jobs' // Destination path for the link
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700" // Styling for the link
      >
        {/* // Text displayed on the link */}
        View All Jobs 
      </Link>
    </section>
  )
}

// Export ViewAllJobs component for use in other parts of the application
export default ViewAllJobs