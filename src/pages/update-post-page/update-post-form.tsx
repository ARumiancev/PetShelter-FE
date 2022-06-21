import {
  Container, Box, TextField, Typography, Button,
} from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { createfetchPostsAction, createUpdatePostAction } from '../../store/features/post/post-action-creators';
import { selectPostById, selectPostsLoading } from '../../store/features/post/post-selectors';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { Post } from '../../types';

type CreateConfig = FormikConfig<Post>;

const validationSchema = Yup.object({
  petName: Yup.string()
    .required('This field is Required'),
  author: Yup.string()
    .required('This field is Required'),
  description: Yup.string()
    .required('This field is Required'),
  picURL: Yup.string()
    .required('This field is Required')
    .matches(/https?:\/\/(www\.)?/, 'Enter correct url'),
});

const UpdatePostForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useRootDispatch();
  const post = useRootSelector(selectPostById(id));
  const loading = useRootSelector(selectPostsLoading);
  const [isFilled, setIsFilled] = useState(!!post);

  const initialValues = post || {
    id: '',
    petName: '',
    author: '',
    description: '',
    picURL: '',
  };

  const handleSubmitUpdatePost: CreateConfig['onSubmit'] = (values) => {
    dispatch(createUpdatePostAction(values));
    navigate('/auth/editPosts');
  };

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    setValues,
  } = useFormik<Post>({
    initialValues,
    onSubmit: handleSubmitUpdatePost,
    validationSchema,
  });

  useEffect(() => {
    if (!loading && !isFilled) {
      if (post) { setValues(post); }
      setIsFilled(true);
    }
  }, [loading, post]);

  useEffect(() => {
    dispatch(createfetchPostsAction);
  }, []);

  return (
    <Container
      sx={{
        py: 10,
        display: 'flex',
        justifyContent: 'center',

      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 400,
          px: 4,
          py: 3,
          boxShadow: 10,
          backgroundColor: 'white',
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          color="primary.main"
        >
          Update post
        </Typography>
        <TextField
          name="id"
          type="text"
          label="Animal ID"
          value={values.id}
          variant="outlined"
          fullWidth
          disabled
          sx={{ mt: 3 }}
        />
        <TextField
          name="petName"
          type="text"
          label="Pet name"
          value={values.petName}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Typography sx={{
          fontSize: 12, color: 'red', mt: 1, ml: 1,
        }}
        >
          {touched.petName && errors.petName}
        </Typography>

        <TextField
          name="author"
          type="text"
          label="Type of animal"
          value={values.author}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Typography sx={{
          fontSize: 12, color: 'red', mt: 1, ml: 1,
        }}
        >
          {touched.author && errors.author}
        </Typography>

        <TextField
          name="description"
          type="text"
          label="Description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Typography sx={{
          fontSize: 12, color: 'red', mt: 1, ml: 1,
        }}
        >
          {touched.description && errors.description}
        </Typography>

        <TextField
          name="picURL"
          type="text"
          label="Animal's picture"
          value={values.picURL}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          fullWidth
          sx={{ mt: 3 }}
        />
        <Typography sx={{
          fontSize: 12, color: 'red', mt: 1, ml: 1,
        }}
        >
          {touched.picURL && errors.picURL}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>

          <Button
            type="button"
            onClick={() => navigate('/auth/editPosts')}
            sx={{
              px: 4,
              py: 1,
              boxShadow: 4,
              backgroundColor: 'white',
            }}
          >
            Back
          </Button>
          <Button
            type="submit"
            sx={{
              px: 4,
              py: 1,
              boxShadow: 4,
              backgroundColor: 'white',
            }}
          >
            Update

          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UpdatePostForm;
