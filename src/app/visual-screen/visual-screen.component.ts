import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
import { partition } from 'rxjs';
import { Properties } from '../properties';

@Component({
  selector: 'app-visual-screen',
  templateUrl: './visual-screen.component.html',
  styleUrls: ['./visual-screen.component.css'],
})
export class VisualScreenComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor() {}

  ngOnInit(): void {}
  index: number = 0;
  colorPropertiesList: string[][] = [];
  valuesPropertiesList: number[][] = [];
  values: number[] = [
    78,
    45,
    55,
    43,
    84,
    60,
    50,
    45,
    55,
    43,
    84,
    60,
    50,
    45,
    55,
    43,
    84,
    60,
    13,
  ];
  colors: string[] = [
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
  ];
  values1: any[] = [
    78,
    45,
    55,
    43,
    84,
    60,
    50,
    45,
    55,
    43,
    84,
    60,
    50,
    45,
    55,
    43,
    84,
    60,
    13,
  ];
  colors1: any[] = [
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
  ];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    animation: {
      duration: 0.1,
      easing: 'linear',
    },
    scales: {
      yAxes: [
        {
          display: false,
        },
      ],
    },
  };
  public barChartLabels: number[] = this.values1;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: this.values1, label: 'Data', backgroundColor: this.colors1 },
  ];

  setproperties(colors: string[], values: number[]) {
    let mycolors: string[] = [];
    let myvalues: number[] = [];
    for (let l = 0; l < values.length; l++) {
      mycolors[l] = colors[l];
      myvalues[l] = values[l];
    }

    this.colorPropertiesList.push(mycolors);
    this.valuesPropertiesList.push(myvalues);
  }
  bubbleSort() {
    console.log('inside bubble sort' + this.values);
    for (let i = 0; i < this.values.length; i++) {
      for (let j = 0; j < this.values.length - 1 - i; j++) {
        this.colors[j] = 'green';
        this.colors[j + 1] = 'yellow';
        this.setproperties(this.colors, this.values);

        if (this.values[j] > this.values[j + 1]) {
          let swap = this.values[j];
          this.values[j] = this.values[j + 1];
          this.values[j + 1] = swap;
          let swapcolor = this.colors[j];
          this.colors[j] = this.colors[j + 1];
          this.colors[j + 1] = swapcolor;
          this.setproperties(this.colors, this.values);
          this.colors[j] = 'blue';
        } else {
          this.colors[j] = 'blue';
          this.colors[j + 1] = 'blue';
          this.setproperties(this.colors, this.values);
        }
      }

      this.colors[this.values.length - i - 1] = 'purple';
      this.setproperties(this.colors, this.values);
    }
    this.setproperties(this.colors1, this.values);
    this.visualeffects();
  }
  selectionSort() {
    // One by one move boundary of unsorted subarray
    for (let i = 0; i < this.colors.length; i++) {
      // Find the minimum element in unsorted array
      let min_idx = i;
      this.colors[i] = 'green';
      for (let j = i + 1; j < this.colors.length; j++) {
        this.colors[j] = 'yellow';
        this.setproperties(this.colors, this.values);
        if (this.values[j] < this.values[min_idx]) {
          this.colors[min_idx] = 'blue';
          min_idx = j;
          this.colors[j] = 'green';
          this.setproperties(this.colors, this.values);
        } else {
          this.colors[j] = 'blue';
          this.setproperties(this.colors, this.values);
        }
      }
      // Swap the found minimum element with the first
      // element
      let valuetemp = this.values[min_idx];
      this.values[min_idx] = this.values[i];
      this.values[i] = valuetemp;
      let colortemp = this.colors[min_idx];
      this.colors[min_idx] = this.colors[i];
      this.colors[i] = colortemp;
      this.setproperties(this.colors, this.values);
      this.colors[i] = 'purple';
      this.setproperties(this.colors, this.values);
    }
    this.visualeffects();
  }

  callquickSort() {
    console.log(this.values);
    this.quickSort(0, this.values.length - 1);
    console.log(this.values);
    this.visualeffects();
  }
  quickSort(start: number, end: number) {
    if (start < end) {
      let piviot: number = this.Partition(start, end);
      this.quickSort(start, piviot - 1);
      this.quickSort(piviot + 1, end);
    }
  }
  Partition(start: number, end: number) {
    let piviot1 = end;
    let pIndex = start;
    for (let i = start; i < end - 1; i++) {
      if (this.values[i] > this.values[piviot1]) {
        pIndex++;
        let temp = this.values[i];
        this.values[i] = this.values[pIndex];
        this.values[pIndex] = temp;
      }
    }
    let temp = this.values[pIndex];
    this.values[pIndex] = this.values[piviot1];
    this.values[piviot1] = temp;

    return piviot1;
  }
  visualeffects() {
    for (let i = 0; i < this.colorPropertiesList.length; i++) {
      setTimeout(() => {
        this.barChartData = [
          {
            data: this.valuesPropertiesList[i],
            label: 'Data',
            backgroundColor: this.colorPropertiesList[i],
          },
        ];
        this.barChartLabels = this.valuesPropertiesList[i];
        this.chart.update();
      }, 50 * i);
    }
  }
}
