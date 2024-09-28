// DocumentEditor.js
import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const DocumentEditor = () => {
    const predefinedUsers = [
        { name: "John аикуципук", email: "john@example.com" },
        { name: "Mary кпукпикепукп", email: "mary@example.com" },
        { name: "July кпуиекпкеиркеруекркеи", email: "july@example.com" },
    ];

    const [tasks, setTasks] = useState([
        { name: "John аикуципук", email: "john@example.com", checked: true },
        { name: "Mary кпукпикепукп", email: "mary@example.com", checked: false },
        { name: "July кпуиекпкеиркеруекркеи", email: "july@example.com", checked: true },
    ]);

    const [selectedUser, setSelectedUser] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editorContent, setEditorContent] = useState('');

    const handleAddTask = () => {
        const user = predefinedUsers.find(user => user.name === selectedUser);
        if (user) {
            setTasks([...tasks, { ...user, checked: false }]);
            console.log(`Добавлена новая задача: ${user.name}, Email: ${user.email}`);
            setSelectedUser('');
            setShowModal(false);
        }
    };

    return (
        <div className="container" style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
            <div className="sidebar-docs" style={{
                background: 'linear-gradient(to left, #FFFFFF, #7AFFAA)',
                borderBottomLeftRadius: '15px',
                borderTopLeftRadius: '15px',
                width: '16vw',
                height: '95%',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid #006323',
                padding: '20px',
                marginTop: '20px'
            }}>
                <div className="sidebar-header">
                    <h4>▤ Имя проекта</h4>
                    <hr style={{ border: 0, height: 1, backgroundColor: '#333' }} />
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item"><a className="nav-link" href="#">☑ Директория 1</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">☑ Директория 2</a></li>
                    <li className="nav-item">
                        <button style={{ backgroundColor: 'transparent', color: 'black', border: 'none', borderRadius: '1px', padding: '5px 10px' }}>✚</button>
                    </li>
                    <hr style={{ border: 0, height: 1, backgroundColor: '#333' }} />
                </ul>
            </div>

            <div className="content-area" style={{
                backgroundColor: '#D9D9D9',
                borderBottomRightRadius: '15px',
                borderTopRightRadius: '15px',
                padding: '20px',
                flexGrow: 1,
                height: '95%',
                marginTop: '20px'
            }}>
                <h2>Редактор документов</h2>

                {/* Редактор TinyMCE */}
                <Editor
                    apiKey="ihvni4mz63s52goxv0dsfecj7c1s0tiwdrness27a5lvq4q2" // Замените на ваш API-ключ TinyMCE
                    value={editorContent}
                    init={{
                        height: 400,
                        menubar: false,
                        plugins: [
                            'autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | styleselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | link image | \
                            removeformat | help'
                    }}
                    onEditorChange={(content) => setEditorContent(content)}
                />

                <div className="row">
                    <div className="col-2"><button type="button" className="button">Сохранить</button></div>
                    <div className="col-6"><button type="button" className="button">Редактировать</button></div>
                    <div className="col-2"><button type="button" className="button">Загрузить</button></div>
                </div>
            </div>

        </div>
    );
};

export default DocumentEditor;