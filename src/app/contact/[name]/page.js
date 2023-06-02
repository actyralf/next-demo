export default function DynamicRoute({ params }) {
  const { name } = params;
  return (
    <main>
      <h1>Dynamic Route</h1>
      <p>{name}</p>
    </main>
  );
}
