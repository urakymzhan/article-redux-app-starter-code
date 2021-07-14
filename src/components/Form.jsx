// Make sure handle user input and store articles in redux state

const ConnectedForm = () => {

  return (
    <form onSubmit={null}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={null}
          onChange={null}
        />
      </div>
      <button type="submit" className="btn btn-success btn-lg">
        SAVE
      </button>
    </form>
  );
};
export default ConnectedForm;
