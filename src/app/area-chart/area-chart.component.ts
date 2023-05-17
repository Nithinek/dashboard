import { Component } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions= {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Yearly placement Evaluvation 2022-2023',
          align: 'center'
      },
      subtitle: {
          text:'Luminar technolab',
          align: 'center'
      },
      xAxis:{
        categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
      },
      yAxis: {
          title: {
              useHTML: true,
              text: 'Number of Placements'
          }
      },
     credits:{
        enabled:false
     },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      plotOptions: {
          
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'MEARN',
          data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214,16247,15763,16265]
      }, {
          name: 'PYTHON',
          data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039,5075,5045,5530]
  
      }, {
          name: 'TESTING',
          data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913,4915,4912,4875]
      }, {
          name: '.BIG DATA',
          data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550,2220,3810,3010]
  
      }, {
          name: '.NET',
          data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186,3725,2345,3075]
      }, {
        name: 'JAVA',
        data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039,5515,6750,5555]    
    },{
        name: 'FLUTTER',
        data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039,5070,5630,6810]    
    }]
  }
  HC_exporting(Highcharts);
  }
  
}
