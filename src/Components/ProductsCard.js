import React, { useState } from 'react';
import FullInfo from '../assets/ProductsFullInfo';

const ExpandedView = ({ category, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-h-full overflow-y-auto">
        <img 
          src={category.image} 
          alt={category.category} 
          className="w-full h-[380px] object-contain mb-4 rounded"
        />
        <h2 className="text-2xl font-bold mb-2 text-blue-600">
          {category.category}
        </h2>
        {category.info.map((infoPoint, infoIndex) => (
          <ul className="list-disc pl-4 mb-2 " key={infoIndex}>
            <li className="mb-1">{infoPoint}</li>
          </ul>
        ))}
        <button onClick={onClose} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
          Close
        </button>
      </div>
    </div>
  );
};

const MicroscopeList = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const closeExpandedView = () => {
    setExpandedIndex(null);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {FullInfo.map((category, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-full md:w-auto">
          <div 
            onClick={() => toggleAccordion(index)}
            className="cursor-pointer"
          >
            <img 
              src={category.image} 
              alt={category.category} 
              className="w-full h-[380px] object-contain mb-4 rounded"
            />
            <h2 className="text-2xl font-bold mb-2 text-blue-600">
              {category.category}
            </h2>
          </div>
          {expandedIndex === index && (
            <ExpandedView category={category} onClose={closeExpandedView} />
          )}
        </div>
      ))}
    </div>
  );
};

export default MicroscopeList;
