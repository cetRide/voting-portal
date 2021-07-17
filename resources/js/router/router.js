import {createRouter, createWebHistory} from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes = [
    {
        path: "/",
        name: "home",
        component: import("../components/home"),
        meta: {
            title: "Voter Edu | Home",
        },
    },
    {
        path: "/voting-simulation",
        name: "vote",
        component: () => import("../components/voting/voting-mock-up"),
        meta: {
            title: "Voter Edu | Cast Vote",
        },
    },
    {
        path: "/view-stations-pins",
        name: "polling stations",
        component: () => import("../components/voting/poling-pins"),
        meta: {
            title: "Voter Edu | Polling Stations",
        },
    },
    {
        path: "/events",
        name: "events",
        component: () => import("../components/events/calendar"),
        meta: {
            title: "Voter Edu | Events",
        },
    },
    {
        path: "/information-center",
        name: "information center",
        component: () => import("../components/voting/voter-info-center"),
        meta: {
            title: "Voter Edu | Events",
        },
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
