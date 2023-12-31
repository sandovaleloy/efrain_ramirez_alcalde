import React, { useState } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [btnMenu, setBtnMenu] = useState(false);

  const toggleMenu = () => {
    setBtnMenu(!btnMenu);
  };

  const close = () => {
    setBtnMenu(!btnMenu)
  }

  return (
    <nav className="container_navbar">
        <h2 className="title_app">ANDRES FERNANDEZ</h2>
      <div onClick={toggleMenu} className="">
        {btnMenu ? <i className="menu bx bx-menu"></i> : <i className="menu bx bx-menu-alt-right"></i>}
      </div>
      <div className={`navbar_link ${btnMenu ? "active" : ""}`}>
        <a onClick={close} href="#AboutMe" className="link_a">
          Sobre Mi
        </a>
        <a onClick={close} href="#main" className="link_a">
          Campaña
        </a>
        <a onClick={close} href="#redes" className="link_a">
          Contacto
        </a>
      </div>
      <div className="image_logo">
        <div className="div_image">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHAD-8MESQf2Tw3fJAe23AbhgkhrAIkK9ZIsd0oFEJZ7kDAjYK6pRcU8yo-kz6LCfybfemIVM3WwBRwZO0EWMvqTo1X9eaU0YAST0SbK89JMmCxQjRdDiaByjjmkN9mVJ7Bo9LiGMe46KYNoTQlesDf6bD2UOgr_uv-D4SYgQjAoo4qU8Dw1dLa0fR3SXI/s1011/358142942_3462436464018158_379246244436407719_n.jpg" alt="" />
          {/* <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOa1B8AC1kXUzVz-9n0jgCwQzAjISkcPo7nyQL5EfSDjmE4odeJqfYllnGfwncvN-SfLmyyl1TYGp2Qgv6xYWDQsMea3Dm5BINrxOnImB_kvC9ioTCErxbPwtiaoiY_KB2HNSt6Ttwqlxr956o_9_6vWk4xMJK0m6gdTCHp_XYEPgrwhWnjpFZAlLcUg/s1024/WhatsApp%20Image%202023-06-08%20at%206.35.26%20PM%20(1).jpeg"
            alt=""
          /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
