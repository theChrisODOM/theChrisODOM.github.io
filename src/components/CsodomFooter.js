import { Card, Container } from "@mui/material"
import { Footer } from "antd/es/layout/layout"

export const CsodomFooter = () => {

    return (
        <Container maxWidth="lg" className="AppFooter">
            <Footer className="AppFooter-content">
            <p>
                <Card className="AppFooterCard"variant="outlined">
                    "Do not pray for easy lives, pray to be stronger men" JFK | hireme.csodom.com | Last Updated 2/18/2024
                </Card>
            </p>
            </Footer>
        </Container>
    )
}

export default CsodomFooter;
