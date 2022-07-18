import * as React from 'react';
import { ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';

export interface MenuListItemProps {
  drawerOpen?: boolean;
  primaryText: string;
  secondaryText?: string;
  icon: React.ReactNode;
  isCollapsable?: boolean;
}

const MenuListItem: React.FC<MenuListItemProps> = ({ drawerOpen, primaryText, secondaryText, icon, isCollapsable }) => {
  return (
    <React.Fragment>
      {isCollapsable && (
        <ListItemButton
          key={primaryText}
          sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={primaryText}
            primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
          />
        </ListItemButton>
      )}

      {!isCollapsable && (
        <Tooltip title={!drawerOpen ? primaryText : ""} placement="right">
          <ListItemButton>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText primary={primaryText} secondary={secondaryText} />
          </ListItemButton>
        </Tooltip>
      )}
    </React.Fragment>
  );
}

export default MenuListItem;