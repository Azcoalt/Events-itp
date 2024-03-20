import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black flex flex-col md:flex-row justify-between items-center px-4 py-2">

      <div className='w-full flex justify-between'>
        <img className="w-16 p-2" src="https://www.puebla.tecnm.mx/wp-content/themes/tecnm/images/logo-tec-p.svg" alt="" />
        <div className="text-white flex items-center gap-6 text-3xl cursor-pointer md:hidden" onClick={toggleMenu}>
          <ion-icon name={menuOpen ? 'close' : 'menu'}></ion-icon>
        </div>
      </div>
      
      <div className={`md:flex md:items-center ${menuOpen ? 'block' : 'hidden'} md:ml-auto md:mb-0 mb-4`}>
        <ul className="flex flex-col md:flex-row md:items-center md:gap-[1vw] gap-4 md:space-x-4 md:space-y-0">
          <li>
            <button className="text-white px-4 py-2 rounded-full font-sans hover:bg-indigo-950">
              <NavLink to="/registro">REGISTRARSE</NavLink>
            </button>
          </li>
          <li>
            <button className="w-[max-content] bg-blue-600 text-white px-4 py-2 rounded-full font-sans hover:bg-indigo-950">
              <NavLink to="/login">INICIAR SESIÓN</NavLink>
            </button>
          </li>
        </ul>
      </div>

    </nav>
  );
};


