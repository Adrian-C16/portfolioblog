import { Link } from "react-router-dom";
import '../index.css'

function PostCard({ post, onClick }) {
    const handleDetailsClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className='project-card' onClick={onClick} style={{ cursor: 'pointer'}}>
            {post.image && (
                <div className="project-image-container">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="project-image"
                        onError={(e) => {
                            e.target.onError = null;
                            e.target.src = 'https://via.placeholder.com/400x200?text=Project+Image';
                        }}
                    />
                </div>
            )}
            <div className="project-content">
                <h2 className="project-title">{post.title}</h2>
                <p className="project-excerpt">{post.excerpt}</p>

                {post.tags && post.tags.length > 0 && (
                    <div className="project-tags">
                        {post.tags.map((tag, index) => (
                            <span key={index} className="project-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="project-links">
                    <button
                        onClick={handleDetailsClick}
                        className="project-link"
                    >
                        Ver Detalles
                    </button>
                    {post.demo && (
                        <a
                            href={post.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link demo-link"
                            onClick={ (e) => e.stopPropagation()}
                        >
                            Ver Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PostCard;