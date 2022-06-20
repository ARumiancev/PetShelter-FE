import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Box,
} from '@mui/material';
import React from 'react';
import { Post } from '../types';

export type PostCardProps = Omit<Post, 'id'>;
// export type PostCardProps = Post;

const PetCard: React.FC<PostCardProps> = ({
  petName, author, description, picURL,
}) => (

  <Card sx={{ maxWidth: 345 }}>
    <Typography>{author}</Typography>
    <CardMedia
      component="img"
      height="140"
      image={picURL}
      alt="picture of your potential pet"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {petName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {/* Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica. */}
        {description}
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
    {/* ------------- -----------------------*/}
    {/* <Card>
      <CardMedia
        component="img"
        height="140"
        image={picURL}
        alt="picture of your potential pet"
      />
      <Box sx={{
        p: 3,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      >
        <Box>
          <Typography
            component="h2"
            variant="h6"
            sx={{
              lineHeight: '24px',
              mb: 2,
              fontStyle: 'italic',
            }}
          >
            {`${petName}`}
          </Typography>
          <Typography>{`year: ${author}`}</Typography>
          <Typography>{` ${description}`}</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'end' }}>
          <Button
            variant="outlined"
            sx={{
              minWidth: '40px',
              alignSelf: 'end',
              mt: 3,
            }}
            onClick={() => console.log('cia update\'as')}
          // onClick={() => navigate(`/admin/sculptures/update/${id}`)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            sx={{
              minWidth: '40px',
              alignSelf: 'end',
              mt: 3,
            }}
            onClick={() => console.log('cia trinimas')}
          // onClick={() => deleteItem(id)}
          >
            X
          </Button>
        </Box>
      </Box>
    </Card> */}
  </Card>

);

// const PetCard: React.FC<PostCardProps> = (props) => {
//   const {
//     petName, description, picURL, createdAt, updatedAt,
//   } = props;

//   return (
//     <Card>
//       <Container>

//         <h3>{petName}</h3>

//         <h3>{description}</h3>
//         <img
//           src={`${picURL}`}
//           alt=""
//           loading="lazy"
//         />
//         <h3>{new Date(createdAt).toLocaleString()}</h3>
//         <h3>{new Date(updatedAt).toLocaleString()}</h3>

//       </Container>
//     </Card>
//   );
// };

export default PetCard;
