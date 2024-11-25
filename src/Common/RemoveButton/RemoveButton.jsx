import React from 'react';

const RemoveButton = ({ removeButtonContent, removeButtonClick }) => {
  return (
    <>
      <button
        onClick={removeButtonClick}
        className="py-2 px-5 bg-red-700 text-white font-semibold active:scale-[1.1] rounded-lg"
      >
        {removeButtonContent}
      </button>
    </>
  );
};

export default RemoveButton;
