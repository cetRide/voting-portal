import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'
export default defineComponent({
    name: 'MonthlyChart',
    extends: Bar,
    mounted () {
        // Overwriting base render method with actual data.
        this.renderChart({
            labels: ['Before voting', 'During voting', 'After voting'],
            datasets: [
                {
                    label: 'Surveys Conducted -(in 000)',
                    backgroundColor: '#f87979',
                    data: [2030, 234, 12]
                }
            ]
        })
    }
})
