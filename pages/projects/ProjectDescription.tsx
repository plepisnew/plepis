import React from 'react';
import { Stack, Typography, Button, StackProps } from '@mui/material';
import Image from '@/components/auxiliary/Image';
import { Project } from './projects';
import RowStack from '@/components/auxiliary/RowStack';
import { useRouter } from 'next/router';

type Props = {
  project: Project;
} & StackProps;

const ProjectDescription: React.FC<Props> = ({
  project: { title, description, href, img, source, legacy },
  ...stackProps
}) => {
  const router = useRouter();
  return (
    <Stack spacing={2} {...stackProps}>
      <RowStack alignItems="center">
        <Typography fontWeight={600} fontSize="1.75rem" component="span">
          {title}&nbsp;
        </Typography>
        {legacy && (
          <Typography fontWeight={300} fontSize="1.75rem" component="span">
            (Legacy Project)
          </Typography>
        )}
      </RowStack>
      <Image src={img} alt={title} width="100%" alignSelf="center" rounded />
      <Typography fontWeight={400} fontSize="1.2rem" p={2}>
        {description}
      </Typography>

      <RowStack spacing={2}>
        <Button
          variant="contained"
          color="primary"
          sx={{ flex: 1, paddingY: 2, color: 'black' }}
          onClick={() => window.open(source, '_blank')}
        >
          View Source code
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ flex: 1, paddingY: 2, color: 'black' }}
          onClick={() => router.push(href)}
        >
          Open Project
        </Button>
      </RowStack>
    </Stack>
  );
};

export default ProjectDescription;
