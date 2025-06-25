import { useState } from "react";
import { Link } from "react-router-dom";
import { posts as initialPosts } from '../data/posts';
import '../index.css';

function AdminPanel() {
    const [postList, setPostList] = useState(initialPosts);

    const handleDelete = (id) => {
        if (window.confirm('¿Seguro que quieres eliminar este post?')) {
            setPostList((prevPosts) => prevPosts.filter((post) => post.id !== id));
            console.log(`Post con ID ${id} eliminado.`);
        }
    };

    return (
        <div className="admin-panel">
            <h2>Panel de Administración</h2>
            <div className="admin-actions">
                <Link to="/new" className="admin-button">
                     Nuevo Post
                </Link>
            </div>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {postList.length > 0 ? (
                        postList.map((post) => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>{post.author}</td>
                                <td>{post.date}</td>
                                <td className="actions">
                                    <Link 
                                        to={`/edit/${post.id}`} 
                                        className="admin-button small"
                                    >
                                         Editar
                                    </Link>
                                    <button 
                                        onClick={() => handleDelete(post.id)} 
                                        className="admin-button small danger"
                                    >
                                         Borrar
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} style={{ textAlign: "center" }}>
                                No hay posts disponibles.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPanel;