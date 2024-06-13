import {Link} from '@inertiajs/react';

export default function SidebarMenu({menu, rol, number_tasks_unassigned, number_tasks_process}) {

    let currentRoute = route().current();

    return (
        <div>
            <nav className="sidebar-nav scroll-sidebar" data-simplebar>
                <ul id="sidebarnav">
                    {/*Category*/}
                    <li className="nav-small-cap">
                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                        <span className="hide-menu">Dashboards</span>
                    </li>

                    <li className="sidebar-item">
                        <Link className="sidebar-link" href={"#"} aria-expanded="false">
                            <span>
                                <i className="ti ti-dashboard"></i>
                            </span>
                            <span className="hide-menu">General</span>
                        </Link>
                    </li>


                    {/*Category*/}
                    <li className="nav-small-cap">
                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                        <span className="hide-menu">Modulos</span>
                    </li>

                    <li className="sidebar-item">
                        <Link className="sidebar-link" href={route('clientes.index')} aria-expanded="false">
                            <span>
                                <i className="ti ti-users"></i>
                            </span>
                            <span className="hide-menu">Clientes</span>
                        </Link>
                    </li>

                    <li className="sidebar-item">
                        <Link
                            className={'sidebar-link has-arrow'} aria-expanded="false">
                                <span className="d-flex">
                                    <i className="ti ti-clipboard-text"></i>
                                </span>
                            <span className="hide-menu">Solicitudes</span>
                        </Link>
                        <ul aria-expanded="false" className={'collapse first-level'}>
                            <li className="sidebar-item">
                                <Link href={route('evaluaciones.create')} className={'sidebar-link'}>
                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                        <i className="ti ti-circle"></i>
                                    </div>
                                    <span className="hide-menu">Nueva</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link href={route('evaluaciones.index')} className={'sidebar-link'}>
                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                        <i className="ti ti-circle"></i>
                                    </div>
                                    <span className="hide-menu">Lista</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    
                    <li className="sidebar-item">
                        <Link
                            className={'sidebar-link has-arrow'} aria-expanded="false">
                                <span className="d-flex">
                                    <i className="ti ti-car"></i>
                                </span>
                            <span className="hide-menu">Vehículos</span>
                        </Link>
                        <ul aria-expanded="false" className={'collapse first-level'}>
                            <li className="sidebar-item">
                                <Link href={route('marcas.index')} className={'sidebar-link'}>
                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                        <i className="ti ti-circle"></i>
                                    </div>
                                    <span className="hide-menu">Marcas</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link href={route('modelos.index')} className={'sidebar-link'}>
                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                        <i className="ti ti-circle"></i>
                                    </div>
                                    <span className="hide-menu">Modelos</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link href={route('versiones.index')} className={'sidebar-link'}>
                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                        <i className="ti ti-circle"></i>
                                    </div>
                                    <span className="hide-menu">Versiones</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    
                    <li className="sidebar-item">
                        <Link
                            className={(currentRoute === 'empresas.index') ? 'sidebar-link has-arrow  active' : 'sidebar-link has-arrow'} aria-expanded="false">
                                <span className="d-flex">
                                    <i className="ti ti-settings"></i>
                                </span>
                            <span className="hide-menu">Configuración</span>
                        </Link>
                        <ul aria-expanded="false" className={'collapse first-level'}>
                            <li className="sidebar-item">
                                <a href="#" className="sidebar-link">
                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                        <i className="ti ti-circle"></i>
                                    </div>
                                    <span className="hide-menu">Perfil</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <Link href={route('usuarios.index')}
                                      className={'sidebar-link'}>
                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                        <i className="ti ti-circle"></i>
                                    </div>
                                    <span className="hide-menu">Usuarios</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link href={route('empresas.index')}
                                      className={'sidebar-link'}>
                                    <div className="round-16 d-flex align-items-center justify-content-center">
                                        <i className="ti ti-circle"></i>
                                    </div>
                                    <span className="hide-menu">Empresas</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                </ul>
            </nav>
        </div>
    );
}
