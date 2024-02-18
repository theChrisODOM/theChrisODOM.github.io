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

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CsodomNavbar />
        <Routes>
          <Route path="/alphacraft" element={<Alphacraft />} />
          <Route path="/collegedepartmentscheduler" element={<CollegeDepartmentScheduler />} />
          <Route path="/javachessengine" element={<JavaChessEngine />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;