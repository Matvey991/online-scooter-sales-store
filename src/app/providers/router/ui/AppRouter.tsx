import { memo, ReactNode, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";
import { PageLoader } from "../../../../shared/ui/PageLoader/PageLoader";

export interface AppRouterProps {
    key?: string;
    path?: string;
    elemnt?: ReactNode;
}

export const AppRouter = memo(() =>
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <div className="page-wrapper">
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    </div>
                )}
            />
        ))}
    </Routes>
)
