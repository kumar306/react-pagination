import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import './App.css';
import Posts from './components/posts';
import PageNumbers from './components/pagenumbers';

//QUERY https://jsonplaceholder.typicode.com/comments with pagination

const App = () => {

  const [posts,setposts] = useState([]);
  const [postsperpage, setpostsperpage] = useState(10);
  const [pagenumber, setpagenumber] = useState(1);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res =>  {
      setloading(false);
      setposts(res.data);
      setloading(true);
    })
    .catch(err => console.log(err));
  }, [])
  
  const paginate = (number) => setpagenumber(number);

const lastpostindex=pagenumber*postsperpage;
const firstpostindex=lastpostindex-postsperpage;
const postsinpage=posts.slice(firstpostindex,lastpostindex);

  return (
    <div className="container-fluid mt-4 text-center">
      <h1 className="p-4 bg-primary text-white">React Pagination of Comments</h1>
      <br></br>
      <PageNumbers posts_length={posts.length} postsperpage={postsperpage} paginate={paginate}/>    
    <Posts posts={postsinpage} loading={loading} /> 
    </div>
  );
};

export default App;
