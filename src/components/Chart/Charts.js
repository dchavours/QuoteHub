import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../redux/auth/reducers';
import { Redirect } from 'react-router-dom';



export class Charts extends Component{
  state = {
    showSomething: ''
  }
   

  render() {
    const { isAuthenticated } = this.props

    if (isAuthenticated === false) {
      return <Redirect to="/charts" />;
    }

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
      
      

    return (
      <div>
        <h2>Line Example</h2>
        <Line data={data} />
        <p>Paragraph</p>
      </div>
    );
  }
};


const mapStateToProps = state => ({

  isAuthenticated: isAuthenticated(state)
});




export default connect(
mapStateToProps,
null)(Charts);

