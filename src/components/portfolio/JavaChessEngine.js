import { Space, Flex, Image } from 'antd';
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

class JavaChessEngine extends React.Component {

    render() {
        return (
            <Box className="Theme">
                <header className="JavaChess-header">
                    <h1>Java Chess Engine</h1>
                    <h4>Demonstartion of Data Structures and Algorithms in Java</h4>
                </header>
                <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                    <Flex vertical align='center'>
                        <Card className={"InfoCard"} variant="outlined">
                            <h4> Doki Doki Chess Club:  <i>A Chess Game made in Java</i></h4>
                            <Divider />
                            <p>
                                For my Object Oriented In Java course, my project team of four agreed to build a chess 
                                engine from scratch.  This project would be an effective method of showing off design 
                                patters, as well as our ability to convert logical ideas and rules into algorithms.
                            </p> 
                                <Divider />
                            <p>
                                The name Doki Doki Chess Club derived from the ability to reskin the chess pieces into 
                                adorable pixelated cartoon people, in reference to a culture hit game Doki Doki Literature 
                                Club. 
                            </p>
                        </Card>
                        <Card className={"InfoCard"} variant="outlined">
                            <Image height={"20rem"} src="/queen_check.png" alt="A queen under attack on a chess boardc." />
                        </Card>
                        <Card className={"InfoCard"} variant="outlined">
                            <h4>isPairUnderAttack() Function: <i>Performing Check and Mate Determiniations</i></h4>
                            <Divider />
                            <p>
                                The core of all Chess Engines is the ability to determine if a board state is in 
                                either <b>check</b> or <b>check-mate</b>.  Our team had designed the Chess Engine to store 
                                a list of possible moves for a player in each of their Chess Pieces, respectively.  
                                I had utilized this list to construct a super list of moves for the Player, which is used 
                                to determine before a turn if they were in <b>check</b> or <b>check-mate</b>.
                                This super list is also used when a Player selects a Piece to move, making sure that they 
                                are not given an option to put themselves into <b>check</b>.
                            </p>
                                <Divider />
                            <p>
                                <code>isPairUnderAttack() function</code> gets its name from the Data Object <code>Pair</code>, which is a single 
                                tile on the Chess Board.  The name Pair was chosen because the first two attributes of the 
                                Pair were its X and Y cordinates.  This function, and derivations of it are located in the Board Model Class.
                            </p> 
                        </Card>
                        <Card className={"InfoCard"} variant="outlined">
                            <Image height={"20rem"} src="/fen1.png" alt="A chess board pointing to a broken chess board." />
                        </Card>
                        <Card className={"InfoCard"} variant="outlined">
                            <h4>Forsyth–Edwards Notation: <i>Simplifying Unit Testing with a Persistence Utility</i></h4>
                            <Divider />
                            <p>
                                Forsyth–Edwards Notation (FEN) is the standard notation for compiling a state of a chess 
                                board into a simple string. The goal of FEN is to contain all the necessary information 
                                to start or restart a game from a particular position. 
                            </p> 
                                <Divider />
                            <p>
                                While developing the PairAttack Utility Function, it dawned on our team that we did not have 
                                a standard for unit testing new game functions.  We would have complex code to define a set of
                                pieces, and where those pieces were on a board, to simulate edge cases.  This made it difficult
                                for us to scale our tests, and implement new features.
                            </p> 
                            <p>
                                In my research, I discovered there was a Chess Standard notation for serialzing board states into 
                                strings called FEN Notation.  I took bias for action outside the scope of the project, to create 
                                a Utility that would both serialize and de-serialize board states for Doki Doki Chess Club.  As a
                                result, our team was able to scale up our Unit Tests, as well as provide a persistence feature to
                                our users. 
                            </p> 
                        </Card>
                        <h2>
                            Additional Links
                        </h2>
                        <Card className={"InfoCard"} variant="outlined" >
                            <Space align="center" direction="horizontal" size="large">
                                <p>
                                    To view the source code of the project.  
                                </p>
                                <Button
                                        id="basic-button"
                                        href={"https://github.com/wesleyadams001/JChess"}
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

export default JavaChessEngine;