export type RouteObject = {
    route: string,
    component: React.FC
}

export type Route = {
    [key: string]: RouteObject
}