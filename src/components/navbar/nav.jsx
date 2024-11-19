import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-xl font-bold">Логотип</div>
          <nav className="flex space-x-6">
            <a href="#about" className="hover:text-red-600">
              О компании
            </a>
            <a href="#services" className="hover:text-red-600">
              Услуги
            </a>
            <a href="#approach" className="hover:text-red-600">
              Наши подходы
            </a>
            <a href="#partners" className="hover:text-red-600">
              Партнеры
            </a>
          </nav>
          <div className="flex space-x-2">
            <span className="cursor-pointer">RU</span>|
            <span className="cursor-pointer">EN</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
