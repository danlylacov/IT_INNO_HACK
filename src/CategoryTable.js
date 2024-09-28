// CategoryTable.js
import React from 'react';

const CategoryTable = () => {
    const categories = [
        { name: "Разработка", color: "#0000FF" },
        { name: "Дизайн", color: "#FFA500" },
        { name: "Тестирование", color: "#800080" },
    ];

    return (
        <div className="container p-3">
            <table className="table">
                <thead className="table-secondary">
                    <tr><th>Категория</th><th>Цвет</th><th></th></tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr key={index}>
                            <td><input type="text" className="form-control form-control-sm" defaultValue={category.name} /></td>
                            <td><input type="color" className="form-control form-control-color" defaultValue={category.color} /></td>
                            <td><button style={{ backgroundColor:'white', color:'red', border:'none', borderRadius:'1px', padding:'5px 10px' }}>✖</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryTable;