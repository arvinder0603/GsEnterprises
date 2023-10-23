import React from 'react';
import FullInfo from '../assets/ProductsFullInfo'; // Assuming FullInfo is in the same directory

const MicroscopeList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {FullInfo.map((category, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
          <img 
            src={category.image} 
            alt={category.category} 
            className="w-full  h-[380px] mb-4 rounded"
          />
          <h2 className="text-2xl font-bold mb-2 text-blue-600">
            {category.category}
          </h2>
          {category.subcategories.map((subcategory, subIndex) => (
            <div key={subIndex} className="mb-4">
              <h3 className="text-xl font-semibold mb-2">
             
              </h3>
              <ul className="list-disc pl-4 mb-2">
                {Object.keys(subcategory).map((section, sectionIndex) => (
                  <li key={sectionIndex} className="mb-1">
                    <strong>{section.replace('_', ' ')}:</strong> {subcategory[section].description}
                  </li>
                ))}
              </ul>
              <div>
                <strong>Accessories:</strong>
                <ul className="list-disc pl-4">
                  {subcategory.accessories.map((accessory, accessoryIndex) => (
                    <li key={accessoryIndex} className="mb-1">{accessory}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MicroscopeList;
