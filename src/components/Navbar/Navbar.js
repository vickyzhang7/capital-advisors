import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../assets/images/logo.png';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

// Dropdown component for handling menus like "Who We Are", "Solutions", "Insight"
const Dropdown = ({ title, items }) => (
  <div className="relative group inline-block ">
    <button className="font-medium text-neutralgray-600 hover:text-primaryblue-500">{title}</button>
    <div className="hidden group-hover:block absolute left-1/2 transform -translate-x-1/2 bg-gray-100 py-2 w-52 z-100 text-center mx-auto">
      {items.map((item, index) => (
        <Link
          key={index}
          to={`/${item.replace(/\s+/g, '-').toLowerCase()}`}
          className="block py-2 text-gray-800 hover:bg-gray-100 mx-auto hover:text-primaryblue-500"
        >
          {item}
        </Link>
      ))}
    </div>
  </div>
);

const Navbar = () => {
  const { user, isLoading } = useAuth0();
  // Extract initials from user's name
  const getUserInitials = (name) => {
    const names = name.split(' ');
    return names.map((n) => n[0]).join('');
  };

  // Define the menu items for the dropdowns
  const whoWeAreItems = ['Our Story', 'Our Team', 'Careers'];
  const solutionsItems = ['Investment Management', 'Corporate Banking', 'Debt Finance Consulting'];
  const insightItems = ['News', 'Event'];

  return (
    <div className="bg-gray-100 py-1">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/" >
          <img src={logo} alt="logo" className="w-auto h-[100px]" />
        </Link>

        {/* Dropdowns */}
        <Dropdown title="Who We Are" items={whoWeAreItems} />
        <Dropdown title="Solutions" items={solutionsItems} />
        <Dropdown title="Insight" items={insightItems} />

        <Link to="/contact-us" className="font-medium text-neutralgray-600 hover:text-primaryblue-500">
          Contact Us
        </Link>

        {/* Conditional rendering for logged in/out status */}
        {user ? (
          <>
            <Link to="/investment-products" className="font-medium text-neutralgray-600 hover:text-primaryblue-500">
              Investment Products
            </Link>
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}

        {/* User Information */}
        <div className="flex items-center">
          {!isLoading && user && (
            <Link to="/profile">
            <div className="flex items-center justify-center bg-primaryblue-500 text-white font-medium rounded-full w-10 h-10">
              {getUserInitials(user.name)}
            </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
