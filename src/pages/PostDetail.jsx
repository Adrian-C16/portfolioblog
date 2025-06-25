import { useParams } from "react-router-dom";
import {posts} from '../data/posts.js';
import '../index.css';

function PostDetail() {
    const {id} = useParams();
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="post-detail not-found">
                <h2>Post no encontrado.</h2>
                <p>El artículo que estás buscando no existe.</p>
            </div>
        );
    }

    return (
        <div className="post-detail">
            <h1 className="post-title">{post.title}</h1>
            <p className="post-meta">
                Publicado por {post.author} el {post.date}
            </p>
            <div className="post-content">
                {post.content.split('\n').map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                ))}
            </div>
        </div>
    );
}

export default PostDetail;