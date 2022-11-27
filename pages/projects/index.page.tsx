import Image from '@/components/auxiliary/Image';
import RowStack from '@/components/auxiliary/RowStack';
import { Grid, Stack, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import projects, { Project } from './projects';
import { headerHeight } from '@/components/Header';
import ProjectDescription from './ProjectDescription';
import Platform from '@/components/auxiliary/Platform';

const ProjectsPage: React.FC = () => {
  /* prettier-ignore */
  const platformProps = { bg: 3, radius: '5px', padding: 3, height: '100%', width: { xs: '100%', sm: '50%' }};

  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  return (
    <RowStack
      height="100%"
      spacing={2}
      direction={{
        xs: 'column',
        sm: 'row'
      }}
    >
      <Platform {...platformProps} display="flex" flexDirection="column">
        <Typography textAlign="center" variant="h3" mb={2} fontSize="1.4rem">
          JavaScript Projects
        </Typography>
        <Box overflow="scroll">
          <Grid container columnSpacing={2} rowSpacing={1}>
            {projects.map((project) => {
              const { title, img, done } = project;
              return (
                <Grid
                  item
                  key={title}
                  xs={12}
                  sm={12}
                  md={6}
                  sx={{
                    pointerEvents: done ? undefined : 'none',
                    // opacity: done ? 1 : 0.5
                    filter: done ? undefined : 'brightness(50%)'
                  }}
                >
                  <Image
                    src={img}
                    alt={title}
                    width="100%"
                    rounded
                    shadow
                    onClick={() => setSelectedProject(project)}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Platform>
      <Platform
        {...platformProps}
        overflow={{
          xs: 'visible',
          md: 'scroll'
        }}
      >
        <Typography textAlign="center" variant="h3" marginBottom={3} fontSize="1.4rem">
          Project Description
        </Typography>
        <ProjectDescription project={selectedProject} overflow="scroll" />
      </Platform>
    </RowStack>
  );
};

export default ProjectsPage;
