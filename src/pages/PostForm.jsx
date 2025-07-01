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
        date: new Date().toISOString().split('T')[0], // Fecha actual por defecto
        image: '',
        repo: '',
        demo: '',
        tags: '',
    });

    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

    useEffect(() => {
        if (isEditing && postToEdit) {
            setFormData({
                title: postToEdit.title ||'',
                excerpt: postToEdit.excerpt || '',
                content: postToEdit.content || '',
                author: postToEdit.author || '',
                date: postToEdit.date || new Date().toISOString().split('T')[0],
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

    const validateUrl = (url) => {
        if (!url) return true; // URL vacía es válida (opcional)
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.title.trim()) newErrors.title = 'El título es obligatorio';
        if (!formData.content.trim()) newErrors.content = 'El contenido es obligatorio';
        if (formData.image && !validateUrl(formData.image)) newErrors.image = 'URL de imagen no válida';
        if (formData.repo && !validateUrl(formData.repo)) newErrors.repo = 'URL de repositorio no válida';
        if (formData.demo && !validateUrl(formData.demo)) newErrors.demo = 'URL de demo no válida';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            setSubmitStatus({ success: false, message: 'Por favor, corrige los errores en el formulario.' });
            return;
        }

        try {
            const postData = {
                ...formData,
                date: formData.date || new Date().toISOString(),
                tags: formData.tags ? formData.tags.split(",").map(t => t.trim()).filter(Boolean) : []
            };

            // Simular una llamada a la API
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            if (isEditing) {
                console.log('Post actualizado: ', { id, ...postData });
                setSubmitStatus({ success: true, message: 'Proyecto actualizado exitosamente.' });
            } else {
                console.log('Nuevo post creado: ', postData);
                setSubmitStatus({ success: true, message: 'Proyecto creado exitosamente.' });
                // Resetear el formulario después de un envío exitoso
                setFormData({
                    title: '',
                    excerpt: '',
                    content: '',
                    author: '',
                    date: new Date().toISOString().split('T')[0],
                    image: '',
                    repo: '',
                    demo: '',
                    tags: ''
                });
            }
            
            // Redirigir después de 2 segundos
            setTimeout(() => {
                navigate('/');
            }, 2000);
            
        } catch (error) {
            console.error('Error al guardar el proyecto:', error);
            setSubmitStatus({ 
                success: false, 
                message: 'Ocurrió un error al guardar el proyecto. Por favor, inténtalo de nuevo.' 
            });
        }
    };

    return (
        <div className="post-form">
            <h2>{isEditing ? 'Editar Proyecto' : 'Nuevo Proyecto'}</h2>
            
            {submitStatus.message && (
                <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
                    {submitStatus.message}
                </div>
            )}
            
            <form onSubmit={handleSubmit} noValidate>
                <label>Título</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className={errors.title ? 'error-input' : ''}
                />
                {errors.title && <span className="error-message">{errors.title}</span>}

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
                    className={errors.content ? 'error-input' : ''}
                />
                {errors.content && <span className="error-message">{errors.content}</span>}

                <div className="form-group">
                    <label>Fecha</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={errors.date ? 'error-input' : ''}
                    />
                    {errors.date && <span className="error-message">{errors.date}</span>}
                </div>

                <div className="form-group">
                    <label>Autor</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className={errors.author ? 'error-input' : ''}
                    />
                    {errors.author && <span className="error-message">{errors.author}</span>}
                </div>

                <div className="form-group">
                    <label>Imagen (URL)</label>
                    <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://ejemplo.com/imagen.jpg"
                        className={errors.image ? 'error-input' : ''}
                    />
                    {errors.image && <span className="error-message">{errors.image}</span>}
                    {formData.image && (
                        <div className="image-preview">
                            <img 
                                src={formData.image} 
                                alt="Vista previa" 
                                onError={(e) => {
                                    e.target.onError = null;
                                    e.target.src = 'https://via.placeholder.com/300x150?text=Imagen+no+disponible';
                                }}
                            />
                        </div>
                    )}
                </div>

                <label>Tags</label>
                <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="react, javascript, portfolio"
                />

                <div className="form-group">
                    <label>Repositorio (URL)</label>
                    <input
                        type="url"
                        name="repo"
                        value={formData.repo}
                        onChange={handleChange}
                        placeholder="https://github.com/usuario/repositorio"
                        className={errors.repo ? 'error-input' : ''}
                    />
                    {errors.repo && <span className="error-message">{errors.repo}</span>}
                </div>

                <div className="form-group">
                    <label>Demo (URL)</label>
                    <input
                        type="url"
                        name="demo"
                        value={formData.demo}
                        onChange={handleChange}
                        placeholder="https://midemo.com"
                        className={errors.demo ? 'error-input' : ''}
                    />
                    {errors.demo && <span className="error-message">{errors.demo}</span>}
                </div>

                <div className="form-actions">
                    <button type="submit" className="submit-button">
                        {isEditing ? 'Actualizar' : 'Crear'} Proyecto
                    </button>
                    <button 
                        type="button" 
                        className="cancel-button"
                        onClick={() => navigate('/')}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );

}

export default PostForm