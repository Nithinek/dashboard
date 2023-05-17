import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Average Student Admission 2023',
        align: 'center'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Course',
        colorByPoint: true,
        data: [{
            name: 'MEARN',
            y: 30.67,
            sliced: true,
            selected: true
        }, {
            name: 'PYTHON',
            y: 24.77
        },  {
            name: 'BIG DATA',
            y: 14.86
        }, {
            name: '.NET',
            y: 21.63
        }, {
            name: 'JAVA',
            y: 18.53
        },  {
            name: 'TESTING',
            y: 19.40
        }, {
            name: 'PHP',
            y: 0.84
        }, {
            name: 'FLUTTER',
            y: 10.51
        }, {
            name: 'SECURITY',
            y: 10.6
        }]
    }],
    credits:{
        enabled:false
     },

    }
  }
}
