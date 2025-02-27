import { RouteProps } from "react-router-dom";
import { AppRoutes, RoutePath } from "../../../../shared/consts/router";
import { BasketPageAsync as BasketPage } from "../../../../pages/BasketPage/ui/BasketPageAsync";
import { MainPageAsync as MainPage } from "../../../../pages/MainPage/ui/MainPageAsync";
import { NotFoundPageAsync as NotFoundPage } from "../../../../pages/NotFoundPage/ui/NotFoundPageAsync";


export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.BASKET]: {
        path: RoutePath.basket,
        element: <BasketPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
