import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Post } from '../types';

export type PostCardProps = Omit<Post, 'id'>;
// export type PostCardProps = Post;

const PetCard: React.FC<PostCardProps> = ({
  petName, author, description, picURL,
}) => (

  <Card sx={{ width: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={picURL}
      alt="picture of your potential pet"
      sx={{ height: 350 }}
    />
    <Accordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography gutterBottom variant="h5" component="div">
          {petName}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>

  </Card>

);

export default PetCard;
