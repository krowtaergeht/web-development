// Import Outlet from react-router-dom for nested routing
import {Outlet} from 'react-router-dom';
// Import Navbar component for navigation
import Navbar from '../components/Navbar';
// Import ToastContainer for displaying notifications
import {ToastContainer} from 'react-toastify';
// Import CSS for react-toastify
import 'react-toastify/dist/ReactToastify.css';

// Define MainLayout functional component
const MainLayout = () => {
  // Return JSX for the MainLayout component
  return (
    // Fragment to group the layout components without adding extra nodes to the DOM
    <>
      {/* // Navbar component for the top navigation bar */}
      <Navbar/>
      {/* // Outlet component to render the matched child route component */}
      <Outlet/>
      {/* // ToastContainer component for displaying toast notifications */}
      <ToastContainer/>
    </>
  )
}

// Export MainLayout component for use in other parts of the application
export default MainLayout