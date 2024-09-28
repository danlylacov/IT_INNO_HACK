import React from 'react';

const ProjectInput = () => {
    return (
        <div className="navigation">
            <div className="row align-items-center">
                <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="Имя проекта" name="project-name" />
                </div>
                <div className="col-sm-8">
                    <div className="row" style={{ marginLeft: "60px" }}>
                        {['Приоритеты задач', 'Участники', 'Прогресс задач'].map((text, index) => (
                            <div key={index} className={`col-sm-${index === 1 ? "4 text-success" : "4"}`}>
                                <a href="#">{text}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr style={{ border: 0, height: "1px", backgroundColor: "#333" }} />
        </div>
    );
};

export default ProjectInput;