import Image from "next/image";

function ImagePage({ params }) {
  const projectItem = params;

  return (
    <div className="fullscreen-image">
      <Image
        src={`/projets/${projectItem}`}
        alt={"alt"}
        width={350}
        height={350}
        className="image"
      />
    </div>
  );
}

export default ImagePage;
