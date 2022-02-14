import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import TableComponent from './components/TableComponent';
import BlogsPage from './components/BlogsPage';
import Blog from './components/Blog';
import UserBlogs from './components/UserBlogs';
function App() {
  
  return (  
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<TableComponent/>}></Route>
        <Route exact path="/blogsPage" element={<BlogsPage/>}></Route>
        <Route path="/blogsPage/:id" element={<UserBlogs/>}></Route>
        <Route path="/blog/:id/:postId" element={<Blog/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
