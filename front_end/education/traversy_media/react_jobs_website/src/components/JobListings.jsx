// Import useState and useEffect hooks from React
import {useState, useEffect} from 'react';
// Import JobListing component to display individual job listings
import JobListing from './JobListing';
// Import Spinner component to show a loading indicator
import Spinner from './Spinner';

// Define JobListings component with isHome prop to determine if it's being used on the home page
const JobListings = ({isHome = false}) => {
  // State for storing job listings
  const [jobs, setJobs] = useState([]);
  // State for tracking loading status
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch job listings when the component mounts
  useEffect(() => {
    // Define async function to fetch jobs
    const fetchJobs = async () => {
      // Determine the API URL based on isHome prop
      const apiUrl = isHome 
        ? '/api/jobs?_limit=3' // If isHome, limit to 3 jobs
        : '/api/jobs'; // Else, fetch all jobs
      try {
        // Fetch jobs from the API
        const res = await fetch(apiUrl);
        // Parse the response as JSON
        const data = await res.json();
        // Update the jobs state with fetched data
        setJobs(data);
      } catch (error) {
        // Log any errors to the console
        console.log('Error fetching data', error)
      } finally {
        // Set loading to false once fetching is complete
        setLoading(false);
      }
    };

    // Call fetchJobs to execute the fetching
    fetchJobs();
  }, []); // Empty dependency array means this effect runs once on mount

  // Render the component
  return (
    // Section for job listings with styling
    <section className="bg-blue-50 px-4 py-10">
      {/* // Container for centering content */}
      <div className="container-xl lg:container m-auto">
        {/* // Heading displaying either 'Recent Jobs' or 'Browse Jobs' based on isHome prop */}
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {/* // Conditional rendering based on loading state */}
        {loading ? (
          // Show spinner component while loading
          <Spinner loading={loading}/>
        ) : (
          // Grid layout for job listings
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* // Map over jobs array to render a JobListing component for each job */}
            {jobs.map((job) => (
              <JobListing key={job.id} job={job}/> // Pass job data and key to each JobListing
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Export JobListings component for use in other parts of the application
export default JobListings;