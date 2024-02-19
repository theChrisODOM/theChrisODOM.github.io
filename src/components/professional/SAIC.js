import { Space, Flex } from 'antd';
import * as React from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

class SAIC extends React.Component {

    render() {
        return (
            <Box className="Theme">
                <header className="SAIC-header">
                    <h1>SAIC</h1>
                    <b>Software Development Engineer</b>
                    <i>May 2021 to May 2022</i>
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

export default SAIC;