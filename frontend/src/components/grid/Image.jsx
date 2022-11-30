import React, { useState } from "react";
import PropTypes from "prop-types";

function Image({ datas }) {
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(!flip);
  };
  return (
    <div className="w-52 h-52" on={handleClick}>
      {flip ? (
        <img className="w-52" src={datas.img} alt="" />
      ) : (
        <div className="bg-red-500 h-full" />
      )}
    </div>
  );
}

Image.propTypes = {
  datas: PropTypes.string.isRequired,
};

export default Image;
