import images from "@/images";
import ImageCard from "@/components/ImageCard";

export default function Home() {
  return (
      <div className="my-6">
          <h2 className="text-5xl font-semibold bg-gradient-to-b from-orange-900 to-orange-300 text-transparent bg-clip-text pb-3 mb-4">Welcome to image gallery</h2>
          <div className="flex flex-wrap justify-center gap-4">
              {images.map((image, index) => (
                  <ImageCard image={image} key={index} id={index}/>
              ))}
          </div>
      </div>
  );
};
