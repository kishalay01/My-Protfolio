import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Ptext from './Ptext';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/Hero (2).jpg';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutsection_left,
  .aboutsection_right {
    flex: 1;
  }
  .section_title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .abotusection_buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutsection_left {
      flex: 4;
    }
    .aboutsection_right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-ditrection: column;
      text-align: center;
    }
    .aboutsection_left,
    .aboutsection_right {
      width: 100%;
    }
    .aboutsection_right {
      margin-top: 3rem;
    }
    .section_title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .abotusection_buttons {
      flex-direction: column;
      gap: 0;
      .button_wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutsection_left">
          <SectionTitle
            subheading="Let Me Introduce Myself"
            heading="About Me"
          />
          <Ptext>
            I am a student and website designer and also developer from
            Kolkata.I love to create website and improve myself.I love to write
            Bengali poems, Articles.Traveling and photography is my passion.I am
            a fast learner.love to communicate with people.
          </Ptext>
          <div className="abotusection_buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
        <div className="aboutsection_right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
