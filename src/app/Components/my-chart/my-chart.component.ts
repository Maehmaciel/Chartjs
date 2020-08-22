import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})

//Site Com Exemplos https://www.chartjs.org/samples/latest/
export class MyChartComponent implements OnInit {

  constructor() { }

  // ngOnInit(): void {

  //   var myChart = new Chart("myChart", {
  //     type: 'pie',
  //     data: {
  //       labels: ['Red', 'Blue', 'Yellow', 'Green'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [25, 25, 25, 25],
  //         backgroundColor: [
  //           'rgba(255, 99, 132)',
  //           'rgba(54, 162, 235)',
  //           'rgba(255, 206, 86)',
  //           'rgba(75, 192, 192)',
  //         ],

  //       }]
  //     },

  //   });
  // }


  ngOnInit(): void {
    var gradient = null;
    var canvas = <HTMLCanvasElement>document.getElementById("myChart");
    var ctx = canvas.getContext("2d");
    gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#245ABF');
    gradient.addColorStop(1, '#FFFFFF00');
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Gree', 'kjskjsskls', 'skjskjjjks'],
        datasets: [
          { fill: 'start' }, {
            label: '# of Votes',
            data: [8500, 9700, 9600, 9700, 9000, 10500, 10000],
            backgroundColor: gradient,

          }]
      },
      options: {
        maintainAspectRatio: false,
        spanGaps: false,
        elements: {
          line: {
            tension: 0.000001
          }
        },

      }



    });
  }










}


