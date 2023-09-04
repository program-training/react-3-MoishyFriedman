import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [number, setNumber] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [stop, setStop] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (number > 0 && stop) {
        setNumber((number) => number - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [number, stop]);

  return (
    <div>
      <h1>{number}</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (inputRef.current)
            return setNumber(parseInt(inputRef.current.value));
        }}
      >
        <input type="number" ref={inputRef}></input>
        <button>update timer</button>
        <button type="button" onClick={() => setStop(!stop)}>
          activate / deactivate
        </button>
      </form>
    </div>
  );
}
