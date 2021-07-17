<template>
    <div class="container">
        <h2 class="text-center mb-5 tx-pri">Dashboard</h2>
        <p>
            <span class="greetings">Good Afternoon Cetric!</span><br>
            Get a glimpse of whats happening here today.
        </p>
        <div class="top-bar">
            <div class="item-card voter">
                <div>
                    <p>9M</p>
                    <p>Registered Voters</p>
                </div>
            </div>
            <div class="item-card incidents">
                <div>
                    <p>498k</p>
                    <p>Reported Incidents</p>
                </div>
            </div>
            <div class="item-card surveys">
                <div>
                    <p>50M</p>
                    <p>Conducted Surveys</p>
                </div>
            </div>
        </div>
        <div>
            <div class="p-grid">
                <div class="p-col-12 p-md-6 p-lg-6">
                    <div class="chart">
                        <h3 class="title">Registered Voters</h3>
                        <Voter :height="300"/>
                    </div>
                </div>
                <div class="p-col-12 p-md-6 p-lg-6">
                    <div class="chart">
                        <h3 class="title">Surveys Conducted</h3>
                        <Surveys :height="300"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Voter from './charts/voters'
import Surveys from './charts/surveys'

export default {
    components: {
        Voter, Surveys
    },
    name: "home",
}
</script>

<style scoped lang="sass">
.greetings
    font-size: 20px
    font-weight: 600
.voter
    background-image: linear-gradient(to right top, #d16ba5, #bd77be, #a184d1, #7f90dc, #579adf, #3ea5e3, #21b0e4, #00bae2, #06cbe9, #25dbed, #42ebf0, #5ffbf1)

.incidents
    background-image: linear-gradient(to right top, #090005, #170610, #200b16, #290e1b, #340f20, #461529, #5a1b32, #6e2139, #912f46, #b43f50, #d85059, #fb645f)

.surveys
    background-image: linear-gradient(to right top, #6b7d72, #708c80, #739c8f, #75aca1, #76bcb5, #74b1a2, #73a691, #729b80, #6a7356, #574d3c, #392e28, #171313)
</style>
