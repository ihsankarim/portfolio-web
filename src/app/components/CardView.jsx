import Link from "next/link";

function CardView({ title, description, imageSrc, link }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md m-2">
      {imageSrc && (
        <img
          className="w-full h-56 object-cover object-center"
          src={imageSrc}
          alt={title}
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        {link && (
            <Link href={link} className="mt-4 inline-block bg-blue-500 text-white py-2 px- rounded-md hover:bg-blue-600">
                View Project
            </Link>
        )}
      </div>
    </div>
  );
}

export default CardView;
