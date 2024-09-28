import React from 'react';

const Sidebar = () => {
    return (
        <div className="col-auto sidebar" style={{
            width: '16vw',
            background: 'linear-gradient(to right, #59F992, #7AFFC7)',
            color: 'white',
            padding: '20px',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            borderRight: '1px solid #006323',
            height: '100%'
        }}>
            <div className="sidebar-header">
                <h4>Name of workspace</h4>
                <hr style={{ border: 0, height: '1px', backgroundColor: '#333' }} />
            </div>
            <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link" href="#">Мои задачи</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Все задачи</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Все проекты</a></li>
                <hr style={{ border: 0, height: '1px', backgroundColor: '#333' }} />
            </ul>
            <div className="projects">
                <h5 style={{ color: 'black' }}>Проекты</h5>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Проект 1</a>
                        <ul className="nav flex-column ms-3">
                            <li className="nav-item"><a className="nav-link" href="#">📌 задачи</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">⚙️ настройки</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">📄 документы</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;