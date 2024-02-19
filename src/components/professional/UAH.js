import { Space, Flex } from 'antd';
import * as React from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

class UAH extends React.Component {

    render() {
        return (
            <Box className="Theme">
                <header className="UAH-header">
                    <h1>University of Alabama in Huntsville</h1>
                    <b>Bachelor's of Computer Science</b>
                    <i> Completed Spring 2021</i>
                </header>
                <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                    <Flex vertical align='center'>
                        <Card className={"InfoCard"} variant="outlined">
                            <h4>Work Summaries</h4>
                            <Divider />
                            <p>
                                Type a Bunch Here about a work summary you did.
                            </p>
                        </Card>
                    </Flex>
                </Space>
            </Box>
        )
    }
}

export default UAH;