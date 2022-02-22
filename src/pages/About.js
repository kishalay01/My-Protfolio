import React from 'react';
import styled from 'styled-components';
import Ptext from '../components/Ptext';
import Button from '../components/Button';
// eslint-disable-next-line import/no-unresolved
import ResumeImg from '../assets/images/Resume.jpg';
import MyImg from '../assets/images/Mymy.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top_section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about_subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about_heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about_info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about_info_items {
    margin-top: 15rem;
  }
  .about_info_item {
    margin-top: 10rem;
  }
  .about_info_heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top_section {
      flex-direction: column;
      gap: 5rem;
    }
    .about_subheading {
      font-size: 1.8rem;
    }
    .about_heading {
      font-size: 2.8rem;
    }
    .about_info_heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top_section">
          <div className="left">
            <p className="about_subheading">
              Hi, I am <span>Kishalay Mukherjee</span>
            </p>
            <h2 className="about_heading">A Web Developer</h2>
            <div className="about_info">
              <Ptext>
                I am from Kolkata,West Bengal. A place of beauty and nature.
                Since my childhood, i love art and design. I always try to
                design stuff with my unique point of view. I also love to create
                things that can be usefull to others.
                <br /> <br />
                I started coding since I was in high school. Coding I love it
                and now I have the opportunity to design along with I find it
                really interesting and I and I enjoyed the lot.
                <br />
                <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </Ptext>
            </div>
            <Button btnText="Download CV" btnlink={ResumeImg} />
          </div>
          <div className="right">
            <img src={MyImg} alt="" />
          </div>
        </div>
        <div className="about_info_items">
          <div className="about_info_item">
            <h1 className="about_info_heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Deulpara B.N Vidyaniketan,Deulpara,Tarakeswer']}
            />
            <AboutInfoItem
              title="College"
              items={['Haldia Institute Of Technology']}
            />
          </div>
        </div>
        <div className="about_info_items">
          <div className="about_info_item">
            <h1 className="about_info_heading">My Skills</h1>
            <AboutInfoItem
              title="Frontend"
              items={['HTML', 'CSS', 'REACT', 'JS']}
            />
            <AboutInfoItem title="Backend" items={['Node', 'Express', 'PHP']} />
            <AboutInfoItem
              title="Design"
              items={['Photoshop', 'Illustrator', 'Canva']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
