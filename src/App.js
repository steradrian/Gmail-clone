import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Mail from './Components/Mail/Mail';
import EmailList from './Components/EmailList/EmailList';
import SendMail from './Components/SendMail/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import Login from './Components/Login/Login';

function App() {
  const user = useSelector(selectUser);
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <Router>

      {!user ? (
        <Login />
      ) : (
      <div className="app">
        <Header />
        <div class="app__body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>

            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        
        {sendMessageIsOpen && <SendMail />}
      </div>        
      )}
      </Router>  

    
  );
}

export default App;
