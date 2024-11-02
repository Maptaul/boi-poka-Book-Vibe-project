import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from "../Book/Book";
import { getStoredReadList } from "../Utility/AddtoDb";
const ListedBooks = () => {
  const [readList, setReadList] = useState([]);

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

  return (
    <div>
      <h1 className=" text-3xl my-8">Listed Books</h1>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I read : {readList.length}</h2>
          {readList.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
