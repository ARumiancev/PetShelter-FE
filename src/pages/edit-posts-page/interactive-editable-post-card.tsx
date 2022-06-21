import React from 'react';
import {
  Button,
  Card,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../types';

export type InteractiveCardProps = Post & {
  deleteItem: (itemId: string) => void,
};

const InteractiveEditablePostCard: React.FC<InteractiveCardProps> = ({
  id, petName, author, description, picURL, deleteItem,
}) => {
  const navigate = useNavigate();
  return (

    <Card sx={{ maxWidth: 345 }}>

      <Card>
        <CardMedia
          component="img"
          height="300"
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
            <Typography>{`${author}`}</Typography>
            <Typography>{` ${description}`}</Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'end' }}>
            <Button
              variant="outlined"
              sx={{
                minWidth: '40px',
                alignSelf: 'end',
                mt: 3,
                fontSize: 18,
              }}
              // onClick={() => console.log('cia update\'as')}
              onClick={() => navigate(`/auth/updatePost/${id}`)}
            >
              Edit
              {' '}
              <EditIcon />
            </Button>
            <Button
              variant="outlined"
              sx={{
                minWidth: '40px',
                alignSelf: 'end',
                mt: 3,
                fontSize: 18,
                color: '#bf1e0f',
              }}
              // onClick={() => console.log('cia trinimas')}
              onClick={() => deleteItem(id)}
            >
              {' '}
              Delete
              <DeleteForeverIcon color="warning" />
            </Button>
          </Box>
        </Box>
      </Card>
    </Card>
  );
};

export default InteractiveEditablePostCard;
