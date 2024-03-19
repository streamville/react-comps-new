import React from "react";
import Link from "./Link";


function Sidebar() {
  const links = [
    { path: "/", label: "Dropdown" },
    { path: "/accordion", label: "Accordion" },
    { path:"/modal", label: "Modal"},
    { path: "/table", label: "Table" },
  ];
  
  const renderedLinks = links.map((link) => {
    return (
    <Link 
      className="mb-3" 
      activeClassName="font-bold border-l-4 pl-2 border-blue-500"
      key={link.label} 
      to={link.path}
      >
        {link.label}
      </Link>
    )
  })

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks }
    </div>
  );
}

export default Sidebar;
