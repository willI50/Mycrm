import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BusinessIcon from '@mui/icons-material/Business';
// import ForumSharpIcon from '@mui/icons-material/ForumSharp';
// import LayersIcon from '@mui/icons-material/Layers';
// import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        {/* <DashboardIcon /> */}
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Command" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        {/* <BusinessIcon /> */}
      </ListItemIcon>
      <ListItemText primary="Entreprise" />
    </ListItemButton>
    <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/NewTicket"
            
            >
    <ListItemButton>
      <ListItemIcon>
        {/* <ForumSharpIcon /> */}
      </ListItemIcon>
      <ListItemText primary="Tickets" />
    </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        {/* <LayersIcon /> */}
      </ListItemIcon>
      <ListItemText primary=" My Informations " />
    </ListItemButton>
  </React.Fragment>
);

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );
