import { Space, Flex, Image } from 'antd';
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

class CollegeDepartmentScheduler extends React.Component {

    render() {
        return (
            <Box className="Theme">
                <header className="CDS-header">
                    <h1>College Department Scheduler: Sr Project</h1>
                    <h4>Senior Project 2021 for Bachelor's Graduation</h4>
                </header>
                <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                    <Flex vertical align='center'>
                        <Card className={"InfoCard"} variant="outlined">
                            <h4>College Department Scheduler</h4>
                            <Divider />
                            <p>
                                For my Senior Project, completed Spring 2021, I and my team of four were tasked with 
                                creating a simple software solution to optimize and save time of a department scheduler 
                                and assist them with generating schedules for each semester.  Our application would 
                                be provided course data, faculty preferences, and day and time period data, and in 
                                turn, produce a single possible schedule for the Department Scheduler. 
                            </p> 
                                <Divider />
                            <p>
                                A major portion of this project was the scheduler algorithm, which I spearheaded its
                                design and implementation.  It had the option to prioritize schedule generation with 
                                room capacity effeciency or faculty preferences.  
                            </p>
                        </Card>
                        <Card className={"InfoCard"} variant="outlined">
                            <Image src="/stock1.png" alt="Dark Obsidian Fountain containing a portal home." />
                        </Card>
                        <Card className={"InfoCard"} variant="outlined">
                            <h4>The Scheduler Algorithm and Sheets Data Persistence</h4>
                            <Divider />
                            <p>
                                The project was completed in a modular archetecure design, and the two major modules 
                                that I was responsible for were the Scheduler Algorithm and the Sheets Utilities.  
                                Google Sheets API in Java was used to save user data and schedules remotely, as well 
                                as for data inputs from XLSX files provided by the Department Schedulers.
                            </p> 
                                <Divider />
                            <p>
                                As mentioned before, the Scheduler Algorithm has two solving methods, one prioritizing 
                                preferences, and one prioritizing seating efficiency.  When the Scheduler Algorithm is 
                                tasked with matching courses with rooms, it sorts the list holding the rooms by size, 
                                then the courses by either max seating or preliminary seating.  It then will match the 
                                smallest room a given course can fit in, until all the courses are filled or there are 
                                no rooms left. 
                            </p> 
                            <p>
                                Alternatively, the Scheduler can match rooms based on faculty preferences.
                                Different faculty members can have weights attached to their preferences, so theirs can 
                                be prioritezed over others.  Factors in determining weight are tenure, and class size.
                            </p> 
                                <Divider />
                            <p>

                                In the demonstration used to graduate, the Algorithm was set to prioritize faculty 
                                preferences. This is done by creating hashmaps with two primary keys, one for the room 
                                and one for the period, saving time by verifying room and time availability with key 
                                check. The algorithm will iterate through all of the preferences and either schedule a 
                                course for a room and time if available, or iterate through times and rooms to find a 
                                close as possible match.              
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
                                        href={"https://github.com/knish502/CS499-group-d"}
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

export default CollegeDepartmentScheduler;