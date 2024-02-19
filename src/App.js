import './App.css';
import Home from './components/home/Home'
import CsodomFooter from './components/CsodomFooter';
import CsodomNavbar from './components/CsodomNavbar';
import Missing from './components/Missing';
import { Route, Routes } from 'react-router-dom';
import Resume from './components/resume/Resume';
import UAH from './components/professional/UAH';
import SAIC from './components/professional/SAIC';
import Amazon from './components/professional/Amazon';
import Alphacraft from './components/portfolio/Alphacraft';
import JavaChessEngine from './components/portfolio/JavaChessEngine';
import CollegeDepartmentScheduler from './components/portfolio/CollegeDepartmentScheduler';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
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
              <Route path="/uahbscs" element={<UAH />} />
              <Route path="/saic" element={<SAIC />} />
              <Route path="/amazon" element={<Amazon />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Missing />} />
            </Routes>
          </Box>
        </Container>
        <CsodomFooter />
      </ThemeProvider>
    </div>
  );
}

export default App;