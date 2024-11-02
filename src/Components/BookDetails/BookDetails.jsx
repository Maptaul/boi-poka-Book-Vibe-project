import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredWishList } from "../Utility/AddToDa";
import { addToStoredReadList } from "../Utility/AddtoDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  //   console.log(data);

  const book = data.find((book) => book.bookId === id);
  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleWishList = (id) => {
    addToStoredWishList(id);
  };

  const handleMarkAsRead = (id) => {
    // * 1. understand what to store or save => bookId
    // * 2. where to store: database
    // * 3. array, list, collection :
    // * 4. if the book is in the read list
    // * 5. if not, then add  book to the list
    // * 6. if yes,do not add the book
    addToStoredReadList(id);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-5">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="py-6"> By: {author}</p>
          <div className="divider"></div>
          <p>{category} </p>
          <div className="divider"></div>
          <p className="font-bold">
            Review : <span className="font-normal">{review}</span>
          </p>
          {tags.map((tag, index) => (
            <button
              key={index}
              className=" bg-green-100 rounded-full text-green-500 text-base px-4 py-1 font-bold"
            >
              {" "}
              {tag}
            </button>
          ))}
          <div className="divider"></div>
          <p>
            Number of Pages: <span className="font-bold">{totalPages}</span>{" "}
          </p>
          <p>
            Publisher: <span className="font-bold">{publisher}</span>{" "}
          </p>
          <p>
            Year of Publishing:{" "}
            <span className="font-bold">{yearOfPublishing}</span>{" "}
          </p>
          <p>
            Rating: <span className="font-bold">{rating}</span>{" "}
          </p>
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="btn btn-outline mr-5 btn-accent "
          >
            Read{" "}
          </button>
          <button
            onClick={() => handleWishList(bookId)}
            className="btn btn-accent"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
