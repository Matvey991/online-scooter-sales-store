import { ReactNode, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../routerConfig/routerConfig";

export interface AppRouterProps {
  key?: string;
  path?: string;
  elemnt?: ReactNode;
}

export const AppRouter = () =>
  <Routes>
{Object.values(routeConfig).map(({ element, path }) => (
    <Route
        key={path}
        path={path}
        element={(
            <div className="page-wrapper">
                <Suspense fallback={<p>Loader...</p>}>
                    {element}
                </Suspense>
            </div>
        )}
    />
))}
</Routes>

