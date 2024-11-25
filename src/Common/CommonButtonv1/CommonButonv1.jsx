import React from 'react';

const CommonButonv1 = ({ CommonButonv1conten, commonButton_click }) => {
  return (
    <div>
      <button
        onClick={commonButton_click}
        className="py-2 px-5 bg-red-700 text-white font-semibold active:scale-[1.1] rounded-lg"
      >
        {CommonButonv1conten}
      </button>
    </div>
  );
};

export default CommonButonv1;
