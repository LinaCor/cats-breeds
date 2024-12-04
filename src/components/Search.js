import { useState } from "react";
import "../pages/my-style.css";


export function Search({ callback }) {

  const [value, setValue] = useState('');


  const handleKey = (evt) => {
    if (evt.key === 'Enter') {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    callback(value);
  }


  return (
    <div className="row input-container">
      <div className="input-field col s9 l6">
        <input
          type="search"
          placeholder="search breed..."
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="search-input"
        />
        <button className="btn grey darken-3 search-btn" onClick={handleSubmit}>Search</button>
      </div>
    </div>
  )
}