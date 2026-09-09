import React from 'react';

const PagePlaceholder = ({ title }) => {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '120px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1 className="font-display" style={{ fontSize: '48px' }}>{title}</h1>
    </div>
  );
};

export default PagePlaceholder;
