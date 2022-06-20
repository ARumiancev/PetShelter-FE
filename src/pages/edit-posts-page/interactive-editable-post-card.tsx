import {
  Button,
  Card,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';
import React from 'react';
import { Post } from '../../types';

export type InteractiveCardProps = Post & {
  deleteItem: (itemId: string) => void,
};

const InteractiveEditablePostCard: React.FC<InteractiveCardProps> = ({
  id, petName, author, description, picURL, deleteItem,
}) => (

  <Card sx={{ maxWidth: 445 }}>

    <Card>
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
            // onClick={() => console.log('cia trinimas')}
            onClick={() => deleteItem(id)}
          >
            X
          </Button>
        </Box>
      </Box>
    </Card>
  </Card>

);

export default InteractiveEditablePostCard;
