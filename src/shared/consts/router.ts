
export enum AppRoutes {
    MAIN = 'main',
    BASKET = 'basket',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.BASKET]: '/basket',
    [AppRoutes.NOT_FOUND]: '*',
};
