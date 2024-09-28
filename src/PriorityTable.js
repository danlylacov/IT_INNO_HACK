// PriorityTable.js
import React from 'react';

const PriorityTable = () => {
    const priorities = [
        { name: "Высокий", color: "#FF0000" },
        { name: "Средний", color: "#FFFF00" },
        { name: "Низкий", color: "#00FF00" },
    ];

    return (
        <div className="container p-3">
            <table className="table">
                <thead className="table-secondary">
                    <tr><th>Приоритет</th><th>Цвет</th><th></th></tr>
                </thead>
                <tbody>
                    {priorities.map((priority, index) => (
                        <tr key={index}>
                            <td><input type="text" className="form-control form-control-sm" defaultValue={priority.name} /></td>
                            <td><input type="color" className="form-control form-control-color" defaultValue={priority.color} /></td>
                            <td><button style={{ backgroundColor:'white', color:'red', border:'none', borderRadius:'1px', padding:'5px 10px' }}>✖</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PriorityTable;