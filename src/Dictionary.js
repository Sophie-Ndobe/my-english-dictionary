import React from "react";

export default function Dictionary() {
  function handleSubmitForm(event) {
    event.preventDefault();
  }
  function handleChange(event) {
    alert(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h2>This is the dictionary component</h2>
      <form onSubmit={handleSubmitForm}>
        <input type="search" onChange={handleChange} />
      </form>
    </div>
  );
}
