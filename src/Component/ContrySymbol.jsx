import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchData } from '../RecatReduxStore/ActionApiOne';
import LoadingComponent2 from './LoadingComponent2'
import { fetchApi2Data } from '../ReactReduxStore/ActionApiOfCurrency';
// import { fetchApi3Data } from '../RecatReduxStore/ActionApiThree';
function ContrySymbol({ onChildData }) {

  // bydefullt country currency symbol state is "INR"
  const [currencyName, setCurrencyName] = useState('INR');

  //  onclike "symbolHandler" function start 
  const handleClick = useCallback((item) => {
    setCurrencyName(item);
    // console.log(item);
    onChildData(item);
  }, []);


  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchData());
    dispatch(fetchApi2Data());
    // dispatch(fetchApi3Data());
  }, [fetchApi2Data]);


  // const data1 = useSelector((state) => state.api1Data);
  const data2 = useSelector((state) => state.api2Data);
  // const data3 = useSelector((state) => state.api3Data);
  const error = useSelector((state) => state.error);
  if (error) {
    return <div>Error: {error}</div>;
  }

  // console.log(data2.map((item)=>item));

  // inline css start 
  const buttonStyles = {
    backgroundColor: '#e6ecff', // Replace with your desired color
    borderColor: "black",
    color: 'black' // Replace with your desired text color
  };
  const dropdown = {
    width: "150px",
    height: "250px",
    overflow: 'auto',
    padding: "5px",
    fontSize: "15px",
  }
  const dropdownitem = {
    fontSize: "14px",
    fontWeight: "700px"
  }
  return (
    <Dropdown>
      <Dropdown.Toggle style={buttonStyles} id="dropdown-basic">
        {currencyName || 'Select an option'}
      </Dropdown.Toggle>
      <Dropdown.Menu style={dropdown} >
        {
          data2.map((item, i) => (
            <Dropdown.Item style={dropdownitem} key={i} onClick={() => handleClick(item)}>{item}</Dropdown.Item>
          ))
        }
        {/* <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ContrySymbol;
