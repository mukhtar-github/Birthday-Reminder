import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [poeple, setPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>{ poeple.length } birthdays today</h3>
        <List poeple={poeple} />
        <button onClick={ () => setPeople([]) }>clear all</button>
      </section>
    </main>
  );
}

export default App;
