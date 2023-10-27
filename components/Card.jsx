import Link from "next/link";
import RemoveBlogBtn from "./RemoveBlogBtn";

const Card = ({ post }) => {
  const { name, title, description, category, _id: id } = post;

  return (
    <figure className="w-full mx-auto bg-slate-100 border rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <div className="pt-6 md:p-6 text-center md:text-left space-y-4">
        <blockquote>
          <p className="my-2 text-lg font-medium">{title}</p>
          <p>{description.slice(0, 150)}...</p>
        </blockquote>
        <figcaption className="font-medium flex justify-between items-end">
          <div>
            <div className="text-sky-500 dark:text-sky-400">{name}</div>
            <div className="text-slate-700 dark:text-slate-500">{category}</div>
            <Link
              href={`/blogpost/${id}`}
              className="text-sky-700 dark:text-sky-500 hover:text-sky-950 my-2"
            >
              Read more
            </Link>
          </div>
          <div>
            <RemoveBlogBtn id={id} />
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Card;
