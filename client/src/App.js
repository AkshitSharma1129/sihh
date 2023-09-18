
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Courses from './pages/CoursesPage'
import PostPage from './pages/PostPage';



function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SIH</title>
      </Helmet>
   
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/courses" element={<Courses />} />

           

          </Route>
        </Routes>
     
    </HelmetProvider>
  );
}

export default App;
