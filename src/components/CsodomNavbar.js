import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Flex, Space } from 'antd';
import '@fontsource/roboto/400.css';

export const CsodomNavbar = () => {
    const [anchorElPortfolio, setAnchorElPortfolio] = React.useState(null);
    const [anchorElSocials, setAnchorElSocials] = React.useState(null);
    const openPortfolio = Boolean(anchorElPortfolio);
    const openSocials = Boolean(anchorElSocials);
    const handleClickPortfolio = (event) => {
        setAnchorElPortfolio(event.currentTarget);
    };
    const handleClickSocials = (event) => {
        setAnchorElSocials(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElPortfolio(null);
        setAnchorElSocials(null);
    };
     
    return (
        <div className="CsodomNavbar">
            <Flex justify="space-around">
                <Space size={"large"}>
                    <p >CSODOM.com</p>
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
                        <MenuItem onClick={() => {window.location = "/#/alphacraft"}}>Alphacraft</MenuItem>
                        <MenuItem onClick={() => {window.location = "/#/collegedepartmentscheduler"}}>College Department Scheduler</MenuItem>
                        <MenuItem onClick={() => {window.location = "/#/javachessengine"}}>Java Chess Engine</MenuItem>
                    </Menu>
                    <Button
                        id="basic-button"
                        href={"/#/resume"}
                        onClick={() => {}}
                    >
                        Resume
                    </Button>
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
                        <MenuItem onClick={() => {window.location = "https://www.linkedin.com/in/csodom/"}}>LinkedIN</MenuItem>
                        <MenuItem onClick={() => {window.location = "https://github.com/theChrisODOM"}}>GitHub</MenuItem>
                        <MenuItem onClick={() => {window.location = "https://stackoverflow.com/users/16145491/chrisodom"}}>Stackoverflow</MenuItem>
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
        </div>
    );
}

export default CsodomNavbar;