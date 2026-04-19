import { useState, useEffect } from 'react';
import style from "../navbar/navbar.module.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id); // update active when section is visible
          }
        });
      },
      {
        threshold: 0.5, // 10% of section must be visible to trigger
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.toLowerCase());
      if (section) observer.observe(section);
    });

    // cleanup on unmount
    return () => observer.disconnect();
  }, []);




  const handleClick = (item) => {
    setActiveItem(item.toLowerCase());
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={style.navy}>
      <div className={style.dNavbar}>
        <h3 className={style.logo}>Sharjeel Ahmed</h3>
        <ul className={style.navItem}>
          {navItems.map((item) => (
            <li
              key={item}
              className={activeItem === item.toLowerCase() ? style.active : ''}
              onClick={() => handleClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;