 import * as React from 'react';
import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { Tooltip, IconButton, Avatar, Popover } from '@mui/material';
import { auto } from '@popperjs/core';
import { List } from '@mui/icons-material';


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
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };


  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;
  return (  
    <Box>
      <Button aria-describedby={id} variant="text" onClick={handleClick}>
        <IconButton sx={{ p: 0 }}>
            <Avatar {...stringAvatar(userName)} ></Avatar>
        </IconButton> 
      </Button>
      <Box >
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={250}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'info' }}>
          <Paper >
              <Avatar {...stringAvatar(userName)} ></Avatar>
          </Paper>
              <Box>
                <List></List>
              </Box>
            </Box>
          </Fade>
        )}
      </Popper>
    </Box>
    </Box>
  )
}

export default Profile;