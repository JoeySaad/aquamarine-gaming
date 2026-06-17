export default function Home() {
  return (
    <main style={{ margin: 0, padding: 0, width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="/index.html?v=redesign"
        title="Aquamarine Gaming"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
          display: "block",
        }}
      />
    </main>
  );
}
