import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';
import logo from '../assets/react.svg';



export const Navigation = () => {

    return (

        <Suspense fallback={ <span>Loading...</span>}>

            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />

                        <ul>
                            {
                                routes.map(({ to, name }) => {
                                    return (
                                        <li key={to}>
                                            <NavLink
                                                to={to}
                                                className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                                {name}
                                            </NavLink>
                                        </li>

                                    )
                                })
                            }


                            {/* 
                        <li>
                            <NavLink to="/lazy1" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={({ isActive }) => isActive ? 'nav-active' : ''} >Lazy 3</NavLink>
                        </li>
                        */}

                        </ul>
                    </nav>


                    <Routes>

                        {
                            routes.map(({ path, Component }) => {
                                return (
                                    <Route
                                        key={path}
                                        path={path}
                                        element={<Component />}
                                    />
                                )
                            })
                        }

                        {/* <Route path='lazy1' element={ <LazyPage1 />} />
                    <Route path='lazy2' element={<LazyPage2 />} />
                    <Route path='lazy3' element={<LazyPage3 />} />
                    */}

                        <Route path='/*' element={<Navigate to={routes[0].to} replace />} />

                    </Routes>


                </div>
            </BrowserRouter>
        </Suspense>
    )
}
