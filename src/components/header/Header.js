import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Tab, Tabs, Button, useMediaQuery, useTheme, MenuItem, Menu } from '@mui/material'
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import DawerComp from './DawerComp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Pages = ["Merge PDF", "Split PDF", "Compress PDF", "Convert PDF", "Convert Images", "All Tools"]
function Header() {
  const [tabsVal, setTabsVal] = useState()
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
//   For DropDown 1
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
// For DropDown 2
const [anchorE2, setAnchorE2] = React.useState(null);
const open2 = Boolean(anchorE2);
const handleClick2 = (event) => {
  setAnchorE2(event.currentTarget);
};
const handleClose2 = () => {
  setAnchorE2(null);
};
// For DropDown 3
const [anchorE3, setAnchorE3] = React.useState(null);
const open3 = Boolean(anchorE3);
const handleClick3 = (event) => {
  setAnchorE3(event.currentTarget);
};
const handleClose3 = () => {
  setAnchorE3(null);
};
  return (
      <React.Fragment>
        <AppBar sx = {{background: "#882e2f"}}>
            <Toolbar>
                <ContentPasteGoIcon />
                {
                    isMatch ? (
                        <>
                            <Typography sx={{fontSiz: "1rem", paddingLeft: "5%"}}>
                                Cenverto
                            </Typography>
                            <DawerComp />
                        </>
                    ) : (
                        <>
                             <Tabs textColor="inherit" value={tabsVal} indicatorColor="primary" onChange={(e, Value) => setTabsVal(Value)} >
                                 {
                                     Pages.map((page, index) => (
                                         <div>
                                             {
                                                 page === "Convert PDF" ? (
                                                     <>
                                                         <Tab key={index} label={page} id="basic-button"
                                                            aria-controls={open ? 'basic-menu' : undefined}
                                                            aria-haspopup="true"
                                                            aria-expanded={open ? 'true' : undefined}
                                                            onClick={handleClick} />
                                                            <ArrowDropDownIcon sx={{ marginLeft: "-20px", marginBottom: "-6px"}} />
                                                    <Menu
                                                        id="basic-menu"
                                                        anchorEl={anchorEl}
                                                        open={open}
                                                        onClose={handleClose}
                                                        MenuListProps={{
                                                          'aria-labelledby': 'basic-button',
                                                        }}
                                                      >
                                                        <MenuItem onClick={handleClose}>JPG To PDF</MenuItem>
                                                        <MenuItem onClick={handleClose}>Word To PDF</MenuItem>
                                                        <MenuItem onClick={handleClose}>Excel To PDF</MenuItem>
                                                        <MenuItem onClick={handleClose}>PowerPoint To PDF</MenuItem>
                                                        <MenuItem onClick={handleClose}>PDF To JPG</MenuItem>
                                                        <MenuItem onClick={handleClose}>PDF To Word</MenuItem>
                                                        <MenuItem onClick={handleClose}>PDF To Excel</MenuItem>
                                                        <MenuItem onClick={handleClose}>PDF To PowerPoint</MenuItem>
                                                      </Menu>
                                                     </>
                                                     
                                                 ): (
                                                     <>
                                                     {
                                                         page === 'Convert Images' ? (
                                                             <>
                                                                <Tab key={index} label={page} id="basic-button2" 
                                                                aria-controls={open2 ? 'basic-menu2' : undefined}
                                                                aria-haspopup="true"
                                                                aria-expanded={open2 ? 'true' : undefined}
                                                                onClick={handleClick2} />
                                                                <ArrowDropDownIcon sx={{ marginLeft: "-20px", marginBottom: "-6px"}} />
                                                                 <Menu
                                                                    id="basic-menu2"
                                                                    anchorE2={anchorE2}
                                                                    open={open2}
                                                                    onClose={handleClose2}
                                                                    MenuListProps={{
                                                                    'aria-labelledby': 'basic-button2',
                                                                    }}
                                                                >
                                                                    <MenuItem onClick={handleClose2}>JPG To JPEG</MenuItem>
                                                                    <MenuItem onClick={handleClose2}>JPG To PNG</MenuItem>
                                                                    <MenuItem onClick={handleClose2}>JPG To GIF</MenuItem>
                                                                    <MenuItem onClick={handleClose2}>JPG To TIFF</MenuItem>
                                                                    <MenuItem onClick={handleClose2}>JPEG To JPG</MenuItem>
                                                                    <MenuItem onClick={handleClose2}>PNG To JPG</MenuItem>
                                                                    <MenuItem onClick={handleClose2}>GIF To JPG</MenuItem>
                                                                    <MenuItem onClick={handleClose2}>TIFF To JPG</MenuItem>
                                                                </Menu>
                                                                
                                                             </>
                                                         ) : (
                                                             <>
                                                                {
                                                                     page === 'All Tools' ? (
                                                                         <>
                                                                          <Tab key={index} label={page} id="basic-button3" 
                                                                            aria-controls={open3 ? 'basic-menu3' : undefined}
                                                                            aria-haspopup="true"
                                                                            aria-expanded={open3 ? 'true' : undefined}
                                                                            onClick={handleClick3} />
                                                                            <ArrowDropDownIcon sx={{ marginLeft: "-20px", marginBottom: "-6px"}} />

                                                                            <Menu
                                                                                id="basic-menu3"
                                                                                anchorE3={anchorE3}
                                                                                open={open3}
                                                                                onClose={handleClose3}
                                                                                MenuListProps={{
                                                                                'aria-labelledby': 'basic-button3',
                                                                                }}
                                                                            >
                                                                                <MenuItem onClick={handleClose3}>JPG To PDF</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>Word To PDF</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>Excel To PDF</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>PowerPoint To PDF</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>PDF To JPG</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>PDF To Word</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>PDF To Excel</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>PDF To PowerPoint</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>JPG To JPEG</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>JPG To PNG</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>JPG To GIF</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>JPG To TIFF</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>JPEG To JPG</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>PNG To JPG</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>GIF To JPG</MenuItem>
                                                                                <MenuItem onClick={handleClose3}>TIFF To JPG</MenuItem>
                                                                            </Menu>
                                                                         </>
                                                                     ) : (
                                                                        <Tab key={index} label={page} />
                                                                     )
                                                                }
                                                             </>
                                                         )
                                                     }
                                                     </>
                                                 )
                                             }
                                            
                                         </div>
                                     ))
                                 }
                            </Tabs>
                            <Button sx={{ marginLeft: "auto", color:"#fff"}} variant='text'> Login </Button>
                            <Button sx={{ marginLeft: "5px", color:"#fff"}} variant='text' > Sign Up </Button>
                        </>
                    )
                }
                {/* <Typography>
                    Cenverto
                </Typography> */}
            </Toolbar>
        </AppBar>
      </React.Fragment>
    
  )
}

export default Header