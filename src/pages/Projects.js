import React, { useState } from 'react';
import styled from 'styled-components';
// import projects from '../assets/data/projects';
// import { MdSearch } from 'react-icons/md';
import ContactBanner from '../components/ContactBanner';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';

// import Footer from '../components/Footer';
const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects_allitems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
  }
`;

export default function Projects() {
  const [ProjectData] = useState(ProjectInfo);

  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle
          heading="Projects"
          subheading="Some of my recent projects"
        />
        {/* <div className="projects_searchbar">
          <form>
            <input type="text" />
            <MdSearch />
          </form>
        </div> */}
        <div className="projects_allitems">
          {ProjectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </div>
      <ContactBanner />
    </ProjectsStyles>
  );
}
