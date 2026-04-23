import React from 'react'
import style from "../wellcome/welcome.module.css";

const Welcome = () => {
  return (
    <div className={style.banner}>
      <div className={style.title}>
        <style>
          {`
            @font-face {
              font-family: 'GingerbreadHouse;
              src: url('./fonts/GingerbreadHouse.ttf');
            }
          `}
        </style>

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <text
            x="50%"
            y="60%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="GingerbreadHouse, sans-serif"
            fill="white"
            fontSize="32"
          >
            Welcome to Sharjeel's Portfolio
          </text>
        </svg>
      </div>
    </div>
  )
}

export default Welcome
