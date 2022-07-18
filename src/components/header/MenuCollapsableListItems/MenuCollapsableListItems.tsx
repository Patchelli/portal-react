import * as React from 'react';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Menu } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

export interface MenuCollapsableListItemsProps {
  drawerOpen?: boolean;
  mainPrimaryText: string;
  mainSecondaryText?: string;
  icon: React.ReactNode;
  listItems: Array<JSX.Element>;
}

const MenuCollapsableListItems: React.FC<MenuCollapsableListItemsProps> = ({ drawerOpen, mainPrimaryText, mainSecondaryText, icon, listItems }) => {
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openMenu = Boolean(anchorEl);

  const handleListItemMainClick = (event: React.MouseEvent<HTMLElement>) => {
    if (drawerOpen)
      setOpen(!open);
    else
      setAnchorEl(event.currentTarget);
  };

  const handleListItemMainFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (drawerOpen)
      setOpen(!open);
    else
      setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <ListItemButton onMouseOver={handleListItemMainClick} onClick={handleListItemMainClick}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={mainPrimaryText}
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium',
            lineHeight: '20px',
            mb: '2px',
          }}
          secondary={mainSecondaryText}
          secondaryTypographyProps={{
            noWrap: true,
            fontSize: 12,
            lineHeight: '16px',
            color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
          }} />
        <KeyboardArrowDown
          sx={{
            mr: -1,
            opacity: 0,
            transform: open ? 'rotate(-180deg)' : 'rotate(0)',
            transition: '0.2s',
          }}
        />
      </ListItemButton>
      {drawerOpen &&
        <Collapse in={open} timeout="auto" unmountOnExit>
          {React.Children.map(listItems,
            (listItem) => {
              return React.cloneElement(listItem,
                { drawerOpen: drawerOpen }, null);
            })}
        </Collapse>
      }
      {!drawerOpen &&
        <Menu
          id="positioned-menu"
          aria-labelledby="positioned-button"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
        >
          {React.Children.map(listItems,
            (menuItem) => {
              return React.cloneElement(menuItem,
                { drawerOpen: drawerOpen, onClick: () => handleMenuClose() }, null);
            })}
        </Menu>
      }
    </React.Fragment>
  )
}

export default MenuCollapsableListItems;