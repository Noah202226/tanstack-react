import { useQuery } from "@tanstack/react-query";

function App() {
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <h1>Tanstack React</h1>
        {data?.map((todo) => (
          <div>
            <p key={todo.id}>{todo.id}</p>
            <h4>{todo.title}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
