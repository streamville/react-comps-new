const data = [
  {
    name: "tomato",
    cost: 2,
    weight: 7
  },
  {
    name: "avocado",
    cost: 3,
    weight: 5
  },
  {
    name: "grapes",
    cost: 8,
    weight: 12
  },

];

function getSortValue(vegetable){
  return vegetable.cost;
}

const sortOrder = 'asc';


// sorting function for data above
data.sort((a, b) => {
  const valueA = getSortValue(a);
  const valueB = getSortValue(b);

  const sorOrder === 'asc' ? 1 : -1;

  if (typeof valueA === 'string'){
    return valueA.localeCompare(valueB) * reverseOrder;
  } else {
    return (valueA - valueB) * reverseOrder;
  }
});

