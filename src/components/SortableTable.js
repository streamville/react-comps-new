import Table from "./Table";
import { useState } from 'react';


function SortableTable (props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { data, config } = props;

  
  const handleClick = (column) => {
    if(sortOrder === null){
      setSortOrder('asc');
    } else if (sortOrder === 'asc'){
      setSortOrder('desc');
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
      return {
        ...column,
        header: () => <th onClick={() => handleClick(column.label)}>{column.label} this is sortable </th>
      }
    });

  // return (
    // <table>
    //   <thead>
    //     <tr>
    //       {columns.map((column, index) => (
    //         <th key={index} onClick={() => onSort(column)}>
    //           {column} {sortColumn === column && <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>}
    //         </th>
    //       ))}
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((row, index) => (
    //       <tr key={index}>
    //         {columns.map((column, index) => (
    //           <td key={index}>{row[column]}</td>
    //         ))}
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
//   )

// only sort if there is a sort order && sortBy is not null
// Make copy of the 'data' prop
// Find the correct sortValue function and use it for sorting

  let sortedData = data;

  if(sortOrder && sortBy){

    const { sortValue } = config.find((column) => column.label === sortBy);
      sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string'){
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    }
    );
  }


return <div>
  {sortOrder} - {sortBy}
  <Table {...props} data={sortedData} config={updatedConfig} />
  </div>
  }

export default SortableTable;