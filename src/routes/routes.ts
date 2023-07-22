import { LazyExoticComponent, lazy } from 'react';
import { NoLazy } from '../01-lazy-load/pages/NoLazy';



type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazy-load/layout/LazyLayout'))



export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]