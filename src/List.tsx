import React, {useState, useEffect} from "react";
import { useFetch } from "./hooks";
import ListItem from "./ListItem";
import history from './history';
import Filter from './Filter';
import { object, any, array } from "prop-types";

function List() {
  let [data] = useFetch(
    "https://financialmodelingprep.com/api/v3/symbol/available-commodities"
  );

  //Search
  const [searchTerm, setSearchTerm] = React.useState("");
  let [results, setResults] = React.useState([] as any);
  let [sortedArr, setSortedArr] = React.useState([] as any);
  let isSorted = false;
  
  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
      const serchResult = data.filter(obj =>
      obj.currency.includes(searchTerm)
    );
    setResults(serchResult);
  }, [searchTerm]);
  
//Filter

function sortList() {
  sortedArr = data.sort(compare);
  isSorted = true;
  setSortedArr(sortedArr); 
}

function compare(a, b) {
  const bandA = a.name.toUpperCase();
  const bandB = b.name.toUpperCase();
  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}

  const myListItem = (obj: any) => {
    const path = {
      pathname: `/ListItem`,
      data: obj
    };
    
    history.push(path);
    
    
  };

  return (
    <>
     <input
          type='text'
          value={searchTerm}
          onChange={handleChange}
          required
        />
        <Filter data ={data} sortFun={() => sortList()}/>
  
      <h1>List Items</h1>
        <ul>
        {results.length!= 0 && results.map(( obj, i ) => ( 
            <li onClick={() => myListItem(obj)} key={i}>{obj.name}</li>
          ))}

          {!isSorted && !results.length && data && data.map(( obj, i ) => ( 
            <li onClick={() => myListItem(obj)} key={i}>{obj.name}</li>
          ))}


          {isSorted && sortedArr && sortedArr.map(( obj, i ) => ( 
            <li onClick={() => myListItem(obj)} key={i}>{obj.name}</li>
          ))}
        </ul>

    </>
  );
}
export default List;
