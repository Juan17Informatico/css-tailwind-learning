import { Chat } from './components/Chat.jsx';
import { Notifcation } from './components/Notification/Notifcation.jsx';

export const App = () => {
    return (
        <div className='bg-blue-300 flex justify-center items-center h-screen'>
            {/* <Chat /> */}
            {/* <Notifcation /> */}
            <button className='bg-gradient-to-t from-blue-900 to-blue-400 text-white px-4 py-2 rounded shadow-md focus:ring hover:bg-blue-500 transition-all hover:transform active:translate-y-1' >
                Este es el mejor botón
            </button>
        </div>
    );
};
