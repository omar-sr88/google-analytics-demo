export default function DemoPage() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>This is a demo page</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dxmd2Uy_fIM?enablejsapi=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </main>
  );
}
