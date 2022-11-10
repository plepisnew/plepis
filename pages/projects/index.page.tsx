import ColumnStack from '@/components/auxiliary/ColumnStack';
import Image from '@/components/auxiliary/Image';
import RowStack from '@/components/auxiliary/RowStack';
import { Masonry } from '@mui/lab';
import { Divider, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

import projects, { Project } from './projects';
import ProjectCard from './ProjectCard';

const staticProjects: Project[] = projects.filter((project) => project.legacy);
const dynamicProjects: Project[] = projects.filter((project) => !project.legacy);

const createProjectCards = (projects: Project[]): React.ReactElement[] =>
  projects.map((project) => <ProjectCard project={project} key={project.title} />);

const createColumn = (items: Project[]): React.ReactElement => {
  const legacy = (items[0] || { legacy: false }).legacy;
  const imageSource = legacy ? 'projects/sad.png' : 'projects/happy.png';
  const title = legacy ? 'HTML Projects' : 'React Projects';
  return (
    <ColumnStack alignCenter dualColumn spacing={2}>
      <RowStack
        alignCenter
        spacing={3}
        sx={{
          backgroundColor: 'z1.main',
          width: '100%',
          justifyContent: 'center'
        }}
      >
        <Typography fontSize="2rem">{title}</Typography>
        <Image src={imageSource} alt={imageSource} width={100} rounded shadow />
      </RowStack>
      <Masonry
        columns={{
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3
        }}
        spacing={3}
      >
        {createProjectCards(items)}
      </Masonry>
    </ColumnStack>
  );
};

const ProjectsPage: React.FC = () => {
  return (
    <Stack
      spacing={3}
      direction={{
        xs: 'column',
        sm: 'row'
      }}
    >
      {createColumn(staticProjects)}
      <Divider orientation="vertical" flexItem />
      {createColumn(dynamicProjects)}
    </Stack>
  );
};

export default ProjectsPage;
