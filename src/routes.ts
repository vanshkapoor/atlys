import {Home} from "./pages/home.tsx"
import {Login} from "./pages/login.tsx"

export const routes = {
    "home": {
        route: "/",
        component: Home
    },
    "login": {
        route: "/login",
        component: Login,
    },
}