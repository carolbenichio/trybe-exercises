import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(['aaaa', 'bbbb', 'cccc', 'dddd', 'eeeee']);
  const [word, setWord] = useState('');
  const [filter, setFilter] = useState([]);

  function handleFilter({target}) {
    setWord(target.value);
  }

  useEffect(() => {
    const filtered = data.filter((dat) => dat.includes(word));
    setFilter(filtered);
  }, [word, data]);

  return (
    <div>
      <h1>Trybe</h1>
      <input
        type="text"
        onChange={handleFilter}
        value={word}
      />
      <h3>{word}</h3>
      {
        word.length === 0 ?
        data.map((dat) => <ul>{dat}</ul>)
        : filter.map((filt) => <ul>{filt}</ul>)
      }
    </div>
  );
}

export default App;