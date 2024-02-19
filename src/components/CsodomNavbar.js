import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import { Flex, Space } from 'antd';
import { useWindowSize } from "@uidotdev/usehooks";
import { Divider } from "@mui/material";

export const CsodomNavbar = () => {
    const [anchorElPortfolio, setAnchorElPortfolio] = React.useState(null);
    const [anchorElMobileMenu, setAnchorElMobileMenu] = React.useState(null);
    const [anchorElSocials, setAnchorElSocials] = React.useState(null);
    const openPortfolio = Boolean(anchorElPortfolio);
    const openSocials = Boolean(anchorElSocials);
    const openMobileMenu = Boolean(anchorElMobileMenu);
    const handleClickPortfolio = (event) => {
        setAnchorElPortfolio(event.currentTarget);
    };
    const handleClickMobileMenu = (event) => {
        setAnchorElMobileMenu(event.currentTarget);
    };
    const handleClickSocials = (event) => {
        setAnchorElSocials(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElPortfolio(null);
        setAnchorElMobileMenu(null);
        setAnchorElSocials(null);
    };
    const size = useWindowSize();

    return (
        <div className="CsodomNavbar">
            <Card variant="outlined">
                { size.width > 700 && (
                    <Flex justify="space-around">
                        <Space size={"large"}>
                            <p>CSODOM.com</p>
                            <Button
                                id="basic-button"
                                href={"/#/"}
                                onClick={() => {}}
                            >
                                Home
                            </Button>
                            <Button
                                id="basic-button"
                                aria-controls={anchorElPortfolio ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={anchorElPortfolio ? 'true' : undefined}
                                onClick={handleClickPortfolio}
                            >
                                Portfolio
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorElPortfolio}
                                open={openPortfolio}
                                onClose={handleClose} 
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={() => {window.location = "/#/resume"; setAnchorElPortfolio(null);}}>Resume</MenuItem>
                                <MenuItem>Certifications</MenuItem>
                                <Divider />
                                <MenuItem disabled>Professional History</MenuItem>
                                <MenuItem onClick={() => {window.location = "/#/uahbscs"; setAnchorElPortfolio(null);}}>Bachelor's of Science</MenuItem>
                                <MenuItem onClick={() => {window.location = "/#/saic"; setAnchorElPortfolio(null);}}>SAIC</MenuItem>
                                <MenuItem onClick={() => {window.location = "/#/amazon"; setAnchorElPortfolio(null);}}>Amazon.com</MenuItem>
                                <Divider />
                                <MenuItem disabled>Personal/School Projects</MenuItem>
                                <MenuItem onClick={() => {window.location = "/#/alphacraft"; setAnchorElPortfolio(null);}}>Alphacraft</MenuItem>
                                <MenuItem onClick={() => {window.location = "/#/collegedepartmentscheduler"; setAnchorElPortfolio(null);}}>College Department Scheduler</MenuItem>
                                <MenuItem onClick={() => {window.location = "/#/javachessengine"; setAnchorElPortfolio(null);}}>Java Chess Engine</MenuItem>
                            </Menu>
                        </Space>
                        <Space>  
                            <Button
                                id="basic-button"
                                aria-controls={anchorElSocials ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={anchorElSocials ? 'true' : undefined}
                                onClick={handleClickSocials}
                            >
                                Socials
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorElSocials}
                                open={openSocials}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={() => {window.location = "https://www.linkedin.com/in/csodom/"}}>Linkedin</MenuItem>
                                <MenuItem onClick={() => {window.location = "https://github.com/theChrisODOM"}}>GitHub</MenuItem>
                                <MenuItem onClick={() => {window.location = "https://stackoverflow.com/users/16145491/chrisodom"}}>Stack Overflow</MenuItem>
                            </Menu>
                            <Button
                                id="basic-button"
                                href={"mailto:hireme@csodom.com"}
                                onClick={() => {}}
                            >
                                Contact Me
                            </Button>
                        </Space>
                    </Flex>
                )}
                {  size.width <= 700 && (
                    <Flex justify="space-around">
                        <Space size={"large"}>
                            <Button
                                id="menu-button"
                                onClick={handleClickMobileMenu}
                                aria-controls={anchorElMobileMenu ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={anchorElMobileMenu ? 'true' : undefined}
                            >
                                <MenuIcon fontSize="medium"/> <b>Menu</b>
                            </Button>
                            <p>CSODOM.com | <i>Mobile View</i></p>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorElMobileMenu}
                                open={openMobileMenu}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': "menu-button",
                                }}
                            >
                                <MenuItem onClick={() => {window.location = "/#"; setAnchorElMobileMenu(null);}}>Home</MenuItem>
                                <Divider />
                                <MenuItem onClick={() => {window.location = "/#/resume"; setAnchorElMobileMenu(null);}}>Resume</MenuItem>
                                <MenuItem>Certifications</MenuItem>
                                <Divider />
                                <MenuItem disabled>Professional History</MenuItem>
                                <MenuItem onClick={() => {window.location = "/#/uahbscs"; setAnchorElMobileMenu(null);}}>Bachelor's of Science</MenuItem>
                                <MenuItem onClick={() => {window.location = "/#/saic"; setAnchorElMobileMenu(null);}}>SAIC</MenuItem>
                                <MenuItem onClick={() => {window.location = "/#/amazon"; setAnchorElMobileMenu(null);}}>Amazon.com</MenuItem>
                                <Divider />
                                <MenuItem disabled>Personal/School Projects</MenuItem>
                                <MenuItem onClick={() => {window.location = "/#/alphacraft"; setAnchorElMobileMenu(null);}}>Alphacraft</MenuItem>
                                <MenuItem onClick={() => {window.location = "/#/collegedepartmentscheduler"; setAnchorElMobileMenu(null);}}>College Department Scheduler</MenuItem>
                                <MenuItem onClick={() => {window.location = "/#/javachessengine"; setAnchorElMobileMenu(null);}}>Java Chess Engine</MenuItem>
                                <Divider />
                                <MenuItem disabled>Socials</MenuItem>  
                                <MenuItem onClick={() => {window.location = "https://www.linkedin.com/in/csodom/"}}>Linkedin</MenuItem>
                                <MenuItem onClick={() => {window.location = "https://github.com/theChrisODOM"}}>GitHub</MenuItem>
                                <MenuItem onClick={() => {window.location = "https://stackoverflow.com/users/16145491/chrisodom"}}>Stack Overflow</MenuItem>
                                <Divider />
                                <MenuItem onClick={() => {window.location = "mailto:hireme@csodom.com"}}>Contact Me</MenuItem>
                            </Menu>
                        </Space>
                    </Flex>
                )}
            </Card>
        </div>
    );
}

export default CsodomNavbar;