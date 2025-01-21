// Visual progress indicator component
import React from 'react';

const ProgressBar = ({ total, completed }) => {
    // Calculate completion percentage
  const percentage = Math.round((completed / total) * 100);
  
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
      <div 
        className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;