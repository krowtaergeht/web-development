// Import NavLink from react-router-dom for navigation
import {NavLink} from 'react-router-dom';
// Import logo image from assets
import logo from '../assets/images/logo.png';

// Define Navbar functional component
const Navbar = () => {
  // Function to determine link class based on active state
  const linkClass = ({isActive}) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
  
  // Return JSX for the Navbar
  return (
    // Navigation bar container with styling
    <nav className="bg-indigo-700 border-b border-indigo-500">
      {/* // Container for max width and padding */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* // Flex container for items in the navbar */}
        <div className="flex h-20 items-center justify-between">
          {/* // Container for logo and navigation links */}
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* // Logo and application name */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              {/* // Logo image */}
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              {/* // Application name visible on medium devices and wider */}
              <span className="hidden md:block text-white text-2xl font-bold ml-2">React Jobs</span>
            </NavLink>
            {/* // Container for navigation links, aligned to the right on medium devices */}
            <div className="md:ml-auto">
              {/* // Flex container for navigation links */}
              <div className="flex space-x-2">
                {/* // Navigation link to Home */}
                <NavLink to="/" className={linkClass}>Home</NavLink>
                {/* // Navigation link to Jobs */}
                <NavLink to="/jobs" className={linkClass}>Jobs</NavLink>
                {/* // Navigation link to Add Job */}
                <NavLink to="/add-job" className={linkClass}>Add Job</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar