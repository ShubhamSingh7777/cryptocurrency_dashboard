import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useState, useEffect, useCallback } from 'react';
import { fetchData } from '../ReactReduxStore/ActionApiOfCoin';
import { useDispatch, useSelector } from 'react-redux';
function CurrencyDropdown({ onChildData2 }) {

  // bydefullt country currency symbol state is "INR"
  const [currency, setCurrency] = useState('bitcoin');

  //  onclike "symbolHandler" function start 
  const handleClick = useCallback((i) => {
    setCurrency(i);
    console.log(i);
    onChildData2(i);
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [fetchData]);


  // we use use useState for fetching data from redux store which is api1data as array 
  const data1 = useSelector((state) => state.api1Data);
  // console.log(data1.map((item) => item.name));
  const error = useSelector((state) => state.error);
  if (error) {
    return <div>Error: {error}</div>;
  }

  // inline style in react start 

  const buttonStyles = {
    backgroundColor: '#e6ecff', // Replace with your desired color
    borderColor: "black",
    color: 'black' // Replace with your desired text color
  };

  const dropdown = {
    width: "300px",
    height: "300px",
    overflow: 'auto',
    padding: "5px",
    fontSize: "12px",
  }


  // onclick function "currencyHandler" start 
  // const currencyHandler = (key) => {
  // console.log(key);
  // alert(key)
  // }

  return (
    <Dropdown>
      <Dropdown.Toggle style={buttonStyles} id="dropdown-basic">
        {currency}
      </Dropdown.Toggle>

      <Dropdown.Menu style={dropdown} >
        {
          data1.map((item, i) => (
            <Dropdown.Item key={i} onClick={() => handleClick(item.id)}>{item.id}</Dropdown.Item>
          ))
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CurrencyDropdown;
