// DocumentEditor.js
import React, { useState } from 'react';
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
    const [editorContent, setEditorContent] = useState('Добро пожаловать в TinyMCE!');
    const [file, setFile] = useState(null); // Состояние для хранения загружаемого файла

    const handleAddTask = () => {
        const user = predefinedUsers.find(user => user.name === selectedUser);
        if (user) {
            setTasks([...tasks, { ...user, checked: false }]);
            console.log(`Добавлена новая задача: ${user.name}, Email: ${user.email}`);
            setSelectedUser('');
        }
    };

    const handleSaveDocument = () => {
        console.log("Содержимое документа:", editorContent);
        localStorage.setItem('documentContent', editorContent);
        alert("Документ сохранен!");
    };

    // Обработчик изменения файла
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]; // Получаем выбранный файл
        if (selectedFile) {
            setFile(selectedFile); // Сохраняем файл в состоянии
            console.log("Выбранный файл:", selectedFile.name); // Выводим имя файла в консоль
        }
    };

    return (
        <div className="container" style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
            {/* Боковая панель */}
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
                    <li className="nav-item">
                        <a className="nav-link" href="#">☑ Директория 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">☑ Директория 2</a>
                    </li>
                    <li className="nav-item">
                        <button style={{ backgroundColor: 'transparent', color: 'black', border: 'none', borderRadius: '1px', padding: '5px 10px' }}>
                            ✚
                        </button>
                    </li>
                    <hr style={{ border: 0, height: 1, backgroundColor: '#333' }} />
                </ul>

                <div className="projects">
                    <div className="row">
                        <div className="col-6">
                            <p style={{ color: 'black' }}>Директория 1</p>
                        </div>
                        <div className="col-6">
                            <button style={{ backgroundColor: 'transparent', color: 'black', border: 'none' }}>✚</button>
                        </div>
                    </div>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <div className="row">
                                <div className="col-6">
                                    <a className="nav-link" href="#">⇒ Папка 1</a>
                                </div>
                                <div className="col-6">
                                    <button style={{ backgroundColor: 'transparent', color: 'black', border: 'none' }}>✚</button>
                                </div>
                            </div>
                            <ul className="nav flex-column ms-3">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">📄 документ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">📄 документ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">📄 документ</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Основной контент */}
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
                    <div className="col-2">
                        <button type="button" className="button" onClick={handleSaveDocument} style={{ backgroundColor:'#28a745', color:'white', border:'none', borderRadius:'15px', padding:'10px 20px', cursor:'pointer' }}>Сохранить</button>
                    </div>
                    <div className="col-6">
                        {/* Кнопка для загрузки файла */}
                        <input type="file" onChange={handleFileChange} style={{ display:"none" }} id="file-upload" />
                        <label htmlFor="file-upload" style={{ backgroundColor:'#28a745', color:'white', border:'none', borderRadius:'15px', padding:'10px 20px', cursor:'pointer' }}>Загрузить файл</label>
                    </div>
                </div>

                {file && (
                    <div style={{ marginTop:'10px' }}>
                        <p>Выбранный файл: {file.name}</p> {/* Отображаем имя выбранного файла */}
                    </div>
                )}
            </div>

        </div>
    );
};

export default DocumentEditor;