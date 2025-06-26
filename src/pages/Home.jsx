import '../index.css';
import {posts} from '../data/posts.js';
import HeroIntro from '../components/HeroIntro.jsx';
import PostCard from '../components/PostCard.jsx';
 
function Home() {
    return (
        <div className='home'>
            <HeroIntro />
            <h1 className='home-title'>Últimas Publicaciones</h1>
            <div className='post-list'>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Home;