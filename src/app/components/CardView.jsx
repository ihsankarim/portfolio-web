import Link from "next/link";

function CardView({ title, description, imageSrc, link }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md m-2 flex-col h-full">
      {imageSrc && (
        <img
          className="w-full h-56 p-2 rounded-2xl object-cover object-center"
          src={imageSrc}
          alt="Card"
        />
      )}
      <div className="max-w-sm p-4 flex-col flex-grow">
        <h2 className="text-xl text-neutral-950 font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 max-h-24 overflow-y-auto flex-grow">
          {description}
        </p>
        {link && (
          <div className="mt-auto">
            <Link
              href={link}
              className="mt-4 p-3 inline-block bg-blue-900 text-white py-2 rounded-md hover:bg-blue-600"
            >
              View Project
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardView;
