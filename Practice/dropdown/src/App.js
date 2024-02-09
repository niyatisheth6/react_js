import logo from "./logo.svg";
import "./App.css";
import Dropdown from "./src/components/Dropdown";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const defaultSuggestions = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Pear" },
    { id: 5, name: "Pineapple" },
  ];

  // Function to fetch autocomplete suggestions based on the searchTerm
  const fetchSuggestions = async (searchTerm) => {
    // Simulate fetching by returning defaultSuggestions when searchTerm is empty
    return searchTerm === "" ? defaultSuggestions : [];
  };

  useState(() => {
    fetchSuggestions(searchTerm).then((data) => {
      setSuggestions(data);
    });
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSuggestionSelect = (selectedSuggestion) => {
    setSearchTerm(selectedSuggestion);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Search..."
      />

      <ul className="absolute w-full mt-2 border border-gray-300 bg-white rounded">
        <li className="p-2 cursor-pointer hover:bg-gray-100">hgkjhkhjk</li>
      </ul>
    </div>
  );
}

export default App;
