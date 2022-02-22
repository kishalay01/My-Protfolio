import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem_img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem_info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem_title {
    font-size: 2.2rem;
  }
  .projectItem_description {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .project_img {
      height: 35px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem_img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem_info">
        <Link to="#">
          <h3 className="projectItem_title">{title}</h3>
        </Link>
        <p className="projectItem_description">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
