import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ThemeList from './components/themes/themelist/ThemeList';
import PostList from './components/posts/postlist/PostList';
import CadastroPost from './components/posts/postregister/PostRegister';
import CadastroTema from './components/themes/themeregister/ThemeRegister';
import DeletarPostagem from './components/posts/postdelete/PostDelete';
import DeletarTema from './components/themes/themedelete/ThemeDelete';

function App() {
  return(
    <Router>
      <Navbar/>
      <div style={{minHeight: '100vh'}}>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/themes" element={<ThemeList/>}/>
          <Route path="/posts" element={<PostList/>}/>
          <Route path="/formularioPostagem" element={<CadastroPost/>}/>
          <Route path="/formularioPostagem/:id" element={<CadastroPost/>}/>
          <Route path="/formularioTema" element={<CadastroTema/>}/>
          <Route path="/formularioTema/:id" element={<CadastroTema/>}/>
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem/>}/>
          <Route path="/deletarTema/:id" element={<DeletarTema/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
    )
}

export default App;

/*
<Grid container spacing={3}>
  <Grid item xs={12} sm={12}>
    <Home />
      </Grid>
        <Grid item xs={12} sm={6}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
      </Grid>
*/