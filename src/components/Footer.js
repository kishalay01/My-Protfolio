import React from 'react';
import styled from 'styled-components';
import Footercol from './Footercol';
import Ptext from './Ptext';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer_col1 {
    flex: 2;
  }
  .footer_col2,
  .footer_col3,
  .footer_col4 {
    flex: 1;
  }
  .footer_col1_title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copywrite {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
    @media only screen and (max-width: 768px) {
      .container {
        flex-direction: column;
        gap: 0rem;
        & > div {
          margin-top: 5rem;
        }
      }
      .footer_col1.para {
        max-width: 100%;
      }
      .copywrite {
        .container {
          div {
            margin-top: 0;
          }
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer_col1">
          <h1 className="footer_col1_title">Kishalay Mukherjee</h1>
          <Ptext>
            A Web Developer and Designer.I make awesome website that people
            love.My website have unique styles and Design.I love to learn New
            Things and Utilize it on my Development Background.
          </Ptext>
        </div>
        <div className="footer_col2">
          <Footercol
            heading="Import Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Links',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Links',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Links',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Links',
              },
            ]}
          />
        </div>
        <div className="footer_col3">
          <Footercol
            heading="Contact Info"
            links={[
              {
                title: '+919883069313',
                path: 'tel:+919883069313',
              },
              {
                title: 'kishalaymukherjee80@gmail.com',
                path: 'mailto:kishalaymukherjee80@gmail.com',
              },
              {
                title: 'Kulteghori Mohanbati, Keshabchak, West Bengal 712410',
                path:
                  'https://www.google.com/maps/place/Kulateghari+Volleyball+Club/@22.8821864,87.9621474,17z/data=!3m1!4b1!4m5!3m4!1s0x39f86ed06b93489f:0x975d8ccc4549326b!8m2!3d22.8821864!4d87.9643361',
              },
            ]}
          />
        </div>
        <div className="footer_col4">
          <Footercol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/kishalay.mukherjee.752/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/mukherjeekishalay/?hl=en',
              },
              {
                title: 'Linkdin',
                path:
                  'https://www.linkedin.com/in/kishalay-mukherjee-11816522a/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copywrite">
        <div className="container">
          <Ptext>© 2022 - Kishalay Mukherjee | Designed By Me </Ptext>
        </div>
      </div>
    </FooterStyles>
  );
}
