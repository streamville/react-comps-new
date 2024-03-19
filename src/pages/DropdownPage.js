import Dropdown from "../components/Dropdown";
import { useState } from "react";


function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    {
      label: "The color Red",
      value: "red",
    },
    {
      label: "The color Green",
      value: "green",
    },
    {
      label: "The color Blue",
      value: "blue",
    },
  ];

  return (
    <div className="flex">
      <Dropdown 
        options={options}
        value={selection} 
        onChange={handleSelect}
      />
      <Dropdown 
        options={options}
        value={selection} 
        onChange={handleSelect}
      />
    </div>
  );}

export default DropdownPage; 