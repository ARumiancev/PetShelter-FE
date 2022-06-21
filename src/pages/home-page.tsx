import React, { useEffect } from 'react';
import {
  Box, Container, Grid,
} from '@mui/material';
import { useRootDispatch, useRootSelector } from '../store/hooks';
import { createfetchPostsAction } from '../store/features/post/post-action-creators';
import PetCard from '../components/pet-card';
import { selectPosts } from '../store/features/post/post-selectors';

const Homepage: React.FC = () => {
  const posts = useRootSelector(selectPosts);

  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(createfetchPostsAction);
  }, []);

  return (
    <Container sx={{
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'Wrap',
      py: 8,
    }}
    >
      <Box
        component="section"
        gap={5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'Wrap',
          py: 8,
          color: 'white',
        }}
      >
        {posts.length === 0 && <h1>Hooray! No animals need new homes! </h1>}

        {posts.map(({
          id, ...PostProps
        }) => (
          <Grid key={id} item xs={12} lg={4}>
            <PetCard {...PostProps} />
          </Grid>
        ))}

      </Box>
      <Box />
    </Container>
  );
};

export default Homepage;

// import React from 'react';

// const Homepage = () => (
//   <div>Homepage</div>
// );

// export default Homepage;
