import { Space, Flex, Image } from 'antd';
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

class Alphacraft extends React.Component {

    render() {
        return (
            <Box className="Theme">
                <header className="Alphacraft-header">
                    <h1>Alphacraft</h1>
                    <h4>A Minecraft 1.16 Mod made with Java and Forge</h4>
                </header>
                <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                    <Flex vertical align='center'>
                        <Card className={"InfoCard"} variant="outlined">
                            <h4>Meet the Alphacraft</h4>
                            <Divider />
                            <p>
                                A brand new dimension mod, packed full with content.  This mod contains the new 
                                dimension Alpha, which is a dark and sinister new world quite similar to the End, 
                                but instead of floating islands there are deep water trenches between each of the 
                                islands.  There are new blocks, with special abilities, new ores and tool types, 
                                differrent biomes to explore, and much more!
                            </p>
                        </Card>
                        <Card className={"InfoCard"} variant="outlined">
                            <Image src="/alpha2.png" alt="Dark Obsidian Fountain containing a portal home." />
                        </Card>
                        <Card className={"InfoCard"} variant="outlined">
                            <h4>New Dimension: <i>The Alpha</i></h4>
                            <Divider />
                            <p>
                                The dark and new dimension the Alpha is a fourth dimension for the player to explore, 
                                containing more end game content for players who have already freed the End dimension, 
                                and are looking for more RPG elements.
                            </p>
                        </Card>
                        <Card className={"InfoCard"} variant="outlined">
                            <Image src="/alpha3.png" alt="Stone Dungeon with Blue Wood Beams." />
                        </Card>
                        <Card className={"InfoCard"} variant="outlined">
                            <h4>New Structure: <i>Alpha Stronghold</i></h4>
                            <Divider />
                            <p>
                                This new stronghold structure spawns randomly in the overworld, and it contains a 
                                portal to the Alpha dimension.  Players can access the Alpha by creating special 
                                stones and placing them on the portal frame similar to how End Portals work.  The 
                                special stones can also guide players to the location of a near by Alpha Stronghold.
                            </p>
                        </Card>
                        <h2>
                            Additional Links
                        </h2>
                        <Card className={"InfoCard"} variant="outlined" >
                            <Space align="center" direction="horizontal" size="large">
                                <p>
                                    Download a copy of the Mod to install. Works with Minecraft 1.16.0 and Forge Mod Loader.
                                </p>
                                <Button
                                    id="basic-button"
                                    href={"https://www.curseforge.com/minecraft/mc-mods/alphacraft"}
                                    variant='contained'
                                > Download 0.1.0 JAR
                                </Button>
                            </Space>
                        </Card>
                        <Card className={"InfoCard"} variant="outlined" >
                            <Space align="center" direction="horizontal" size="large">
                                <p>
                                    To view the source code of the project.  
                                </p>
                                <Button
                                        id="basic-button"
                                        href={"https://github.com/theChrisODOM/AlphaCraft"}
                                        variant='contained'
                                    >
                                        Public Repository
                                </Button>
                            </Space>
                        </Card>
                    </Flex>
                </Space>
            </Box>
        )
    }
}

export default Alphacraft;