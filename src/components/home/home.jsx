import React from "react";

const Main = () => {
  return (
    <div className="font-sans">
      <section id="bosh">
        <img src="" alt="mainimage" className="w-[100%] h-[60vh]"/>
      </section>
      <section id="about" className="flex relative bg-gray-200" src="https://via.placeholder.com/1500x500">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-50">
          <h1 className="text-3xl font-bold">О компании</h1>
          <p className="mt-4 max-w-2xl">
            Консалтинговая компания предоставляет услуги в области управленческого консалтинга,
            маркетинга, исследований и бизнес-обучения.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Наши ценности</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded shadow-md">
              <h2 className="font-semibold absolute hidden">Миссия</h2>
              <p className="text-sm">Описание миссии компании.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-md">
              <h2 className="font-semibold">Видение</h2>
              <p className="text-sm">Описание видения компании.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-md">
              <h2 className="font-semibold">Ценности</h2>
              <p className="text-sm">Описание ценностей компании.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded shadow-md">
              <h2 className="font-semibold">Консалтинг</h2>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow-md">
              <h2 className="font-semibold">Бизнес обучение</h2>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow-md">
              <h2 className="font-semibold">Исследование</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Наши подходы к работе</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded shadow-md">
              <h2 className="font-semibold">Фокус на проекте</h2>
            </div>
            <div className="p-4 bg-white rounded shadow-md">
              <h2 className="font-semibold">Четкое планирование</h2>
            </div>
            <div className="p-4 bg-white rounded shadow-md">
              <h2 className="font-semibold">Внимание к деталям</h2>
            </div>
            <div className="p-4 bg-white rounded shadow-md">
              <h2 className="font-semibold">Эффективность</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Наши Партнеры</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Partner 1"
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h2 className="font-semibold mt-4">Михаил Иванов</h2>
              <p className="text-sm">Управляющий партнер</p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Partner 2"
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h2 className="font-semibold mt-4">Фарид Ахмедов</h2>
              <p className="text-sm">Старший партнер</p>
            </div>
            <div className="p-6 bg-gray-50 rounded shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Partner 3"
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h2 className="font-semibold mt-4">Шакур Калинов</h2>
              <p className="text-sm">Партнер</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
