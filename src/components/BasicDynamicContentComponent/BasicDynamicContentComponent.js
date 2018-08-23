import React from 'react';

const BasicDynamicContentComponent = () => {
  return(
    <div>
      <h3>This is a basic functional component with dynamic content</h3>
      <p>In order to run code within jsx content, curly braces should be used.</p>
      <p>Within this paragraphy, a random number is generated and displayed: Number: {Math.floor(Math.random() * 30)}</p>
    </div>
  );
}

export default BasicDynamicContentComponent;
