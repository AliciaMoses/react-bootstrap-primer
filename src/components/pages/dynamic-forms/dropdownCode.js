const dropdownCode = `
// Import React and the necessary hooks
import React, { useState } from 'react';

// Import the necessary components 
import { Form, DropdownButton, Dropdown } from 'react-bootstrap';

// Define a component that includes a dropdown form
const DropdownForm = () => {

    // Use the useState hook to manage the selected option

    // 'Select One' is set as the default value
    const [selectedOption, setSelectedOption] = useState('Select One'); 
  
    // Use the onSelect prop of DropdownButton to update the selected option
  
    const handleSelect = (eventKey) => {
      setSelectedOption(eventKey);
    };
`;
export default dropdownCode;
