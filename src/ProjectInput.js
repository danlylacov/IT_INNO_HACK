// ProjectInput.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProjectInput = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="navigation">
            <div className="row align-items-center">
                <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="Имя проекта" name="project-name" />
                </div>
                <div className="col-sm-8">
                    <div className="row" style={{ marginLeft: "60px" }}>
                        <div className="col-sm-4">
                            <Link className="nav-link" to="/priorities">Приоритеты задач</Link>
                        </div>
                        <div className="col-sm-4">
                            <Link className="nav-link" to="/">Участники</Link>
                        </div>
                        <div className="col-sm-4">
                            <Link className="nav-link" to="/categories">Категории задач</Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ border: 0, height: "1px", backgroundColor: "#333" }} />
        </div>
    );
};

export default ProjectInput;