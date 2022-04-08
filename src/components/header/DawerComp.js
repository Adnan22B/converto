import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Pages = ["Merge PDF", "Split PDF", "Compress PDF", "Convert PDF", "Convert Images", "All Tools", "Login", "SignUp"]
function DawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose= {() => setOpenDrawer(false)} >
            <List>
                {
                    Pages.map((page, index) => (
                        <ListItemButton onClick={() => setOpenDrawer(!openDrawer)} key={index}>
                            <ListItemIcon>
                                <ListItemText>{page}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))
                }
            </List>
        </Drawer>
        <IconButton sx={{ color:"white", marginLeft:"auto"}} onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
    </React.Fragment>
  )
}

export default DawerComp