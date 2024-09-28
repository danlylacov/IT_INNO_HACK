import React from 'react';

const Sidebar = () => {
    return (
        <div className="col-auto sidebar" style={{
            width: '16vw',
            background: 'linear-gradient(to right, #59F992, #7AFFC7)',
            color: 'black',
            padding: '20px',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            borderRight: '1px solid #006323',
            height: '100%',
            marginTop: '20px',
            marginLeft: '20px'

        }}>
            <div className="sidebar-header">
                <h4 style={{ color: 'black' }}>Name of workspace</h4> {/* Заголовок черный */}
                <hr style={{ border: 0, height: '1px', backgroundColor: '#333' }} />
            </div>
            <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link" href="#" style={{ color: 'black' }}>Мои задачи</a></li> {/* Черный текст */}
                <li className="nav-item"><a className="nav-link" href="#" style={{ color: 'black' }}>Все задачи</a></li> {/* Черный текст */}
                <li className="nav-item"><a className="nav-link" href="#" style={{ color: 'black' }}>Все проекты</a></li> {/* Черный текст */}
                <hr style={{ border: 0, height: '1px', backgroundColor: '#333' }} />
            </ul>
            <div className="projects">
                <h5 style={{ color: 'black' }}>Проекты</h5> {/* Заголовок черный */}
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{ color: 'black' }}>Проект 1</a> {/* Черный текст */}
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item"><a className="nav-link" href="#" style={{ color: 'black' }}>📌 задачи</a></li> {/* Черный текст */}
                            <li className="nav-item"><a className="nav-link" href="#" style={{ color: 'black' }}>⚙️ настройки</a></li> {/* Черный текст */}
                            <li className="nav-item"><a className="nav-link" href="#" style={{ color: 'black' }}>📄 документы</a></li> {/* Черный текст */}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;