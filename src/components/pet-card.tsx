import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { Post } from '../types';

export type PostCardProps = Omit<Post, 'id'>;
// export type PostCardProps = Post;

const PetCard: React.FC<PostCardProps> = ({
  petName, author, description, picURL,
}) => (

  <Card sx={{ width: 345 }}>
    <Typography>{author}</Typography>
    <CardMedia
      component="img"
      height="140"
      image={picURL}
      alt="picture of your potential pet"
      sx={{ height: 350 }}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {petName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>

  </Card>

);

export default PetCard;
