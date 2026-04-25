import React from 'react'
import style from '../skill/skill.module.css'

const Skill = () => {
  return (
    <div className={style.container} id="skills">
      <div className={style.banner}>
        <div
          className={style.slider}
          style={{ "--quantity": 8 }}
        >

          <div className={style.item} style={{ "--position": 1 }}>
            <img src="https://beecrowd.com/wp-content/uploads/2024/04/2022-08-18-GitHub.jpg" />
          </div>

          <div className={style.item} style={{ "--position": 2 }}>
            <img src="https://destatic.blob.core.windows.net/images/git-logo.png" alt="picture 4" />
          </div>

          <div className={style.item} style={{ "--position": 3 }}>
            <img src="https://www.applivery.com/wp-content/uploads/2024/07/Figma-macos-app-1.png" alt="picture 5" />
          </div>

          <div className={style.item} style={{ "--position": 4 }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbwI6_Kr4kKDxH5UN_yc9p0AJqmdFx7tqQA&s " alt="picture 6" />
          </div>

          <div className={style.item} style={{ "--position": 5 }}>
            <img src="https://static.vecteezy.com/system/resources/previews/067/565/433/non_2x/tailwind-css-logo-rounded-free-png.png" alt="picture 7" />
          </div>

          <div className={style.item} style={{ "--position": 6 }}>
            <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="picture 8" />
          </div>

          <div className={style.item} style={{ "--position": 7 }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="picture 9" />
          </div>

          <div className={style.item} style={{ "--position": 8 }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="picture 10" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skill