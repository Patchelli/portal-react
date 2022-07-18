import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuCollapsableListItems from '../components/header/MenuCollapsableListItems';
import MenuListItem from '../components/header/MenuListItem';
import MenuListSubHeader from '../components/header/MenuListSubHeader';


const savedReports = [
  <MenuListItem primaryText='Current month' icon={<AssignmentIcon />} isCollapsable={true} />,
  <MenuListItem primaryText='Last quarter' icon={<AssignmentIcon />} isCollapsable={true} />,
  <MenuListItem primaryText='Year-end sale' icon={<AssignmentIcon />} isCollapsable={true} />,
]

export const listItems = [
  <MenuListItem primaryText='Dashboard' icon={<DashboardIcon />} />,
  <MenuListItem primaryText='Orders' icon={<ShoppingCartIcon />} />,
  <MenuListItem primaryText='Customers' icon={<BarChartIcon />} />,
  <MenuListItem primaryText='Reports' icon={<LayersIcon />} />,
  <MenuListSubHeader text='Saved reports' />,
  <MenuCollapsableListItems mainPrimaryText='Reports' mainSecondaryText='Saved Reports' icon={<AssignmentIcon />} listItems={savedReports} />
];