import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

export default function NotFound() {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={`min-vh-100 d-flex flex-column justify-content-center align-items-center ${
        dark ? 'bg-black text-white' : 'bg-white text-dark'
      }`}
    >
      <h1 className="display-4 fw-bold">404</h1>
      <p className="lead mb-4">Page not found.</p>
      <Link
        to="/"
        className={`btn px-4 py-2 rounded-2 fw-semibold ${
          dark
            ? 'btn-light text-black hover-dark'
            : 'btn-dark text-white hover-light'
        }`}
      >
        Go back home
      </Link>
      <style>
        {`
          .hover-dark:hover {
            background-color: #000000ff !important;
            color: #fff !important;
          }
          .hover-light:hover {
            background-color: #f1f1f1 !important;
            color: #000000ff !important;
          }`}
      </style>
    </div>
  );
}
