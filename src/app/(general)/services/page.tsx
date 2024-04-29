import React from 'react';
import data from '@/utils/data.json'; 

const ServicesPage = () => {
  // Filtrar los servicios por las categorías deseadas
  const filteredServices = data.filter((service: any) => (
    service.category === 'services' && // Solo servicios
    ['Fast Shipping', 'Extended warranty', '24 Hour Attention'].includes(service.title) // Solo los títulos específicos
  ));

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mt-8 mb-4">Services</h1>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices && filteredServices.map((service: any, index: number) => (
          <li key={index} className="p-4 bg-gray-100 rounded-md">
            <strong className="block text-lg mb-2">{service.title}</strong>
            <img src={service.image} alt={service.title} className="h-40 w-full object-cover rounded-md" />
            <p className="text-gray-700">{service.description}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Hire</button>
          </li>
        ))}
      </ul>
      <br />
    </div>
  );
};

export default ServicesPage;
