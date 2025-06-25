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
    });

    useEffect(() => {
        if (isEditing && postToEdit) {
            setFormData({
                title: postToEdit.title,
                excerpt: postToEdit.excerpt,
                content: postToEdit.content,
                author: postToEdit.author,
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

        if (isEditing) {
            console.log('Post actualiado: ', {id, ...formData});
        } else {
            console.log('Nuevo post creado: ', formData);
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

                <button type="submit">{isEditing ? 'Actualizar' : 'Publicar'}</button>
            </form>
        </div>
    );

}

export default PostForm