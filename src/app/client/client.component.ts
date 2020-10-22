import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartTooltipModel } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

    @ViewChild('canvas', { static: false }) canvas: ElementRef;

    showHeader = true;
    contactExpanded = false;
    eventsExpanded = false;
    docsExpanded = false;
    activityOpened = true;
    showFollowUp = false;
    tooltipTop = '';
    tooltipLeft = '';
    tooltipOpacity = 0;

    lineChartData: ChartDataSets[] = [
        {
            data: [113, 108, 112, 110, 107, 105],
            label: 'Medición registrada',
            lineTension: 0
        },
        {
            data: [112, 108, 104, 100, 96, 92],
            label: 'Objetivo',
            lineTension: 0,
            borderDash: [5, 5]
        }
    ];

    lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

    lineChartOptions: ChartOptions = {
        responsive: true,
        scales: {
            yAxes: [
                {
                    id: 'y-axis-0',
                    position: 'left',
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        min: 60,
                        fontFamily: '"Maven Pro", sans-serif',
                        fontSize: 14,
                        fontColor: '#797D90',
                        fontStyle: '500'
                    }
                }
            ],
            xAxes: [
                {
                    id: 'x-axis-0',
                    position: 'bottom',
                    gridLines: {
                        offsetGridLines: true,
                        drawBorder: false,
                    },
                    ticks: {
                        fontFamily: '"Maven Pro", sans-serif',
                        fontSize: 14,
                        fontColor: '#797D90',
                        fontStyle: '500'
                        //labelOffset: 110
                    },
                    type: 'category'
                }
            ]
        },
        tooltips: {
            enabled: false,
            mode: 'index',
            intersect: false,
            position: 'nearest',
            custom: (tooltipModel: ChartTooltipModel) => {

                if (tooltipModel.opacity === 0) {
                    this.tooltipOpacity = 0;
                    return;
                }
                this.tooltipOpacity = 1;
                this.tooltipLeft = tooltipModel.caretX - 54 + 'px';
                this.tooltipTop = tooltipModel.caretY + 8 + 'px';
            }
        },
        hover: {
            intersect: false,
            mode: 'index'
        },
        legend: {
            display: true,
            position: 'bottom',
            align: 'start',
            labels: {
                boxWidth: 12,
                fontSize: 14,
                fontColor: '#797D90',
                fontFamily: '"Maven Pro", sans-serif',
                usePointStyle: true
            }
        }
    };

    lineChartColors: Color[] = [
        {
            borderColor: '#5678F2',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#5678F2',
            pointRadius: 8,
            pointBorderWidth: 4,
            //pointHoverBorderColor: 'rgba(86, 120, 242, 0.16)',
            pointHoverBackgroundColor: ' #ffffff',
            pointHoverRadius: 8,
            pointHoverBorderWidth: 4
        },
        {
            borderColor: 'rgba(117, 82, 218, 0.59)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            pointRadius: 0,
            borderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 4
        },
    ];

    lineChartLegend = true;
    lineChartPlugins = [];
    lineChartType = 'line';

    constructor() { }

    ngOnInit() {
    }

    //@HostListener('window:scroll', ['$event'])
    checkScroll(e: any) {
        this.showHeader = e.target.scrollTop <= 180;
    }


}
