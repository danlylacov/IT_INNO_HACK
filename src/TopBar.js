import React from 'react';

const TopBar = () => {
    return (
        <div className="top-bar" style={{
            background: 'linear-gradient(to right, #7AFFC7, #00D015)',
            padding: '10px',
            color: 'white',
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '15px',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
        }}>
            <button className="btn position-relative">💬</button>
            <button className="btn">📂</button>
            <button className="btn">⬆️</button>
            <div className="user-avatar ms-3">
                <span className="username">username</span>
                <div className="avatar-circle" style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#ddd',
                    borderRadius: '50%',
                    marginLeft: '10px'
                }}></div>
            </div>
        </div>
    );
};

export default TopBar;