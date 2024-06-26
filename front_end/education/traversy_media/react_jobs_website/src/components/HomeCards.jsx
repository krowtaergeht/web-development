// Import the Link component from react-router-dom for navigation and Card component for UI
import {Link} from 'react-router-dom';
import Card from './Card';

// Define a functional component named HomeCards
const HomeCards = () => {
  // Return JSX to render the component
  return (
    // Use a section element with padding for layout
    <section className="py-4">
      {/* // Use a div element as a container with max width and auto margins for centering */}
      <div className="container-xl lg:container m-auto">
        {/* // Use a div element to create a responsive grid layout for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {/* // First Card component for Developers */}
          <Card>
            {/* // Use an h2 element for the card title with styling */}
            <h2 className="text-2xl font-bold">For Developers</h2>
            {/* // Use a paragraph element for card description with margin for spacing */}
            <p className="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            {/* // Use the Link component for navigation with styling for the button */}
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </Link>
          </Card>
          {/* // Second Card component for Employers with a custom background color */}
          <Card bg='bg-indigo-100'>
            {/* // Use an h2 element for the card title with styling */}
            <h2 className="text-2xl font-bold">For Employers</h2>
            {/* // Use a paragraph element for card description with margin for spacing */}
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            {/* // Use the Link component for navigation with styling for the button */}
            <Link
              to="/add-job"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards