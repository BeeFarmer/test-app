import { useEffect, useState } from "react";

const prefixMap = {
  US: "+1",
  CHINA: "+86",
  FRANCE: "+33"
};

export default function App() {
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    setNumber((n) => code + n);
  }, [code]);

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const onSelectCode = (e) => {
    setCode(e.target.value);
    code && setNumber((n) => n.slice(code.length));
  };

  return (
    <div className="App">
      <select onChange={onSelectCode}>
        {Object.entries(prefixMap).map((p) => (
          <option key={p[0]} value={p[1]}>
            {p[0]}
          </option>
        ))}
      </select>
      <input value={number} onChange={onChangeNumber} />
    </div>
  );
}
