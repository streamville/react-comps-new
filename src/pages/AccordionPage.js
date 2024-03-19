import Button from "../components/Button";
import Accordion from "../components/Accordion";
import { FaEnvelope, FaFileDownload, FaSyncAlt, FaCheese } from "react-icons/fa";


function AccordionPage() {
  const items = [
    {
      id: '72ghb23d',
      label: "First item",
      content: "First item content",
    },
    {
      id: 'dche653b',
      label: "Second item",
      content: "Second item content",
    },
    {
      id: '7db65fhd8',
      label: "Third item",
      content: "Third item content",
    },  
  ]
 return <Accordion items={items}/>
}

export default AccordionPage; 