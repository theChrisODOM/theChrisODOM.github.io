import { Space, Flex, Image } from 'antd';
import * as React from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

class Amazon extends React.Component {

    render() {
        return (
            <Box className="Theme">
                <header className="Amazon-header">
                    <Image height={"10rem"} src="/amzn.jpg"></Image>
                    <b>Software Development Engineer L4</b>
                    <i> May 2022 - Present</i>
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

export default Amazon;