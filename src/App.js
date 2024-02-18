import './App.css';
import Home from './components/home/Home'
import CsodomNavbar from './components/CsodomNavbar';
import Missing from './components/Missing';
import { Route, Routes } from 'react-router-dom';
import Alphacraft from './components/portfolio/Alphacraft';
import JavaChessEngine from './components/portfolio/JavaChessEngine';
import Resume from './components/resume/Resume';
import CollegeDepartmentScheduler from './components/portfolio/CollegeDepartmentScheduler';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import { Footer } from 'antd/es/layout/layout';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Container maxWidth="lg" className="AppContainer">
          <Box>
            <CsodomNavbar />
            <Routes>
              <Route path="/alphacraft" element={<Alphacraft />} />
              <Route path="/collegedepartmentscheduler" element={<CollegeDepartmentScheduler />} />
              <Route path="/javachessengine" element={<JavaChessEngine />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Missing />} />
            </Routes>
          </Box>
        </Container>
        <Container maxWidth="lg" className="AppFooter">
          <Footer className="AppFooter-content">
            <p>
              <Card className="AppFooterCard"variant="outlined">
                Hello World | hireme.csodom.com | Last Updated 2/17/2024
              </Card>
            </p>
          </Footer>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;