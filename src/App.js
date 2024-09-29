import React, { useState } from 'react'
import Logo from './components/Logo';
import Form from './components/Form';
import Packing from './components/Packing';
import Stats from './components/Stats';



export default function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items =>
      items.map((item) =>
        item.id === id ?
          { ...item, packed: !item.packed }
          : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete all items?");

    if (confirmed && items.length !== 0)
      setItems([]);

    else
      alert("List is empty!!");
  }


  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Packing items={items} onDeleteItem={handleDeleteItems} onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
