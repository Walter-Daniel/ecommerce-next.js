'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const NavbarSection = () => {
  const navList = ['HOME', 'CATEGORIES', 'MEN', 'WOMEN', 'HOT OFFERS'];
  const categories = ['dress', 'footwear', 'accessories', 'shirt'];

  const categoriesRef = useRef(null); // Referencia al menú de categorías

  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);

  // Handler de click para mostrar/ocultar el menú de categorías
  const handleCategoriesClick = () => {
    setShowCategoriesMenu(!showCategoriesMenu);
  };

  // Handler de click en cualquier parte de la pagina
  const handleClickOutside = (event) => {
    if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
      setShowCategoriesMenu(false); // para cerrar el menu de categorias si se hace clic fuera de él
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Navbar shouldHideOnScroll className='justify-center'>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navList.map((navItem, index) => (
          <NavbarItem key={index}>
            {navItem === 'CATEGORIES' ? (
              
              <div className="relative" ref={categoriesRef}>
                <Link color="foreground" className="navbar__link relative" onClick={handleCategoriesClick}>
                  {navItem}
                </Link>

                {/* Menú desplegable de categorías */}

                {showCategoriesMenu && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md">
                    {categories.map((cate) => (
                      <li className="py-2 px-4">
                        <Link href={`/products/${cate}`} color="foreground" className="navbar__link relative">
                          {cate.charAt(0).toUpperCase() + cate.slice(1)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
    
              <Link color="foreground" href={`/products/${navItem.toLowerCase()}`} className='navbar__link relative'>
                {navItem}
              </Link>
              
            )}
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarSection;
