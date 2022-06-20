import {
  Alert,
  Box, Button, Container, Paper, Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createDeletePostAction, createfetchPostsAction, postsClearErrorAction } from '../../store/features/post/post-action-creators';
import { selectPosts, selectPostsError, selectPostsLoading } from '../../store/features/post/post-selectors';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import InteractiveEditablePostCard from './interactive-editable-post-card';

const EditPostsPage: React.FC = () => {
  const navigate = useNavigate();
  const posts = useRootSelector(selectPosts);
  const postsLoading = useRootSelector(selectPostsLoading);
  const error = useRootSelector(selectPostsError);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(createfetchPostsAction);
  }, []);

  let pageContent = (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 9 }}>
      <Typography>Kraunama...</Typography>
    </Box>
  );

  if (!postsLoading) {
    pageContent = posts.length > 0 ? (
      <Box
        component="section"
        sx={{
          display: 'flex', gap: 5, mb: 6, flexWrap: 'wrap', justifyContent: 'center',
        }}
      >
        {posts.map((post) => (
          <Paper
            key={post.id}
            sx={{
              maxWidth: 250,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <InteractiveEditablePostCard
              {...post}
              deleteItem={() => dispatch(createDeletePostAction(post.id))}
            />
          </Paper>
        ))}
      </Box>
    ) : <Typography component="h2" variant="h3" sx={{ my: 3 }}>No items, sorry.</Typography>;
  }

  return (
    <Container>

      {error && (
        <Alert
          color="error"
          onClose={() => dispatch(postsClearErrorAction)}
        >
          {error}
        </Alert>
      )}

      {pageContent}

    </Container>
  );
};

export default EditPostsPage;
