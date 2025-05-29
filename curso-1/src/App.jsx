import { useState } from 'react';
import { Chat } from './components/Chat.jsx';
import { Notifcation } from './components/Notification/Notifcation.jsx';

export const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className={`bg-gray-300 ${darkMode ? 'dark:bg-gray-800' : ''} transition-all flex justify-center items-center h-screen`}>
            {/* <Chat /> */}
            {/* <Notifcation /> */}
            <button  onClick={handleDarkMode} className='bg-gradient-to-t from-blue-900 to-blue-400 text-white px-4 py-2 rounded shadow-md focus:ring hover:bg-blue-500 transition-all hover:transform active:translate-y-1' >
                Este es el mejor botón
            </button>
        </div>
    );
};
