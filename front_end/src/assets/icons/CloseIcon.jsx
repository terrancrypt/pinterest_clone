import React from "react";

const CloseIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        height={18}
        width={18}
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="img"
      >
        <path d="m15.18 12 7.16-7.16c.88-.88.88-2.3 0-3.18-.88-.88-2.3-.88-3.18 0L12 8.82 4.84 1.66c-.88-.88-2.3-.88-3.18 0-.88.88-.88 2.3 0 3.18L8.82 12l-7.16 7.16c-.88.88-.88 2.3 0 3.18.44.44 1.01.66 1.59.66.58 0 1.15-.22 1.59-.66L12 15.18l7.16 7.16c.44.44 1.01.66 1.59.66.58 0 1.15-.22 1.59-.66.88-.88.88-2.3 0-3.18L15.18 12z" />
      </svg>
      
    </div>
  )
};

export default CloseIcon;
