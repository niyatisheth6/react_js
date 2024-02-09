export default function DisplayCount({ count }) {
  return (
    <div>
      {count > 0 && count <= 20 ? (
        <h1 className="text-[30px] text-center">count is {count}</h1>
      ) : count < 0 ? (
        <h1 className="text-[30px] text-center">count is 0</h1>
      ) : count > 20 ? (
        <h1 className="text-[30px] text-center">count is 20</h1>
      ) : (
        <h1 className="text-[30px] text-center">count is 0</h1>
      )}
    </div>
  );
}
