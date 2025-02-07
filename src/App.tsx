export default function App() {
  return (
    <div className='flex flex-col justify-center items-center '>
      <h1>Login, Gmail with privy</h1>
      <Login/>
    </div>
  )
}

import { usePrivy } from '@privy-io/react-auth';
function Login() {
  const { authenticated, login, logout } = usePrivy();

  return (
    authenticated ? (
      <button onClick={logout}>Log-out</button>
    ) : (
      <button className='border border-black p-2' onClick={() => login({ loginMethods: ["google"] })}>Login</button>
    )
  );
}