/* eslint-disable react/prop-types */
import { Container } from "./styles"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState, useContext } from "react";
import { SupabaseContext } from "../../../context/Supabase/supabase"
import { useNavigate } from "react-router-dom";


export default function LayoutPrivate({ children }) {
  const [anchorEl, setAnchorEl] = useState(null)

  const auth = useContext(SupabaseContext)
  const navigation = useNavigate()

  const handleLougout = async () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    await auth.logout()
    navigation("/login")
    return true
  }


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar 
          position="fixed"
        >
          <Toolbar
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor:"#fff"
            }}
          >
            <div>
              {/* div bucha para var o icon ir pro final da toolbar */}
            </div>
            <div
              style={{ 
                position: 'relative'
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="default"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLougout}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <>
        { children }
      </>
    </Container>
  )
}