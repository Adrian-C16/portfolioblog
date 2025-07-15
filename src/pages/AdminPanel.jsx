import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { posts as initialPosts } from '../data/posts';
import '../index.css';


function AdminPanel() {
    const navigate = useNavigate();
    const [postList, setPostList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //simular carga de datos
        setTimeout(() => {
            setPostList(initialPosts);
            setIsLoading(false);
        }, 500);
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('¿Seguro que quieres eliminar este post?')) {
            return;
        }

        try {
            //simulación de eliminación
            await new Promise(resolve => setTimeout(resolve, 1000));
            setPostList(prev=> prev.filter(post => post.id !== id));
            setError(null);
        } catch(err) {
            setError('Error al eliminar el proyecto');
        }
    };

    const filteredPosts = postList.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="admin-panel">
            <header className="admin-header">
                <h1 className="admin-title">Panel de Administración</h1>
                <div className="admin-actions">
                    <Link to="/new" className="admin-button">
                        Nuevo Proyecto
                    </Link>
                </div>
            </header>

            <div className="admin-search">
                <input
                    type="text"
                    placeholder="Buscar proyectos..."
                    value={searchTerm}
                    onChange={ (e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            {isLoading ? (
                <div className="loading">Cargando...</div>
            ) : (
                <div className="admin-content">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPosts.length > 0 ? (
                                filteredPosts.map((post) => (
                                    <tr key={post.id}>
                                        <td>{post.title}</td>
                                        <td>{new Date(post.date).toLocaleDateString()}</td>
                                        <td className="actions">
                                            <Link 
                                                to={`/edit/${post.id}`} 
                                                className="admin-button edit"
                                            >
                                                Editar
                                            </Link>
                                            <button 
                                                onClick={() => handleDelete(post.id)} 
                                                className="admin-button small danger"
                                            >
                                                 Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="empty-state">
                                        <div className="empty-state-content">
                                            <i className="fas fa-box-open empty-state-icon"></i>
                                            <p>No hay proyectos</p>
                                            <p className="empty-state-subtext">Crea tu primer proyecto usando el botón "Nuevo Proyecto"</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default AdminPanel;