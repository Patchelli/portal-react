import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';

import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { Avatar, ButtonBase, Stack, ListItemButton, ListItemText, Divider, ClickAwayListener } from '@mui/material';
// material-ui
import { useRef } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
interface ProfileProps {
  userName?: string;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;

}

const Profile: React.FC<ProfileProps> = ({ userName = "" }) => {

  const handleClickAway = () => {
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  const anchorRef = useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const iconBackColorOpen = 'grey.300';

  return (
    <Box>
      <ButtonBase
        sx={{
          p: 0.25,
          bgcolor: open ? iconBackColorOpen : 'transparent',
          borderRadius: 1,
          '&:hover': { bgcolor: 'secondary.lighter' }
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Avatar {...stringAvatar(userName)} ></Avatar>
        </Stack>
      </ButtonBase>
      <Box >
        <Popper
          placement="bottom-end"
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          popperOptions={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 9]
                }
              }
            ]
          }}
        >
          {({ TransitionProps }) => (
            <Paper
              sx={{
                width: 240,
                minWidth: 240,
                maxWidth: 290,
                backgroundColor: '#e1dfdd'
              }}
            >
              <ClickAwayListener onClickAway={handleClickAway}>
                <Fade {...TransitionProps} >
                  <Box sx={{ p: 1, bgcolor: 'primary' }}>
                    <Typography style={{ textAlign: "center", backgroundColor: '#e1dfdd' }} >Profile</Typography>
                    <Divider />
                    <Box>
                      <ListItemButton component="a" href="#simple-list">
                        <EditIcon sx={{ m: 1 }} />
                        <ListItemText primary="Edit Profile" />
                      </ListItemButton>
                      <ListItemButton component="a" href="#simple-list">
                        <VisibilityIcon sx={{ m: 1 }} />
                        <ListItemText primary="View Profile" />
                      </ListItemButton>
                      <ListItemButton component="a" href="#simple-list">
                        <LogoutIcon sx={{ m: 1 }} />
                        <ListItemText primary="Logout" />
                      </ListItemButton>
                    </Box>
                  </Box>
                </Fade>
              </ClickAwayListener>
            </Paper>
          )}
        </Popper>
      </Box>
    </Box>

  )
}

export default Profile;