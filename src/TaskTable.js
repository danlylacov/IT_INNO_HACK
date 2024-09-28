import React from 'react';

const TaskTable = () => {
    const tasks = [
        { name: "John аикуципук", email: "john@example.com", checked: true },
        { name: "Mary кпукпикепукп", email: "mary@example.com", checked: false },
        { name: "July кпуиекпкеиркеруекркеи", email: "july@example.com", checked: true },
    ];

    return (
        <div className="container p-3">
            <table className="table">
                <thead className="table-secondary">
                    <tr><th>ФИО</th><th>почта</th><th>Ответственный</th><th></th></tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.name}</td>
                            <td>{task.email}</td>
                            <td><input type="checkbox" checked={task.checked} /></td>
                            <td><button style={{ backgroundColor:'white', color:'red', border:'none', borderRadius:'1px', padding:'5px 10px' }}>✖</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskTable;