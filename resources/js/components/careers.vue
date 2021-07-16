<template>
    <div>
        <div class="parallax parallax-home">
            <div class="container">
                <div class="top-landing-details">
                    <h2>Welcome to our Careers Page</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="careers-page">
                <h2 class="title">Welcome to our Careers Page</h2>
                <div class="no-career-wrapper">
                    <div class="no-career">
                        <div>
                            <div class="logo">
                                <img :src="image_src" alt="logo">
                            </div>
                            <div class="text-desc">
                                No open vaccancies at the moment.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "careers",
    data() {
        return {
            image_src: '/images/logos/logo.png',
        }
    }
}
</script>

<style scoped lang="css">
.parallax-home {
    background-image: url('/images/shk_general/Greenpark_SHK_Drone_3.jpg');
    height: 60vh;
}

</style>
