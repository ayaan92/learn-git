import { useCallback, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={onClick}>버튼</button>
    </div>
  );
}

export default App;
