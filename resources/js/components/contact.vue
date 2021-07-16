<template>
    <div>
        <div class="parallax parallax-home">
            <div class="container">
                <div class="top-landing-details">
                    <h2>Contact Us</h2>
                </div>
            </div>
        </div>
        <div class="">
            <div class="cont-one container">
                <div class="details">
                    <h3>CONTACT DETAILS</h3>
                    <div class="chunk">
                        <p>Greenpark Estate, Athiriver <br>
                            P.O Box 12345-00100, Nairobi, Kenya</p>
                    </div>
                    <div class="chunk">
                        <p><span class="title">Sales</span><br>
                            <a href="mailto:sales@superiorhomes.co.ke">Email: sales@superiorhomes.co.ke</a><br>
                            <a href="tel: +254 713 888 333">Mobile: +254 713 888 333</a><br>
                            <a href="tel: +254 713 888 333">Whatsapp: +254 713 888 333</a><br></p>
                    </div>
                    <div class="chunk">
                        <p><span class="title">General Inquiries</span><br>
                            <a href="mailto:info@superiorhomes.co.ke">Email: info@superiorhomes.co.ke</a><br>
                            <a href="tel: +254 724 253 258">Mobile: +254 724 253 258</a><br>
                            <a href="tel: +254 724 253 258">Whatsapp: +254 724 253 258</a><br></p>
                    </div>
                </div>
                <div class="cont-form-wrapper">
                    <div class="form-title">
                        <div>
                            <img :src="logo" alt="Superior homes logo">
                        </div>
                        <div>
                            <h2>Send us an Inquiry</h2>
                        </div>
                    </div>
                    <div class="form-container">
                        <div class="p-grid properties-cont">
                            <div class="p-col-12 p-2 p-md-6 p-lg-6">
                                <div>
                                    <input type="text" required placeholder="First Name">
                                </div>
                            </div>
                            <div class="p-col-12 p-2 p-md-6 p-lg-6">
                                <div>
                                    <input type="text" required placeholder="Last Name">
                                </div>
                            </div>
                            <div class="p-col-12 p-2 p-md-6 p-lg-6">
                                <div>
                                    <input type="text" required placeholder="Email Address">
                                </div>
                            </div>
                            <div class="p-col-12 p-2 p-md-6 p-lg-6">
                                <div>
                                    <input type="text" required placeholder="Phone number">
                                </div>
                            </div>
                        </div>
                        <div>
                            <textarea name="message" id="" cols="100"></textarea>
                        </div>
                        <button style="margin-top: 20px" class="shk-btns">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
            <div id="map"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "contact",
    data() {
        return {
            logo: '/images/logos/logo_1.png',
        };
    },
    mounted() {
        this.initMap()
    },
    methods: {
        initMap() {
            const uluru = {lat: -1.462344, lng: 37.012593};
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: uluru,
            });
            const marker = new google.maps.Marker({
                position: uluru,
                map: map,
            });

        }
    }
}
</script>

<style scoped lang="css">
#map {
    height: 400px;
    width: 100%;
}
.parallax-home {
    background-image: url('/images/shk_general/Greenpark_SHK_Drone_3.jpg');
    height: 70vh;
}
</style>
