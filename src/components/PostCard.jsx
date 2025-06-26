import { Link } from "react-router-dom";
import '../index.css'

function PostCard({ post }) {
    return (
        <div className='post-card'>
            <h2 className='post-title'>{post.title}</h2>
            <p className='post-excerpt'>{post.excerpt}</p>
            <p className='post-meta'>
                Publicado por {post.author} el {post.date}
            </p>
            <Link to={`/post/${post.id}`} className='read-more'>
                Leer más →
            </Link>
        </div>
    );
}

export default PostCard;