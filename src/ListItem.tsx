import React from "react";
import { useFetch } from "./hooks";
import { object } from "prop-types";
import history from './history';


function ListItem(obj: any) {
console.log('object :  ',obj.location.data.currency);
console.log('history : === ',history.location)
return (
    <>
    <h1>Commodity Item Details</h1>
        <ul>
          <li>{obj.location.data.currency}</li>
          <li>{obj.location.data.name}</li>
          <li>{obj.location.data.symbol}</li>
          <li>{obj.location.data.stockExchange}</li>
        </ul>

    </>
  );
}
export default ListItem;