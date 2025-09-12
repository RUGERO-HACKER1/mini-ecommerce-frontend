export default function ImageSlider() {
  const images = ["/image.png", "/imag.png"]; 

  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-2 bg-white rounded shadow">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Slide ${idx + 1}`}
          className="inline-block w-64 h-40 object-cover rounded-xl shadow-lg mr-4"
        />
      ))}
    </div>
  );
}
