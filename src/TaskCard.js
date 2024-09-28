import React from 'react';
import './TaskCard.css'; // Подключение CSS для стилизации

const TaskCard = ({ task, onClose }) => {
  return (
    <div className="task-card">
      {/* Блок приоритета задачи */}
      <div className="task-card-header">
        <span className="badge urgent">срочная</span>
      </div>

      {/* Поле для ввода названия задачи */}
      <div className="task-title-container">
        <input type="text" className="task-title" defaultValue="название" />
      </div>

      {/* Поля для выбора ответственного, исполнителей, проекта и т.д. */}
      <div className="task-details">
        <div className="form-group">
          <label>ответственный</label>
          <select className="form-control">
            <option>выпадающие списки</option>
          </select>
        </div>
        <div className="form-group">
          <label>исполнители</label>
          <select className="form-control">
            <option>выпадающие списки</option>
          </select>
        </div>
        <div className="form-group">
          <label>проект</label>
          <select className="form-control">
            <option>выпадающие списки</option>
          </select>
        </div>
        <div className="form-group">
          <label>время</label>
          <select className="form-control">
            <option>выпадающие списки</option>
          </select>
        </div>
        <div className="form-group">
          <label>статус</label>
          <select className="form-control">
            <option>выпадающие списки</option>
          </select>
        </div>
        <div className="form-group">
          <label>теги</label>
          <select className="form-control">
            <option>выпадающие списки</option>
          </select>
        </div>
      </div>

      {/* Поле для текста задачи */}
      <textarea className="task-text" defaultValue="текст задачи (комментарии\ссылки)" />

      {/* Ссылка для добавления файлов */}
      <a href="#" className="upload-link">добавить файлы</a>

      {/* Кнопка добавления задачи */}
      <button className="btn btn-success">добавить</button>
    </div>
  );
};

export default TaskCard;
