import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import ProjectInput from './ProjectInput';
import TaskTable from './TaskTable';

const App = () => {
    return (
        <div className="container-fluid" style={{ height: '100vh' }}>
            <TopBar />
            <div className="row" style={{ height: '100%' }}>
                <Sidebar />
                <div className="col main-content" style={{ backgroundColor: '#ffffff', padding: '20px' }}>
                    <ProjectInput />
                    <TaskTable />
                    <button type="button" className="button">Добавить</button>
                </div>
            </div>
        </div>
    );
};

export default App;