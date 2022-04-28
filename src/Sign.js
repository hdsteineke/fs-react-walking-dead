import React from 'react';

export default function Sign({ sign }) {
  return (
    <div>
      <h1>Center for Disease Control</h1>
      {sign ? 'We are open!' : 'Nope!'}
    </div>
  );
}
