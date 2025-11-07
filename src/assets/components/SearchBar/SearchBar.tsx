
import { useState } from "react";
import "./SearchBar.css"; 
interface Props {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <div className="Search">
      <p>Buscar</p>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}