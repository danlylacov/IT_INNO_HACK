// TaskBoard.js
import React from 'react';

const TaskBoard = () => {
    return (
        <div className="content-area" style={{ backgroundColor: '#D9D9D9' }}>
            <style>
                {`
                    body {
                        background-color: #D9D9D9;
                        margin: 0;
                    }

                    .task-container {
                        padding: 20px;
                        background-color: #D9D9D9;
                    }

                    .task-board-wrapper {
                        overflow-x: auto;
                        overflow-y: auto;
                        max-height: calc(100vh - 40px);
                    }

                    .task-board {
                        display: flex;
                        gap: 20px; /* Distance between columns */
                        min-width: max-content; /* Ensure the board width does not shrink */
                    }

                    .task-column {
                        background-color: #D9D9D9;
                        width: 280px; /* Fixed width of columns */
                        border-radius: 8px;
                        overflow: hidden;
                        flex-shrink: 0; /* Ensure columns do not shrink */
                    }

                    .task-column-header {
                        background: #fff;
                        color: #333;
                        border-radius: 8px;
                        padding: 10px;
                        text-align: center;
                        font-size: 16px;
                        margin-bottom: 0;
                    }

                    .task-card-container {
                        max-height: 400px; /* Max height for task cards container */
                        padding: 10px;
                        overflow-y: auto; /* Vertical scroll for cards */
                    }

                    .task-card {
                        background: #fff;
                        border: 1px solid #dedede;
                        border-radius: 5px;
                        padding: 10px;
                        margin-bottom: 15px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        height: 140px; /* Fixed height of task cards */
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }

                    .task-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .task-header h5 {
                        margin: 0;
                        font-size: 14px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .status-select {
                        background-color: #f2f2f2;
                        padding: 5px;
                        border-radius: 5px;
                        border: none;
                        font-size: 12px;
                        color: #333;
                        width: 100px;
                    }

                    .task-priority {
                        display: inline-block;
                        background: #f44336;
                        color: #fff;
                        border-radius: 12px;
                        padding: 2px 6px;
                        font-size: 12px;
                        margin-top: 5px;
                        width: auto; /* Length of the block corresponds to text */
                    }

                    .task-date {
                        display: inline-block;
                        color: #777;
                        margin-left: 10px;
                        font-size: 12px;
                    }

                    .task-text {
                        margin-top: 10px;
                        font-size: 12px;
                        color: #333;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .filters {
                        padding: 20px;
                        border-radius: 8px;
                        height: calc(100vh - 40px); /* Height based on content */
                        overflow-y: auto; /* Vertical scroll for filters */
                        max-width: 100%; /* Limit filter width */
                        background-color: #7AFFC7; /* Set background color for filters */
                    }

                    .filters h5 {
                        margin-bottom: 20px;
                        font-size: 16px;
                        color: #006323;
                    }

                    .filter-group {
                        margin-bottom: 15px;
                    }

                    .filter-group label {
                        display: block;
                        margin-bottom: 5px;
                        color: #333;
                        font-size: 14px;
                    }

                    .form-select, .form-control {
                        width: 100%;
                        padding: 6px;
                        border: 1px solid #ccc;
                        border-radius: 12px; /* Rounded corners */
                        font-size: 14px;
                    }

                    /* Placeholder color when nothing is selected */
                    .form-select option:disabled {
                        color: #aaa; /* Gray color for "Выберите значение" */
                    }

                    .btn-group {
                        display: flex;
                        justify-content: space-between; /* Align buttons to edges */
                        margin-top: 20px;
                    }

                    .form-check {
                        margin-top: 20px;
                    }

                    .form-check-input {
                        margin-right: 5px;
                    }

                    /* Style for empty dropdown state */
                    .form-select:placeholder-shown {
                        color: #aaa; /* Placeholder text color */
                    }
                `}
            </style>
            <div className="row">
                {/* Left side with tasks */}
                <div className="col-9">
                    <div className="task-board-wrapper">
                        <div className="task-board">
                            {/* Task columns */}
                            <div className="task-column">
                                <div className="task-column-header">To Do</div>
                                <div className="task-card-container">
                                    {/* Task Cards */}
                                    <TaskCard title="Задача 1" priority="важная" date="17.04.2024" description="Описание задачи 1" />
                                    <TaskCard title="Задача 2" priority="средняя" date="18.04.2024" description="Описание задачи 2" />
                                </div>
                            </div>

                            <div className="task-column">
                                <div className="task-column-header">In Progress</div>
                                <div className="task-card-container">
                                    <TaskCard title="Задача 3" priority="низкая" date="19.04.2024" description="Описание задачи 3" />
                                    <TaskCard title="Задача 4" priority="важная" date="20.04.2024" description="Описание задачи 4" />
                                </div>
                            </div>

                            <div className="task-column">
                                <div className="task-column-header">Review</div>
                                <div className="task-card-container">
                                    <TaskCard title="Задача 5" priority="средняя" date="21.04.2024" description="Описание задачи 5" />
                                    <TaskCard title="Задача 6" priority="важная" date="22.04.2024" description="Описание задачи 6" />
                                </div>
                            </div>

                            <div className="task-column">
                                <div className="task-column-header">Done</div>
                                <div className="task-card-container">
                                    <TaskCard title="Задача 7" priority="средняя" date="23.04.2024" description="Описание задачи 7" />
                                    <TaskCard title="Задача 8" priority="низкая" date="24.04.2024" description="Описание задачи 8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side with filters */}
                <div className="col-3">
                    <div className="filters">
                        <h5>Фильтры</h5>
                        {Array.from({ length: 3 }, (_, index) => (
                            <FilterGroup key={index} filterNumber={index + 1} />
                        ))}
                        <div className="btn-group">
                            <button className="btn btn-success">Применить</button>
                            <button className="btn btn-secondary">Сбросить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// TaskCard Component
const TaskCard = ({ title, priority, date, description }) => (
    <div className="task-card">
        <div className="task-header">
            <h5>{title}</h5>
            <select className="status-select">
                <option>сменить статус</option>
                <option value="to-do">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
            </select>
        </div>
        <div>
            <span className="task-priority">{priority}</span>
            <span className="task-date">{date}</span>
        </div>
        <p className="task-text">{description}</p>
    </div>
);

// FilterGroup Component
const FilterGroup = ({ filterNumber }) => (
    <div className="filter-group">
        <label htmlFor={`filter-${filterNumber}`}>Фильтр {filterNumber}</label>
        <select className="form-select" id={`filter-${filterNumber}`}>
            <option value="value0" disabled selected>Выберите значение</option>
            <option value="valuee1" style={{backgroundColor: 'blue'}}>Значение 1</option>
            <option value="valuee2" style={{color: 'red'}}>Значение 2</option>
        </select>
    </div>
);

export default TaskBoard;
