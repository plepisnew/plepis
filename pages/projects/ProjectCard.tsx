import React from 'react';
import { Project } from './projects';
import { Card, CardContent, CardHeader, CardMedia, Typography, Link } from '@mui/material';
import { styled } from '@/theme';

type ProjectCardProps = {
  project: Project;
};

const StyledCard = styled(Card)(({ theme }) => {
  console.log(theme);
  const { main, contrastText } = theme.palette.z5;
  const { spacing } = theme;
  return {
    backgroundColor: main,
    color: contrastText,
    transition: 'border-radius 300ms',
    '& .MuiCardHeader-root': {
      padding: spacing(4),
      paddingBottom: 0
    },
    '& .MuiCardContent-root': {
      padding: spacing(4)
    },
    '&:hover': {
      borderRadius: 30
    },
    '&:active': {
      boxShadow: 'none'
    }
  };
});

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, href, img, source, legacy } = project;
  return (
    <StyledCard>
      <Link href={href}>
        <CardMedia component="img" src={img} alt={title} />
      </Link>
      <Link href={source} underline="hover" color="inherit" target="_blank" rel="noopener">
        <CardHeader
          title={
            <Typography fontWeight={600} variant="h5">
              {title}
            </Typography>
          }
        />
      </Link>
      <CardContent>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ProjectCard;
