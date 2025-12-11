interface Props {
  alt?: string;
  src: string;
}

const baseImageUrl = "https://image.tmdb.org/t/p/original/";
const CardMovie = ({ src, alt }: Props) => {
  return (
    <img
      src={baseImageUrl + src}
      alt={alt}
      className="h-full object-contain mr-2 w-full max-h-80"
    />
  );
};

export default CardMovie;
