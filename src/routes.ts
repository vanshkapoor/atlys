import {Home} from "./pages/home.tsx"
import {Login} from "./pages/login.tsx"
import { Route } from "./types/commonTypes.ts"

export const routes: Route = {
    "home": {
        route: "/home",
        component: Home
    },
    "login": {
        route: "/login",
        component: Login,
    },
}