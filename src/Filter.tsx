import React from "react";
import { useFetch } from "./hooks";
import { object } from "prop-types";
import history from './history';
import List from './List';


function Filter(obj: any) {
  
return (
    <>
    <h1>Filter Items</h1>
    <label>Choose a filter:</label>

    <select id="selectOptn" className="form-control sortingComp" onChange={() => obj.sortFun()}>
                <option disabled>Sort your list</option>
                    <option value="1">Name a-z</option>
                    <option value="2">Name z-a</option>
                </select>

    </>
  );
}
export default Filter;