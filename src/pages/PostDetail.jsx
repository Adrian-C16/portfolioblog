import { useParams } from "react-router-dom";
import {posts} from '../data/posts.js';
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import '../index.css';

function PostDetail() {
    const {id} = useParams();
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="project-not-found">
                Proyecto no encontrado.
            </div>
        );
    }

    return (
        <div className="project-detail">
            <Link to="/" className="back-button">
                <FaArrowLeft /> Volver a proyectos
            </Link>

            <div className="project-header">
                <h1 className="project-title">{post.title}</h1>
                <div className="project-meta">
                    {post.date && (
                        <span className="project-date">
                            {new Date(post.date).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    )}
                    {post.tags && post.tags.length > 0 && (
                        <div className="project-tags">
                            {post.tags.map((tag, index) => (
                                <span key={index} className="project-tag">{tag}</span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="project-content">
                {post.image && (
                    <div className="project-image-container">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="project-featured-image"
                            onError={(e) => {
                                e.target.onError = null;
                                e.target.src = 'https://via.placeholder.com/800x400?text=Project+Image';
                            }}
                        />
                    </div>
                )}

                <div className="project-description">
                    <h2>Descripción del Proyecto</h2>
                    <p>{post.content || post.excerpt}</p>
                </div>

                {(post.repo || post.demo) && (
                    <div className="project-links">
                        {post.repo && (
                            <a 
                                href={post.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <FaGithub /> Ver Código
                            </a>
                        )}

                        {post.demo && (
                            <a
                                href={post.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link demo-link"
                            >
                                <FaExternalLinkAlt /> Ver Demo
                            </a>
                        )}
                    </div>
                )}
            </div>
            
        </div>
    );
}

export default PostDetail;