import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import PostDetail from './pages/PostDetail.jsx';
import PostForm from './pages/PostForm.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import Footer from './components/Footer.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';


function App() {
    return (
        <ThemeProvider>
        <div className="app-container">
            <Navbar />

            <main className="main-content">
                <Routes>
                    <Route path = "/" element = {<Home />} />
                    <Route path = "/post/:id" element = {<PostDetail />} />
                    <Route path = "new" element = {<PostForm />} />
                    <Route path = "/edit/:id" element = {<PostForm isEditing={true} />} />
                    <Route path = "/admin" element = {<AdminPanel />} />
                </Routes>
            </main>

            <Footer />
        </div>
       </ThemeProvider>
    );
}

export default App;