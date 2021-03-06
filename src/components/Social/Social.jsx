import React from "react";
import "./Social.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
export const Social = () => {
  const icons = [
    {
      id: 1,
      icon: <AiFillGithub />,
      socialLink: "https://github.com/MonikaJhingan",
    },
    {
      id: 2,
      icon: <AiFillLinkedin />,
      socialLink: "https://www.linkedin.com/in/monika-jhingan-949502201/",
    },
    {
      id: 3,
      icon: <AiFillTwitterCircle />,
      socialLink: "https://twitter.com/Monika_mpys",
    },
  ];

  return (
    <div className="social">
      <p className="social-heading text-sm text-center">Connect On -</p>
      <ul className="social-icons">
        {icons.map(({ id, icon, socialLink }) => {
          return (
            <div key={id}>
              <li className="social-icon text-m">
                
                <a href={socialLink} className='icon-color'>{icon}</a>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};