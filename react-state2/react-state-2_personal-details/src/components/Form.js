export default function Form({ name, email, setName, setEmail, onCreateUser }) {
  function handleSumbit(event) {
    event.preventDefault();

    onCreateUser(event);

    setName("");
    setEmail("");
  }
  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSumbit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="John Doe"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="john@doe.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
