import {
  Container, Box, TextField, Typography, Button,
} from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// import ButtonScale from '../../../../components/button-scale';
import { createNewPostAction } from '../../store/features/post/post-action-creators';
import { useRootDispatch } from '../../store/hooks';
import { CreatePost } from '../../types';

type CreateConfig = FormikConfig<CreatePost>;

const initialValues: CreatePost = {
  petName: '',
  author: '',
  description: '',
  picURL: '',
};

const validationSchema: Yup.SchemaOf<CreatePost> = Yup.object({
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

const CreateNewPostForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useRootDispatch();

  const handleSubmitCreatePost: CreateConfig['onSubmit'] = (values) => {
    dispatch(createNewPostAction(values));
    navigate('/');
  };

  const {
    values, handleSubmit, handleChange, handleBlur, touched, errors,
  } = useFormik<CreatePost>({
    initialValues,
    onSubmit: handleSubmitCreatePost,
    validationSchema,
  });

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
          width: 400,
          px: 4,
          py: 3,
          bgcolor: 'formColor.main',
          boxShadow: 10,
          backgroundColor: 'white',
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          color="primary.main"
        >
          Create new post
        </Typography>
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
          label="Author"
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
          label="description"
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
          label="URL of the picture of the pet"
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
            type="submit"
            sx={{
              maxWidth: 400,
              px: 4,
              py: 3,
              bgColor: '#1976d2',
              boxShadow: 2,
              backgroundColor: 'white',
            }}
          >
            Create post

          </Button>

        </Box>
      </Box>
    </Container>
  );
};

export default CreateNewPostForm;
