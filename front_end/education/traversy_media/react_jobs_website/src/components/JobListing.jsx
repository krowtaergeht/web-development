// Import necessary modules and components
import {Link} from 'react-router-dom'; // Import Link for navigation
import {useState} from 'react'; // Import useState hook for component state management
import {FaMapMarker} from 'react-icons/fa'; // Import FaMapMarker icon from react-icons

// Define the JobListing functional component with job prop
const JobListing = ({job}) => {
    // Initialize state for showing full or partial job description
    const [showFullDescription, setShowFullDescription] = useState(false);

    // Store job description in a variable
    let description = job.description;

    // If showFullDescription is false, truncate the description
    if (!showFullDescription) {
        description = description.substring(0, 90) + '...';
    }

    // Return JSX to render the component
    return (
       // Main container for the job listing
       <div className="bg-white rounded-xl shadow-md relative">
         {/* // Container for job details */}
         <div className="p-4">
           {/* // Container for job type and title */}
           <div className="mb-6">
             {/* // Display job type */}
             <div className="text-gray-600 my-2">{job.type}</div>
             {/* // Display job title */}
             <h3 className="text-xl font-bold">{job.title}</h3>
           </div>

           {/* // Container for job description and toggle button */}
           <div className="mb-5">
             {/* // Display job description */}
             {description}
             {/* // Button to toggle full/partial description */}
             <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">
               {/* // Button text changes based on showFullDescription state */}
               {showFullDescription ? 'Less' : 'More'}
             </button>  
           </div>

           {/* // Display job salary */}
           <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

           {/* // Decorative border */}
           <div className="border border-gray-100 mb-5"></div>

           {/* // Container for job location */}
           <div className="flex flex-col lg:flex-row justify-between mb-4">
             {/* // Display job location with icon */}
             <div className="text-orange-700 mb-3">
               <FaMapMarker className='inline text-lg mb-1 mr-1' />
               {job.location}
               </div>
           {/* // Use Link component for navigation with dynamic path based on job id */}
           <Link
             to={`/jobs/${job.id}`} // Set the destination URL to the job details page
             className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm" // Styling for the link button
           >
            Read More // Button text
           </Link>
           {/* // Close the flex container for job location and read more button */}
         </div> 
         {/* // Close the container for job details */}
       </div> 
     </div> // Close the main container for the job listing
  ) // End of return statement
} // End of JobListing component

export default JobListing // Export JobListing component for use in other parts of the application