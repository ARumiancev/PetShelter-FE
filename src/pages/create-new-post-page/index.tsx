import { Box } from '@mui/material';
import React from 'react';
import CreateNewPostForm from './create-new-post-form';

const CreateNewPostPage: React.FC = () => (
  <Box
    component="section"
    gap={5}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'Wrap',
      py: 8,
    }}
  >
    <CreateNewPostForm />

  </Box>
);

export default CreateNewPostPage;
