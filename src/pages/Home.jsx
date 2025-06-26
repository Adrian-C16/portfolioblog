import '../index.css';
import {Link} from 'react-router-dom';
import {posts} from '../data/posts.js';
import HeroIntro from '../components/HeroIntro.jsx';
 


function Home() {
    return (
        <div className='home'>
            <HeroIntro />
            <h1 className='home-title'>Últimas Publicaciones</h1>
            <div className='post-list'>
                {posts.map((post) => (
                    <div key={post.id} className='post-card'>
                        <h2 className='post-title'>{post.title}</h2>
                        <p className='post-excerpt'>{post.excerpt}</p>
                        <p className='post-meta'>
                            Publicado por {post.author} el {post.date}
                        </p>
                        <Link to = {`/post/${post.id}`} className='read-more'>
                            Leer más →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;