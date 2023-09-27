import UserInfo from './context/UserInfo';
import Dashboard from './components/Dashboard';
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <h1>User Dashboard</h1>
      <UserInfo>
        <Dashboard/>
      </UserInfo>
    </div>
  );
};

export default App;
