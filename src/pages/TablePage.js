import SortableTable from "../components/SortableTable";


function TablePage() {
  const data= [
    {
      color: 'bg-violet-800' ,
      name: "Dennie Nguyen",
      role: "CEO",
    },
    {
      color: 'bg-blue-500',
      name: "Carlos Rodriguez",
      role: "Safety Officer",
    },
    {
      color: 'bg-green-500',
      name: "Sarah Chang",
      role: "Social Advisor",
    },
    {
      color: 'bg-yellow-500',
      name: "Marcus Smith",
      role: "Customer Service",
    },
  ];

  const config = [
    {
      label: "Color Code",
      render: (row) => <div className={` rounded p-3 m-2 ${row.color}`}></div>,
    },
    {
      label: "Name",
      render: (row) => row.name,
      sortValue: (row) => row.name,
    },
    {
      label: "Role",
      render: (row) => row.role,
      sortValue: (row) => row.role,
    },
    {
      label: "Permission",
      render: (row) => row.permission,
      sortValue: (row) => row.permission,
    },
  ]

  const keyFn = (row) => {
    return row.name;
  }

  return <SortableTable data={data} config={config} keyFn={keyFn} />;
}

export default TablePage;