import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:'60vh'}}>
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
