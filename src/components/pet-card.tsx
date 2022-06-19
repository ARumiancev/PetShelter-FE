import {
  // Button,
  Card,
  // CardActions,
  // CardContent,
  // CardMedia,
  // Typography,
  Container,
} from '@mui/material';
import React from 'react';
import { Post } from '../types';

export type PostCardProps = Omit<Post, 'id'>;
// export type PostCardProps = Post;

// eslint-disable-next-line no-empty-pattern
// const PetCard: React.FC<PostCardProps> = ({
//   petName, description,
// }) => (

//   <Card sx={{ maxWidth: 345 }}>
//     <Typography>{petName}</Typography>
//     {/* <Typography>{author}</Typography> */}
//     <Typography>{description}</Typography>
//     <CardMedia
//       component="img"
//       height="140"
//       image="/static/images/cards/contemplative-reptile.jpg"
//       alt="green iguana"
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="div">
//         Lizard
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         Lizards are a widespread group of squamate reptiles, with over 6,000
//         species, ranging across all continents except Antarctica
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Share</Button>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </Card>
// );

const PetCard: React.FC<PostCardProps> = (props) => {
  const {
    petName, description, picURL, createdAt, updatedAt,
  } = props;

  return (
    <Card>
      <Container>

        <h3>{petName}</h3>

        <h3>{description}</h3>
        <img
          src={`${picURL}`}
          alt=""
          loading="lazy"
        />
        <h3>{new Date(createdAt).toLocaleString()}</h3>
        <h3>{new Date(updatedAt).toLocaleString()}</h3>

      </Container>
    </Card>
  );
};

export default PetCard;
