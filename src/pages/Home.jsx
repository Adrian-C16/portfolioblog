import '../index.css';
import {posts} from '../data/posts.js';
import HeroIntro from '../components/HeroIntro.jsx';
import PostCard from '../components/PostCard.jsx';
import { useState } from 'react';
import Modal from '../components/Modal.jsx';

function Home() {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState('todos');
    const [selectedProject, setSelectedProject] = useState(null);

    //Obtener todas las etiquetas únicas
    const allTags = ['todos', ...new Set(posts.flatMap(post => post.tags || []))];

    //Filtrar posts por búsqueda y etiqueta
    const filteredPosts = posts.filter(post => {
        const matchesSearch = 
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesTag = 
            selectedTag === 'todos' ||
            (post.tags && post.tags.includes(selectedTag));
    
      
            
    return matchesSearch && matchesTag;
    });

    //manejador de eventos para la modal
    const handleProjectClick = (project) => {
        setSelectedProject(project);
    }  

    return (
        <div className='home'>
            <HeroIntro />
            
            <section className='projects-section'>
                <div className='section-header'>
                    <h1 className='section-title'>Mis Proyectos</h1>

                    <div className='filters-container'>
                        <div className='search-box'>
                            <input
                                type='text'
                                placeholder='Buscar proyectos...'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className='tag-filter'>
                            <select
                                value={selectedTag}
                                onChange={(e) => setSelectedTag(e.target.value)}
                            >
                                {allTags.map(tag => (
                                    <option key={tag} value={tag}>
                                        {tag === 'todos' ? 'Todas las categorías' : tag}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {filteredPosts.length > 0 ? (
                    <div className='projects-grid'>
                        {filteredPosts.map(post => (
                            <PostCard 
                                key={post.id} 
                                post={post}
                                onClick={() => handleProjectClick(post)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className='no-results'>
                        <h3>No se encontraron proyectos</h3>
                        <p>Intenta con otros términos de búsqueda o categorías</p>
                        <button
                            className='clear-filters'
                            onClick={ () => {
                                setSearchTerm('');
                                setSelectedTag('todos');
                            }}
                        >
                            Limpiar filtros
                        </button>
                    </div>
                )}
            </section>

            {selectedProject && (
                <Modal onClose={() => setSelectedProject(null)}>
                    <div className='project-detail-modal'>
                        <h2>{selectedProject.title}</h2>
                        {selectedProject.image && (
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className='modal-project-image'
                            />
                        )}
                        <div className='project-meta'>
                            {selectedProject.tags?.length > 0 && (
                                <div className='project-tags'>
                                    {selectedProject.tags.map((tag, index) => {
                                        <span key={index} className='project-tag'>{tag}</span>
                                    })}
                                </div>
                            )}
                        </div>
                        <div className='project-content'>
                            <p>{selectedProject.content || selectedProject.excerpt}</p>
                        </div>

                        {selectedProject.technologies?.length > 0 && (
                            <div className='project-technologies'>
                                <h4>Tecnologías utilizadas:</h4>
                                <div className='tech-tags'>
                                    {selectedProject.technologies.map((tech, index) =>(
                                        <span key={index} className='tech-tag'>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className='project-links'>
                            {selectedProject.github && (
                                <a href={selectedProject.github} target='_blank' rel='noopener noreferrer' className='project-link'>
                                    Ver en GitHub
                                </a>
                            )}
                            {selectedProject.demo && (
                                <a href={selectedProject.demo} target='_blank' rel='noopener noreferrer' className='project-link demo-link'>
                                    Ver Demo
                                </a>
                            )}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default Home;