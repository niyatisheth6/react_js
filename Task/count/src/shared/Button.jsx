export default function Button({ handleEvent, title }) {
  return (
    <>
      <button className="btn-primary" onClick={handleEvent}>
        {title}
      </button>
    </>
  );
}
