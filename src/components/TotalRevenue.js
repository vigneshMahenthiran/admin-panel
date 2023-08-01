import React, { useState } from "react";

const TotalRevenue = () => {
  const [revenue, setRevenue] = useState(90);

  const calculateStrokeDashoffset = () => {
    const circumference = 2 * Math.PI * 40;
    const offset = ((100 - revenue) / 100) * circumference;
    return offset;
  };

  return (
    <div className="bg-white rounded-lg p-4 flex items-center justify-center">
      <div className="w-1/2 h-32 relative">
        <svg className="w-full h-full" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="36" fill="#f2f2f2" />
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="#4299e1"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="226.195"
            strokeDashoffset={calculateStrokeDashoffset()}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="20"
            fill="#4299e1"
          >
            {revenue}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default TotalRevenue;
