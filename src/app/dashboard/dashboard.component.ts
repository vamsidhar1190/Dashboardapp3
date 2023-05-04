import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexXAxis,
  ApexYAxis,
  ChartComponent,
  ApexTitleSubtitle,
  ApexFill,
  ApexMarkers,
  ApexTooltip,
  ApexNonAxisChartSeries
} from 'ng-apexcharts';
import { TreeNode } from 'primeng/api';
import { dataSeries } from './data-series';
import { DoctordataService } from '../doctordata.service';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
};



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  series1!: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart1!: ApexChart;
  dataLabels1!: ApexDataLabels;
  markers1!: ApexMarkers;
  title1!: ApexTitleSubtitle;
  fill1!: ApexFill;
  yaxis1!: ApexYAxis | ApexYAxis[];
  xaxis1!: ApexXAxis;
  tooltip1!: ApexTooltip;

  series2!: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart2!: ApexChart;
  dataLabels2!: ApexDataLabels;
  markers2!: ApexMarkers;
  title2!: ApexTitleSubtitle;
  fill2!: ApexFill;
  yaxis2!: ApexYAxis | ApexYAxis[];
  xaxis2!: ApexXAxis;
  tooltip2!: ApexTooltip;


  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  files!: TreeNode[];

  cols!: any[];

  events!: any[];

  Doctordata!: DoctordataService[];

  responsiveOptions!: any[];
  doctor!:any[];

  constructor(private doctordata: DoctordataService) { }

  
  ngOnInit(): void {
    this.charts();
    this.tabledata();
    this.columchart();
    this.columchart2();
    this.doctorsdata();
    

  }

  charts() {
    this.chartOptions = {
      series: [
        {
          name: "Cash Flow",
          data: [
            1.45,
            5.42,
            5.9,
            -0.42,
            -12.6,
            -18.1,
            -18.2,
            -14.16,
            -11.1,
            -6.09,
            0.34,
            3.88,
            13.07,
            5.8,
            2,
            7.37,
            8.1,
            13.57,
            15.75,
            17.1,
            19.8,
            -27.03,
            -54.4,
            -47.2,
            -43.3,
            -18.6,
            -48.6,
            -41.1,
            -39.6,
            -37.6,
            -29.4,
            -21.4,
            -2.4
          ]
        }
      ],
      chart: {
        type: "bar",
        height: 350,


      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: -100,
                to: -46,
                color: "#F15B46"
              },
              {
                from: -45,
                to: 0,
                color: "#FEB019"
              }
            ]
          },
          columnWidth: "80%"
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        title: {
          text: "Growth"
        },
        labels: {
          formatter: function (y) {
            return y.toFixed(0) + "%";
          }
        }
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2011-01-01",
          "2011-02-01",
          "2011-03-01",
          "2011-04-01",
          "2011-05-01",
          "2011-06-01",
          "2011-07-01",
          "2011-08-01",
          "2011-09-01",
          "2011-10-01",
          "2011-11-01",
          "2011-12-01",
          "2012-01-01",
          "2012-02-01",
          "2012-03-01",
          "2012-04-01",
          "2012-05-01",
          "2012-06-01",
          "2012-07-01",
          "2012-08-01",
          "2012-09-01",
          "2012-10-01",
          "2012-11-01",
          "2012-12-01",
          "2013-01-01",
          "2013-02-01",
          "2013-03-01",
          "2013-04-01",
          "2013-05-01",
          "2013-06-01",
          "2013-07-01",
          "2013-08-01",
          "2013-09-01"
        ],
        labels: {
          rotate: -90
        }
      }
    };
  }

  tabledata() {
    this.files = [];
    const images = ["https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
      "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
      "https://mirimstudent25.files.wordpress.com/2013/10/movietalk-despicableme630-jpg_002144.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/JPEG_example_down.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/JPEG_example_down.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"];

    for (let i = 0; i < 6; i++) {
      const node = {
        data: {
          image: images[i],
          patient: 'John kural ',
          department: 'Monte Carlo ',
          appointment: '11/03/2020',
          serial: '#dfsadfnk',
          amount: Math.floor(Math.random() * 1000) + 1 + 'Rs'
        },
        children: [
          {
            data: {
              customer: 'Status Update',
              product: Math.floor(Math.random() * 1000) + 1 + 'kb',
            }
          }
        ]
      };
      this.files.push(node);
    }

    this.cols = [
      { field: 'image' },
      { field: 'patient', header: 'Patient Name' },
      { field: 'department', header: 'Department' },
      { field: 'appointment', header: 'Appointment Date' },
      { field: 'serial', header: 'Serial Number' },
      { field: 'amount', header: 'Amount' }
    ];
  }
  columchart() {
    let ts2 = 1484418600000;
    let dates = [];
    for (let i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, dataSeries[1][i].value]);
    }

    this.series1 = [
      {
        name: "XYZ MOTORS",
        data: dates,
        color: "#8e44ad"
      }
    ];
    this.chart1 = {
      type: "area",
      stacked: false,
      height: 300,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    };
    this.dataLabels1 = {
      enabled: false
    };
    this.markers1 = {
      size: 0
    };
    this.title1 = {
      text: "Stock Price Movement",
      align: "left"
    };
    this.fill1 = {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    };
    this.yaxis1 = {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        }
      },
      title: {
        text: "Price"
      }
    };
    this.xaxis1 = {
      type: "datetime"
    };
    this.tooltip1 = {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        }
      }
    };
  }
  columchart2() {
    let ts2 = 1484418600000;
    let dates = [];
    for (let i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, dataSeries[1][i].value]);
    }

    this.series2 = [
      {
        name: "XYZ MOTORS",
        data: dates,
        color: "#2DAAB8"
      }
    ];
    this.chart2 = {
      type: "area",
      stacked: false,
      height: 300,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    };
    this.dataLabels2 = {
      enabled: false
    };
    this.markers2 = {
      size: 0
    };
    this.title2 = {
      text: "Stock Price Movement",
      align: "left"
    };
    this.fill2 = {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    };
    this.yaxis2 = {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        }
      },
      title: {
        text: "Price"
      }
    };
    this.xaxis2 = {
      type: "datetime"
    };
    this.tooltip2 = {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        }
      }
    };

  }

  doctorsdata() {
    this.doctordata.getProductsSmall().then((products) => {
      this.doctor = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

 
}













