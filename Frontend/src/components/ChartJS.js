// import React from 'react';
// import CanvasJSReact from './canvasjs.react';
// import Categories from './Categories';
// import apiClient from '../services/api';

// //var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// class ChartJS extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			data: [],
//              dps : []


// 		};


// 	}
// 	getCats = () => {
// 		apiClient.get('sanctum/csrf-cookie').then(() => apiClient.get('/api/chartData')
// 			.then(response => {
// 				const data = response.data;
// 				this.setState({ data });
// 			})
// 			.catch(error => console.error(error)
// 			))
// 	}

// 	componentDidMount = (props) => {
//         this.getCats();
//         this.parseDataPoints();
//      }

//       parseDataPoints=()=> {
//         for (let i = 0; i < this.state.data.length; i++)
//           this.state.dps.push({
//             indexLabel: this.state.data.map((data1) => { return data1.category[i] }),
//             y: this.state.data.map((data1) => { return data1.total[i] }) 
//           });
//       };



// 	render() {
// 		// const dataCat = this.state.data.map((data2) => { return data2.category }) 
//         // const dataTot = this.state.data.map((data2) => { return data2.total }) 

//         console.log(this.state.dps);
// 		// this.options.data[0].set("dataPoints", dataCat);
// 		const options = {
// 			animationEnabled: true,
// 			data: [{
// 				type: "pie",
// 				dataPoints: this.state.dps,
// 			}]




// 		}

// 		return (
// 			<div>
// 				<CanvasJSChart options={options}/>
// 			</div>
// 		);
// 	}
// }

// export default ChartJS;

import React from 'react';


import { Pie } from 'react-chartjs-2';


function PieChartComponent(props) {




    const dataCat = props.dataParentToChild.map((data2) => { return data2.category })
    const dataTot = props.dataParentToChild.map((data2) => { return data2.total })




    return (

        <Pie
            data={{
                labels: dataCat,
                datasets: [{
                    label: 'Expenses',
                    data: dataTot,
                    backgroundColor: [
                        'rgb(120,28,129)',
                        'rgb(64,67,153)',
                        'rgb(72,139,194)',
                        'rgb(107,178,140)',
                        'rgb(159,190,87)',
                        'rgb(210,179,63)',
                        'rgb(231,126,49)',
                        'rgb(217,33,32)'
                    ],
                    // borderColor: [
                    //     'rgba(255, 99, 132, 1)',
                    //     'rgba(54, 162, 235, 1)',
                    //     'rgba(255, 206, 86, 1)',
                    //     'rgba(75, 192, 192, 1)',
                    //     'rgba(153, 102, 255, 1)',
                    //     'rgba(255, 159, 64, 1)'
                    // ],
                    // borderWidth: 1
                }]
            }}
        />
    )

}
export default PieChartComponent;