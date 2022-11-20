import './App.css';
import { useState, useEffect } from 'react';

import { Post } from './components/Types';

import { PostForm } from './components/PostForm';
import { PostItem } from './components/PostItem';

import { api } from './components/Api';

function App() {

  const [posts, setPosts] = useState<Post[]>([]);

  const loadPosts = async () => {
    const json = await api.getAllPosts();
    setPosts(json);
  };

  useEffect(() => {
    loadPosts();
  }, []);


  const handleClick = async (title: string, body: string) => {

    const json = await api.addNewPost(title, body, 1);
    if (json.id) {
      alert('Post adicionado com sucesso!!');
      console.log(json);
    } else {
      alert('Aconteceu algum ERRO!!');
    };
  };


  return (
    <div>
      <header>
        <PostForm onAdd={handleClick} />
      </header>
      <section>
        <div className='body'>
          <div className='body-posts'>
            {posts.map((item, index) => {
              return (
                <PostItem data={item} key={index} />
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
