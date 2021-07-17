import { defineComponent } from 'vue'
import { Doughnut } from 'vue3-chart-v2'
export default defineComponent({
    name: 'MonthlyChart',
    extends: Doughnut,
    mounted () {
        this.renderChart({
            labels: ['Under 35yrs','Above 35yrs','Special Voters'],
            datasets: [
                {
                    data: [6050357, 3456785, 102305],
                    backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],
                    hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
                }
            ]
        })
    }
})
