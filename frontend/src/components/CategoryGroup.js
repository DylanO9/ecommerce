import React from 'react';

export default function CategoryGroup({ title, items }) {
    return (
      <div>
        <h3 className="font-bold text-green mb-2">{title}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="text-gray-700 hover:text-green cursor-pointer py-1 transition-colors">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
} 