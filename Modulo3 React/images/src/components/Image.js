export default function Image({ src, click }) {
  return (
    <div>
      <img src={src} onClick={click} />
    </div>
  );
}
