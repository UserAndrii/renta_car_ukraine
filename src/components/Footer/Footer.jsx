import React from 'react';
import { FaLinkedin, FaGithub, FaTelegram, FaInstagram } from 'react-icons/fa';
import {
  FooterContainer,
  IconLink,
  Copyright,
  IconList,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <IconList>
          <li>
            <IconLink
              href="https://www.linkedin.com/in/andrii-hadar/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </IconLink>
          </li>
          <li>
            <IconLink href="https://github.com/UserAndrii" target="_blank">
              <FaGithub size={30} />
            </IconLink>
          </li>
          <li>
            <IconLink href="https://t.me/andrii_hadar" target="_blank">
              <FaTelegram size={30} />
            </IconLink>
          </li>
          <li>
            <IconLink
              href="https://www.instagram.com/gadarandre/"
              target="_blank"
            >
              <FaInstagram size={30} />
            </IconLink>
          </li>
        </IconList>

        <div>
          <Copyright>&copy; 2023 | Created by Andrii Hadar.</Copyright>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
