import React from 'react';

export default function Loading({ shown }) {
  if (!shown) return null;

  return (
    <div className="loading">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="50">
        <path d="M40 72A32 32 0 018 40 32 32 0 0140 8a32 32 0 0132 32c0 1.1-.9 2-2 2s-2-.9-2-2c0-15.4-12.6-28-28-28S12 24.6 12 40s12.6 28 28 28c1.1 0 2 .9 2 2s-.9 2-2 2z">
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="0.9s" repeatCount="indefinite"/>
        </path>
      </svg>
    </div>
  );
}
