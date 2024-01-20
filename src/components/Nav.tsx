import logo from '../assets/logo.png';

const Nav = () => {
  return (
    <div className="navbar bg-primary text-primary-content z-10 fixed w-full h-[10vh]">
      <div className="navbar-start">

        <img src={logo} className="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Explorar</a></li>
          <li>
            <details>
              <summary>Registrame</summary>
              <ul className="p-2 text-primary">
                <li><a>Cliente</a></li>
                <li><a>Proveedor de servicio</a></li>
              </ul>
            </details>
          </li>
          <li><a>Contáctenos</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="px-6 py-2 text-gray-100 rounded bg-gradient-to-r from-secondary to-gray-900">Entrar</button>
      </div>
    </div>
  )
}

export default Nav