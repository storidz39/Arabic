
import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#D9534F] text-white text-center py-2 font-bold flex items-center justify-center gap-2">
      <span>عرض خاص لفترة محدودة مع شحن مجاني</span>
      <span className="bg-blue-800 text-white px-2 py-1 rounded-md text-sm">50%</span>
    </div>
  );
};

export default TopBar;
