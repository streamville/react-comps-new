import { useState } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";


function Accordion({ items }) {
const [expandIndex, setExpandIndex] = useState(-1);

const handleClick= (nextIndex) => {
  if (nextIndex === expandIndex){
    setExpandIndex(-1)
  } else {
  setExpandIndex(nextIndex);
};
}

  const renderedItems = items.map((item, index) => {
  const isExpanded = index === expandIndex;

  const icon = <span className="text-xl">
    {isExpanded ? <FaAngleDown /> : <FaAngleLeft />}
  </span>

    return (
      <div key={item.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
          {item.label}
          {icon}
          </div>
        {isExpanded && 
      <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });


  return <div className="border-x border-t rounded">{renderedItems}</div>;
}


export default Accordion;

