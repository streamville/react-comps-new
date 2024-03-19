import Routes from "./components/Routes";
import Sidebar from "./components/sidebar";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";



function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
     <Sidebar />
      <div className="col-span-5">
        <Routes path="/accordion">    
          <AccordionPage />
        </Routes>
        <Routes path="/">
          <DropdownPage />
        </Routes>
        <Routes path="/modal">
          <ModalPage />
        </Routes>

        <Routes path="/table">
          <TablePage />
        </Routes>
      </div>
    </div>
  );
}

export default App; 