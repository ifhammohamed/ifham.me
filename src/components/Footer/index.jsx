import styled from 'styled-components';
import { Bio } from '../../data/const';
import Hackerrank from '../../images/hackerrank.svg'
import Linkedin from '../../images/inkedin.svg'
import Leetcode from '../../images/leetcode.svg'
import Github from '../../images/github.svg'
import Stackoverflow from '../../images/stack-overflow.svg'
import Meedium from '../../images/medium.svg'

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const SVGIcon = styled.img`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.text_primary};
  transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.2);
    filter: brightness(1.8);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Ifham Mohamed</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>

        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
            <SVGIcon src={Linkedin} alt="Linkedin Icon" />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="_blank" rel="noopener noreferrer">
            <SVGIcon src={Github} alt="Github Icon" />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.medium} target="_blank" rel="noopener noreferrer">
            <SVGIcon src={Meedium} alt="Medium Icon" />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.leetcode} target="_blank" rel="noopener noreferrer">
            <SVGIcon src={Leetcode} alt="LeetCode Icon" />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.hakerrank} target="_blank" rel="noopener noreferrer">
            <SVGIcon src={Hackerrank} alt="Hackerrank Icon" />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.stakeoverflow} target="_blank" rel="noopener noreferrer">
            <SVGIcon src={Stackoverflow} alt="Stackoverflow Icon" />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; {currentYear} Ifham Mohamed. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;