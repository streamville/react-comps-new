import { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import Panel from "./Panel";


function Dropdown({ options, value, onChange}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const divEl = useRef();


  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current){
        return;
      }
      
      if (!divEl.current.contains(event.target)){
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    }
  }, []);


  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {

    return (
      <div onClick={() => handleOptionClick(option)} key={option.value} className="p-3 cursor-pointer hover:bg-gray-100">
        {option.label}
      </div>
    );
  });

  // OLD CODE
  // let content = 'Select...';
  // if (selection) {
  //   content = selection.label;
  // }


  // value?.label: This is using optional chaining (?.). It's a way to attempt to access label property of value without having to check if value is null or undefined first. If value is null or undefined, this expression will return undefined rather than throwing an error.
  return (
    <div ref={divEl} className="w-48 relative">
     <Panel 
      onClick={handleClick} 
      className=" flex justify-between items-center "
      >
      {value?.label || 'Select...'}
      <FaAngleDown />
     </Panel>
     {isOpen && <Panel className="absolute top-full ">{renderedOptions}</Panel> }
   </div>

  );
}

export default Dropdown;