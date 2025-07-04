import { Link } from "react-router-dom";
import TechIcon from "./TechIcon";
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
                    <h3 className="project-title">{post.title}</h3>

                    {post.technologies?.length > 0 && (
                        <div className="project-technologies">
                            {post.technologies.slice(0, 3).map((tech, index) => (
                                <TechIcon key={index} tech={tech} />
                            ))}
                        </div>
                    )}
                </div>
            </div>    
    );
}                 


            

            


export default PostCard;