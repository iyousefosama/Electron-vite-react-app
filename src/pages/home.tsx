import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/electron-vite.animate.svg';
import '../App.css';

function App() {
    const [count, setCount] = useState(0);
    const NOTIFICATION_TITLE = '🔔 Example notification'
    const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
    
    return (
        <>
            <div className="flex justify-center">
                <a href="https://electron-vite.github.io" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <div className='flex gap-4 mb-4 justify-center'>
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <button onClick={() => {
                        if ('Notification' in window && Notification.permission === 'granted') {
                            const notification = new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY });
                          
                            // Attach a click event handler to the notification
                            notification.onclick = () => {
                              console.log('Notification clicked!');
                            };
                          } else {
                            console.error('Notifications are not supported or permission is not granted.');
                          }
                    }}>
                        Test
                    </button>
                </div>
                <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
