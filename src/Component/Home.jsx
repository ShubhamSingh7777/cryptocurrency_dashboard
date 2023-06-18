import React from 'react'
import '../styles/home.css';
import SearchBar from './SearchBar';
import ContrySymbol from './ContrySymbol';
import Currency from './CurrencyDropdown';
// import LoadingComponent from './LoadingComponent';
import ChartDropdown from './ChartDropdwon'
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchApi2Data } from '../ReactReduxStore/ActionApiOfCurrency';
import { fetchApi3Data } from '../ReactReduxStore/ActionApiForChart';
import { fetchApiData4 } from '../ReactReduxStore/ActionApiOfMarketCap';
import { Line, Bar, Pie } from 'react-chartjs-2';
import TrendingCoin from './TrendingCoin';
import Chart from 'chart.js/auto';
import ChartDataLabels from "chartjs-plugin-datalabels";
import { chartDays } from '../ReactReduxStore/dayData';
import { fetchApiData5 } from '../ReactReduxStore/ActionApiTrendingCoin';
import Exchange from './Exchange';

const Home = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState("bitcoin")
  const [currency, setCurrency] = useState("INR")
  const [chart, setChart] = useState("line")
  const [day, setDay] = useState(1);

  // recive data from child component as function who send the data of "symbol"
  const handleClick1 = useCallback((symbol) => {
    setCurrency(symbol)
  }, []);
  // recive data from child component as function who send the data of "id"
  const handleClick2 = useCallback((key) => {
    setName(key)
  }, []);

  // recive data from child component as function who send the data of "chart type"
  const handleClickForChart = useCallback((ChartType) => {
    // console.log(ChartType)
    setChart(ChartType)
  }, []);


  useEffect(() => {
    // console.log(currency)
    dispatch(fetchApiData4());
    dispatch(fetchApiData5());
    dispatch(fetchApi3Data({ name, currency, day }));
  }, [dispatch, name, currency]);


  const data3 = useSelector((state) => state.api3Data);
  const data4 = useSelector((state) => state.api4Data);
  const data5 = useSelector((state) => state.api5Data);
  const error = useSelector((state) => state.error);

  if (error) {
    return <div>Error: {error}</div>;
  }
  //console.log(data5);
  // code of chart {Graph} start 

  const chartData = {
    labels: data3.prices && data3.prices.map((item) => {
      let date = new Date(item[0]);
      let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`;
      return day === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        data: data3.prices && data3.prices.map((item) => item[1]),
        label: `Price (Past ${day} Days) in ${currency}`,
        borderColor: '#195693',
        borderWidth: 2,
        pointBackgroundColor: 'white',
        pointBorderWidth: 1,
      },
    ],
  };

  const renderChart = () => {
    switch (chart) {
      case 'bar':
        return <Bar data={chartData} />;
      case 'line':
        return <Line data={chartData} />;
      default:
        return null;
    }
  };

  // Extract the required data for the chart
  const labels = data4?.slice(0, 3).map((coin) => coin.name);
  //  console.log(labels)
  const data = data4?.slice(0, 3).map((coin) => coin.total_volume);
  //  console.log(data)

  // Calculate the total volume sum
  const totalVolumeSum = data.reduce((acc, value) => acc + value, 0);

  // Calculate the percentages
  const percentages = data.map((value) => ((value / totalVolumeSum) * 100).toFixed(2));

  // Create the labels with percentages
  const labelsWithPercentages = labels.map((label, index) => `${label} (${percentages[index]}%)`);

  // Define the chart configuration
  const pie = {
    labels: labelsWithPercentages,
    datasets: [
      {
        data: data,
        backgroundColor: [
          'rgb(236, 107, 86)',
          'rgb(255, 193, 84)',
          'rgb(71, 179, 156)',
          // Add more colors if needed
        ],
        borderWidth: 1,
        borderColor: 'rgb(255, 255, 255)',
      },
    ],
  };
  //chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
    },
    plugins: {
      legend: {
        position: "right",
        align: "center",
        display: true,
        padding: 10,
        labels: {
          color: "rgb(67, 67, 177)",

          font: {
            size: 10,
          },
        },
      },
      datalabels: {
        display: true,
        color: "rgb(255, 255, 255)",
        align: "center",
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = "$" + ((value * 1000) / sum).toFixed(2);
          return percentage;
        },

        labels: {
          title: {
            font: {
              weight: "bold",
              size: 12,
            },
          },
        },
      },
    },
  };

  return (
    <>
      {/* html part of home page design start with help of css grid */}
      <div className='main_body'>
        <div className='inner_main_body'>
          {/* left body part */}
          <div className='left_body'>
            <div className='left_upper_part'>
              {/* currency_symbol_dropdown html part */}
              <div className='currency_symbol_dropdown'><ContrySymbol onChildData={handleClick1} /></div>
              <div className='search_bar'> <SearchBar /></div>
            </div>
            <div className='left_middle_part_graph'>
              {/* currency , chart_option ,days_box divion part start */}
              <div className='days_currency_chart_boxes_part'>
                <div className='days'>
                  <ul>
                    {
                      chartDays.map((item) => (
                        <li key={item.value} onClick={() => setDay(item.value)} >{item.label}</li>
                      ))
                    }
                  </ul>
                </div>
                <div className='currency_chart_combined_part'>
                  <div className='currency'><Currency onChildData2={handleClick2} /></div>
                  <div className='chart'><ChartDropdown onChildDataOfChart={handleClickForChart} /></div>
                </div>
              </div>
              {/* main chart box showing from this line  */}
              <div className='main_chart_box' >
                {/* <LoadingComponent/> */}
                {/* 
                <Line data={chartData} /> */}
                {
                  renderChart()
                };
              </div>
            </div>
            {/* left bottum div start where two div are equal divided */}
            <div className='left_bottum_part'>
              <div className='left_bottum_left_box'>
                <div className='upper_part_of_pie'>portfolio </div>
                <div className='pie_chart'>
                  <Pie data={pie} options={options} plugins={[ChartDataLabels]} />
                </div>
              </div>
              <div className='left_bottum_right_box'><Exchange /></div>
            </div>
          </div>
          {/* right body part */}
          <div className='right_body'>
            {/* right body part start where top crypto currency are showing  */}
            <div className='right_body_content_start'>
              <h4 className='trending_coin'>Cryptocurrency by Market Cap</h4>
              {/* <h3>Lorem ipsum dolor sit, amet consectetur </h3> */}
              <div className='content_showing_hear'> {data5 && data5.map((coin) => <TrendingCoin key={coin.id} coin={coin} />)} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home




