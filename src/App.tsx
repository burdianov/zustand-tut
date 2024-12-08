import "./App.css";
import { useUserStore } from "./store";

function UpdateUserForm() {
  const { username, email, setUsername, setEmail } = useUserStore();

  return (
    <div className="flex space-y-2 flex-col m-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}

function App() {
  const { username, email, setUsername, setEmail } = useUserStore();

  return (
    <>
      <div>{username}</div>
      <div>{email}</div>
      <UpdateUserForm />
    </>
  );
}

export default App;
