import {createRouter, createWebHistory} from "vue-router";
import Home from "../components/home";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            title: "Superior Homes Kenya | Home",
            metaTags: [
                {
                    name: "description",
                    content: "The Home page of superior homes website.",
                },
                {
                    property: "og:description",
                    content: "The Home page of superior homes website.",
                },
            ],
        },
    },
    {
        path: "/contact-us",
        name: "contact",
        component: () => import("../components/contact"),
        meta: {
            title: "Superior Homes Kenya | Contact Us",
            metaTags: [
                {
                    name: "description",
                    content: "The Contact us page of superior homes website.",
                },
                {
                    property: "og:description",
                    content: "The Contact us page of superior homes website.",
                },
            ],
        },
    },
    {
        path: "/careers",
        name: "careers",
        component: () => import("../components/careers"),
        meta: {
            title: "Superior Homes Kenya | Careers",
            metaTags: [
                {
                    name: "description",
                    content: "The Careers page of superior homes website.",
                },
                {
                    property: "og:description",
                    content: "The Careers page of superior homes website.",
                },
            ],
        },
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../components/about"),
        meta: {
            title: "Superior Homes Kenya | About us",
            metaTags: [
                {
                    name: "description",
                    content: "The Home page of superior homes website.",
                },
                {
                    property: "og:description",
                    content: "The Home page of superior homes website.",
                },
            ],
        },
    },
    {
        path: "/gallery",
        name: "gallery",
        component: () => import("../components/gallery/index"),
        meta: {
            title: "Superior Homes Kenya | Gallery",
            metaTags: [
                {
                    name: "description",
                    content: "The Gallery page of superior homes website.",
                },
                {
                    property: "og:description",
                    content: "The Gallery page of superior homes website.",
                },
            ],
        },
        // children: [
        //     {
        //         path: "/dashboard",
        //         name: "Home",
        //         component: () => import("../components/home/index"),
        //         meta: {
        //             title: "Tanda | Home",
        //             metaTags: [
        //                 {
        //                     name: "description",
        //                     content: "The Dashboard of Tanda Africa card issuing dashboard.",
        //                 },
        //                 {
        //                     property: "og:description",
        //                     content: "The Dashboard of Tanda Africa card issuing dashboard.",
        //                 },
        //             ],
        //         },
        //
        //     },
        // ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.title);
    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags);
    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title;
    }
    Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
        (el) => el.parentNode.removeChild(el)
    );
    if (!nearestWithMeta) return next();
    nearestWithMeta.meta.metaTags
        .map((tagDef) => {
            const tag = document.createElement("meta");

            Object.keys(tagDef).forEach((key) => {
                tag.setAttribute(key, tagDef[key]);
            });
            tag.setAttribute("data-vue-router-controlled", "");
            return tag;
        })
        .forEach((tag) => document.head.appendChild(tag));
    next();
});

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start();
    }
    next();
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
    NProgress.done();
});

export default router;
