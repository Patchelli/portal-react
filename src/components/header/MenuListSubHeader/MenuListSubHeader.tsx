import * as React from 'react';
import { Divider, ListSubheader, Typography } from '@mui/material';

interface MenuListSubHeaderProps {
  drawerOpen?: boolean;
  text: string;
}

const MenuListSubHeader: React.FC<MenuListSubHeaderProps> = ({ drawerOpen, text }) => {
  return (
    <React.Fragment>
      <Divider />
      {drawerOpen && (
        <ListSubheader component="div">
          <Typography variant="subtitle2">{text}</Typography>
        </ListSubheader>
      )}
    </React.Fragment>
  );
}

export default MenuListSubHeader;