import React, { useState } from 'react'

export default function Form({ onAddItems }) {

    const [description, setDescription] = useState("");
    // console.log(descriprtion);
    const [quantity, setQuantity] = useState(1);
    // console.log(quantity);



    // console.log(items);

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(e);

        if (!description) return;

        const newItem = { description, quantity, packed: false, id: Date.now() };
        console.log(newItem);

        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className='add-form' onClick={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map
                    ((num) => (
                        <option value={num} key={num}>{num}</option>
                    ))}
            </select>
            <input
                type="text"
                placeholder='Item...'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}