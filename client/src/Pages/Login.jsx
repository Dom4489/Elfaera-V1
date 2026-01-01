import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from 'antd';

function LogIn() {
  const [isError, setIsError] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    
    const correctHash = import.meta.env.VITE_EARLY_ACCESS_CODE_2026;
    
    // Hash the entered password
    const enteredHash = password; 
    console.log('correct', correctHash);
    console.log('entered', enteredHash);   
    if (enteredHash === correctHash) {
      // Success - redirect or set auth state
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/store');
    } else {
      setIsError(true);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col min-h-1/2 w-[80%] max-w-[30rem] items-center">
        <div className="w-32 h-32">
          <img src="/src/assets/IMG_2948.PNG" alt="" />
        </div>
        <h2 className="tracking-tight font-bold text-xl mb-7 mt-[-2rem]">
          Elfaera 2026 Early Access
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-full"
        >
          <input
            type="password"
            placeholder="access code"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-200 rounded-xl h-[3rem] w-[75%] mb-7 p-3 shadow-lg"
          />
          {isError && (
            <p className="text-[12px] text-[#cc0000] mb-3 text-center">
              The code you have entered is incorrect
            </p>
          )}
          <div>
            <Button type="primary" htmlType="submit">Get In</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;