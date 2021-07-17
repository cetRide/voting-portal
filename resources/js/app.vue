<template>
    <div>
        <div class="bg-shadow">
            <div class="second-nav container">
                <div class="left-items">
                    <div class="item menu-bar" @click="visible = true">
                        <i class="pi pi-bars"></i>
                    </div>
                    <div class="item">
                        Voter-Edu
                    </div>
                </div>
                <div class="right-items">
                    <router-link to="/">
                        <div class="item">
                            <i class="pi pi-home"></i>
                        </div>
                    </router-link>
                    <div class="item">Me
                    </div>
                </div>
            </div>
        </div>
        <div class="main-container p-card">
            <router-view></router-view>
        </div>
        <div class="footer">
            <div style="text-align: center;">
                Copyright &#169; {{ year }} Voter Education
            </div>
        </div>
        <Sidebar v-model:visible="visible">
            <div class="font-weight-bold text-center">
                Voter-Edu
            </div>
            <hr>
            <div class="menu-contents">
                <router-link to="/">
                    <div class="menu-item">
                        <div>
                            <i class="pi pi-compass"></i>
                        </div>
                        <div>
                            Dashboard
                        </div>
                    </div>
                </router-link>
                <div class="menu-item">
                    <Accordion class="accordion-custom">
                        <AccordionTab>
                            <template #header>
                                <i class="pi pi-check-square"></i>
                                <span>Voting</span>
                            </template>
                            <p class="link"><router-link to="/view-stations-pins">View Stations</router-link></p>
                            <p class="link"><router-link to="/voting-simulation">Cast Vote</router-link></p>
                            <p class="link"><router-link to="/information-center">Voter Information Center</router-link></p>
                        </AccordionTab>
                    </Accordion>
                </div>
                <router-link to="/events">
                <div class="menu-item">
                    <div>
                        <i class="pi pi-calendar"></i>
                    </div>
                    <div>
                        Events
                    </div>
                </div>
                </router-link>
            </div>
        </Sidebar>
    </div>
</template>
<script>
import Sidebar from 'primevue/sidebar';
import AccordionTab from "primevue/accordiontab";
import Accordion from "primevue/accordion";
export default {
    name: "app",
    components: {
        Sidebar,Accordion, AccordionTab
    },
    data() {
        return {
            visible: false
        };
    },
}
</script>
<style lang="sass">
.link
    margin-top: 10px
#app
    font-family: 'Montserrat', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50

#nprogress
    .bar
        background: #2196f3 !important
        height: 6px

    .spinner-icon
        border: none !important

.product-item
    .product-item-content
        border: 1px solid var(--surface-d)
        border-radius: 3px
        margin: .3rem
        text-align: center
        padding: 0.5rem 0

    .product-image
        cursor: pointer
        width: 70%
        height: 150px
        object-fit: contain
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)

.accordion-custom
    i, span
        vertical-align: middle
    span
        margin: 0 .5rem
.p-accordion p
    line-height: 1.5
    margin: 0
</style>

