import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme  } from "@mui/material";
import { useDrawerContext } from "../../contexts";

interface IlistItemLinkProps{
  icon:string;
  to:string;
  label:string;
  onClick: (()=> void) | undefined;
}
const ListItemLink: React.FC <IlistItemLinkProps> =({icon, to, label, onClick}) =>{



      const handleClick =()=>{
        navegate(to);
        onClick?.();
      }

  return(
    <List component="nav">
    <ListItemButton onClick ={handleClick }>
      <ListItemIcon>
        <Icon> {icon} </Icon>
      </ListItemIcon>
      <ListItemText primary= {label} />
    </ListItemButton>
  </List>
  )
}

export const MenuLateral: React.FC<{children: React.ReactNode}> = ({children}) => {
  const theme=useTheme();
  const smDown=useMediaQuery(theme.breakpoints.down);

  const {isDrawerOpen, toggleDraerOpen} =useDrawerContext();

  return (
      <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent' } onClose={toggleDraerOpen}>
      <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
        
        <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">

        <Avatar sx={{height: theme.spacing(12), width: theme.spacing(12)}}
        src="../images/88107986.jpeg"/>
        </Box>

        <Divider/>
        <Box flex={1}>
           
        </Box>
            
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
      {children}
      </Box>
      </>
  
  );
};
function navegate(to: string) {
  throw new Error("Function not implemented.");
}

