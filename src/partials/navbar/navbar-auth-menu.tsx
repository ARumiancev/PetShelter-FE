import React, { useState, useRef } from 'react';
import {
  Avatar,
  Popper,
  Box,
  Paper,
  MenuList,
  MenuItem,
  Typography,
  Container,
} from '@mui/material';
import { selectAuthUser } from '../../store/selectors';
import { authLogoutAction } from '../../store/action-creators';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import NavbarLink from './navbar-link';

const NavbarAuthMenu: React.FC = () => {
  const user = useRootSelector(selectAuthUser);
  const dispatch = useRootDispatch();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const popperAnchorRef = useRef<HTMLDivElement>(null);

  const logout = () => {
    dispatch(authLogoutAction);
  };

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const userInitials = user && user.name && user.surname
    ? user.name[0] + user.surname[0]
    : null;

  return (
    <Box
      ref={popperAnchorRef}
      sx={{ display: 'inline-flex', alignItems: 'center', height: 64 }}
    >
      <Container sx={{ mx: 2 }}>

        <NavbarLink to="/auth/createPost">Create a post</NavbarLink>
        <NavbarLink to="/auth/editPosts">Edit existing posts</NavbarLink>
      </Container>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleMenuOpen}
      >
        <Typography sx={{ mr: 2, userSelect: 'none' }}>
          Hey there,
          {' '}
          {user?.email}
        </Typography>
        {(userInitials || user?.img) && <Avatar src={user?.img}>{userInitials}</Avatar>}

      </Box>
      <Popper
        placement="bottom-end"
        anchorEl={popperAnchorRef.current}
        open={menuOpen}
        sx={{ zIndex: 'tooltip' }}
      >
        <Paper elevation={3}>
          <MenuList>
            <MenuItem onClick={logout}>
              Atsijungti
            </MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    </Box>
  );
};

export default NavbarAuthMenu;
