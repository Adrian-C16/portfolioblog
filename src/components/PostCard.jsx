import { Link } from "react-router-dom";
import '../index.css'

function PostCard({post}) {
    return (
        <div className="post-card">
            <h2 className="post-card-tittle">{post.title}</h2>
            <p className="post-card-meta">
                Publicado por {post.author} el {post.date}
            </p>
            <p className="post-card-excerpt">{post.excerpt}</p>
            <Link to = {`/post/${post.id}`} className="post-card-link">
            Leer más →
            </Link>
        </div>
    );
}

export default PostCard;