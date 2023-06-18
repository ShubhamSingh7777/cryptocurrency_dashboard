import React from 'react';
import { useState ,useCallback} from 'react';
import { Dropdown } from 'react-bootstrap';
function ChartDropdown({onChildDataOfChart}) {

  const [chartType, setChartType] = useState('line');
  
const ArrayChart=["bar","line"];
  //  onclike "symbolHandler" function start 
  const handleClick = useCallback((item) => {
    setChartType(item);
    //  console.log(item);
    onChildDataOfChart(item);
  }, [chartType]);
  const buttonStyles = {
    backgroundColor: '#e6ecff', // Replace with your desired color
    borderColor: "black",
    color: 'black' // Replace with your desired text color
  };



  return (
    <Dropdown>
      <Dropdown.Toggle style={buttonStyles} id="dropdown-basic" >
       {chartType}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          ArrayChart.map((item,i)=>(
            <Dropdown.Item key={i} onClick={() => handleClick(item)}>{item}</Dropdown.Item>
          ))
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ChartDropdown;
