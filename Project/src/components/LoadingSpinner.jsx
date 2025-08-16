import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function LoadingSpinner() {
  const {dark} = useContext(ThemeContext);
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:'60vh'}}>
      <div className={` ${dark ? ` spinner-border text-light` : `spinner-border text-dark`   }`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
