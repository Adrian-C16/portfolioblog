import TechIcon from "./TechIcon";
import '../index.css'

function PostCard({ post, onClick }) {
    const handleClick = () => {
        onClick(post);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(post);
        }
    };

    return (
       <article
            className="project-card"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label={`Ver detalles de ${post.title}`}
            style={{cursor:'pointer'}}
        >
            {post.image && (
                <div className="project-image-container">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="project-image"
                        onError={(e) => {
                            e.target.onError = null;
                            e.target.src = 'https://placehold.co/800x400/1a1a1a/ffffff?text=Imagen+no+disponible';

                        }}
                    />
                </div>
            )}

            <div className="project-content">
                <h3 className="project-title">{post.title}</h3>
                {post.technologies?.length > 0 && (
                    <div className="project-technologies" aria-label="Tecnologías utilizadas">
                        {post.technologies.slice(0, 3).map((tech, index)=>(
                            <TechIcon key={index} tech={tech} />
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}                 


export default PostCard;