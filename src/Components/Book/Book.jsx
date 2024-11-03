import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    tags,
    category,
    rating,
    totalPages,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 h-full lg:max-w-96 shadow-xl border-2">
        <figure className="bg-base-300 rounded-2xl py-8">
          <img src={image} className="h-[166px] w-[124.81] " alt={bookName} />
        </figure>
        <div className="card-body">
          {/* <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2> */}
          <div className="flex gap-4 ">
            {tags.map((tag, index) => (
              <button
                key={index}
                className=" bg-green-100 rounded-full text-green-500 text-base px-4 py-1 font-bold"
              >
                {tag}
              </button>
            ))}
          </div>
          <p className="text-2xl font-bold">{bookName}</p>
          <p className="text-base ">{author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between items-center">
            <div className=" text-xl ">{category}</div>
            <div className=" text-xl gap-1 items-center">
              {rating}
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </div>
          </div>
          <div>Total Pages : {totalPages}</div>
        </div>
      </div>
    </Link>
  );
};

Book.propType = {
  book: PropTypes.array,
};
export default Book;
