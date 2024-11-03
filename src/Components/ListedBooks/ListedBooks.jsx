import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from "../Book/Book";
import { getStoredReadList } from "../Utility/AddtoDb";
const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const allBooks = useLoaderData();
  // ideally we will directly get the read book list from the database

  useEffect(() => {
    const storedReadList = getStoredReadList();
    // worst way

    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(storedReadList, storedReadListInt, allBooks);
    //
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    //
    if (sortType === "No of pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedReadList);
    }
    if (sortType === "Ratings") {
      const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedReadList);
    }
  };

  return (
    <div>
      <h1 className=" bg-gray-300 text-3xl my-8 mb-5 text-center rounded-md px-5 py-5 ">
        Books
      </h1>
      <div className="text-center items-center justify-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-accent m-1">
            {sort ? `Sort By : ${sort}` : "Sort By"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handleSort("Ratings")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSort("No of pages")}>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I read : {readList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-5 p-5">
            {readList.map((book) => (
              <Book key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
