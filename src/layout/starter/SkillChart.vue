<template>
  <card type="chart">
    <template slot="header">
      <h5 class="card-category">Main Skills</h5>
      <h3 class="card-title">
        <i class="tim-icons icon-delivery-fast text-info "></i>
      </h3>
    </template>
    <div class="chart-area">
      <bar-chart
        style="height: 100%"
        chart-id="blue-bar-chart"
        :chart-data="blueBarChart.chartData"
        :gradient-stops="blueBarChart.gradientStops"
        :extra-options="blueBarChart.extraOptions"
      >
      </bar-chart>
    </div>
  </card>
</template>

<script>
import BarChart from "@/components/Charts/BarChart";

export default {
  name: "weather-app",
  components: {
    BarChart
  },
  data() {
    return {
      blueBarChart: {
        extraOptions: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          responsive: true,
          tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          scales: {
            yAxes: [
              {
                gridLines: {
                  drawBorder: false,
                  color: "rgba(29,140,248,0.1)",
                  zeroLineColor: "transparent"
                },
                ticks: {
                  suggestedMin: 60,
                  suggestedMax: 100,
                  padding: 20,
                  fontColor: "#9e9e9e"
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  drawBorder: false,
                  color: "rgba(29,140,248,0.1)",
                  zeroLineColor: "transparent"
                },
                ticks: {
                  padding: 20,
                  fontColor: "#9e9e9e"
                }
              }
            ]
          }
        },
        chartData: {
          labels: [
            "Java",
            "JavaScript",
            "Spring Frameworks",
            "Vue.Js",
            "Bootstrap",
            "GitHub"
          ],
          datasets: [
            {
              label: "Countries",
              fill: true,
              borderColor: "#1f8ef1",
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [90, 85, 90, 85, 100, 80]
            }
          ]
        },
        gradientColors: [
          "rgba(29,140,248,0.2)",
          "rgba(29,140,248,0.0)",
          "rgba(29,140,248,0)"
        ],
        gradientStops: [1, 0.4, 0]
      }
    };
  }
};
</script>
