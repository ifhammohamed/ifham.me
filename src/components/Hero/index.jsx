import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/const';
import HeroImg from '../../images/HeroImage.jpg';
import { HeroBg, HeroContainer, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, Img, ResumeButton, Span, SubTitle, TextLoop, Title, handleMouseMove, handleMouseLeave } from './HeroStyle';

function Hero() {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='_blank'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
}

export default Hero