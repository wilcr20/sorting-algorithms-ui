import { Component } from '@angular/core';

import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsCoreOption } from 'echarts/core';
import { LineChart } from 'echarts/charts'

echarts.use([BarChart, GridComponent, CanvasRenderer, LineChart]);

@Component({
  selector: 'app-bubble-sort',
  imports: [NgxEchartsDirective],
  templateUrl: './bubble-sort.html',
  styleUrl: './bubble-sort.scss',
  providers: [provideEchartsCore({ echarts })],
})
export class BubbleSort {
  chartOption: EChartsCoreOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [1, 3, 5, 8, 11, 12, 15],
        type: 'bar',
      },
    ],
  };
}
