import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";
import '../index.css';

function PostForm ({isEditing = false}) {
    const {id} = useParams();
    const navigate = useNavigate();

    const postToEdit = isEditing
    ? posts.find((p) => p.id === parseInt(id))
    : null;

    const [formData, setFormData] = useState ({
        title: '',
        excerpt: '',
        content: '',
        author: '',
        image: '',
        repo: '',
        demo: '',
        tags: '',
    });

    useEffect(() => {
        if (isEditing && postToEdit) {
            setFormData({
                title: postToEdit.title ||'',
                excerpt: postToEdit.excerpt || '',
                content: postToEdit.content || '',
                author: postToEdit.author || '',
                image: postToEdit.image || '',
                repo: postToEdit.repo || '',
                demo: postToEdit.demo || '',
                tags: postToEdit.tags ? postToEdit.tags.join(","): ''
            });
        }
    }, [isEditing, postToEdit]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            ...formData,
            tags: formData.tags.split(",").map(t => t.trim()).filter(Boolean)
        };

        if (isEditing) {
            console.log('Post actualiado: ', {id, ...postData});
        } else {
            console.log('Nuevo post creado: ', postData);
        }

        navigate('/');
    };

    return (
        <div className="post-form">
            <h2>{isEditing ? 'Editar Post' : 'Nuevo Post'}</h2>
            <form onSubmit={handleSubmit}>
                <label>Título</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <label>Extracto</label>
                <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    rows="3"
                />

                <label>Contenido</label>
                <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    rows="7"
                    required
                />

                <label>Autor</label>
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />

                <label>Imagen</label>
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                />

                <label>Tags</label>
                <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="react, javascript, portfolio"
                />

                <label>Repositorio</label>
                <input
                    type="text"
                    name="repo"
                    value={formData.repo}
                    onChange={handleChange}
                />

                <label>Demo</label>
                <input 
                    type="text" 
                    name="demo"
                    value={formData.demo}
                    onChange={handleChange}
                    />

                <button type="submit">{isEditing ? 'Actualizar' : 'Publicar'}</button>
            </form>
        </div>
    );

}

export default PostForm