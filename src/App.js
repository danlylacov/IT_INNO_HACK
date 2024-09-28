import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import ProjectInput from './ProjectInput';
import TaskTable from './TaskTable';
import PriorityTable from './PriorityTable';
import CategoryTable from './CategoryTable';

const App = () => {
    return (
        <Router>
            <div className="container-fluid" style={{ height: '100vh', overflow: 'hidden' }}>
                <TopBar />
                <div className="row" style={{ height: 'calc(100% - 60px)', overflow: 'hidden' }}> {/* Убедитесь, что высота учитывает высоту TopBar */}
                    <Sidebar />
                    <div className="col main-content" style={{
                        border: '1px solid Black',
                        borderRadius: '15px',
                        padding: '20px',
                        margin: '20px',
                        height: 'calc(100% - 60px)', // Учитываем высоту TopBar и отступы
                        overflowY: 'auto' // Добавляем вертикальную прокрутку только для основного контента
                    }}>
                        <ProjectInput />
                        <Routes>
                            <Route path="/" element={<TaskTable />} />
                            <Route path="/priorities" element={<PriorityTable />} />
                            <Route path="/categories" element={<CategoryTable />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;