import { ChatEngine } from 'react-chat-engine';
import React from 'react' ;
import { ReactDOM } from 'react-dom'; 
import './App.css';
import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';

const App = () => {
    // if(!localStorage.getItem('username')) return <LoginForm/>
     return (
         <ChatEngine
           height="100vh"
           projectID="b0966623-65a3-4865-ad36-e6a61f72ee27"
          // userName={localStorage.getItem('username')}
           userName='Max'
          // userSecret={localStorage.getItem('password')}
          userSecret='98920'
           render ChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} /> }
         />
     ); 


}
export default App;
