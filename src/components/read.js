
import { useEffect, useState } from "react";
import Book from "./book";
import axios from "axios";

{/* I added axios to our project by npm install axios, axios is a Promise based HTTP client.*/ }

function Read() {



    const [data, setData] = useState([]);
    {/*useEffect is a React Hook that lets you synchronize a component with an external system.*/ }
    useEffect(() => {
        {/* To make a http get call that will return the json data from and assign it to the component state. Use the react hook useState:.*/ }
        axios.get('http://localhost:4000/api/books')
         {/* If the request is successful, update the component state with the received data. */}
            .then(
                (response) => {
                    setData(response.data);
                }
            )
         {/* If there's an error, log it to the console for debugging. */}
            .catch(
                (error) => {
                    console.log(error);
                }
            );
    }, []);

    return (
        <div>
    {/* Displaying a heading in the component. */}
            <h2>Hello from my Read component</h2>
        {/* Rendering the Book component and passing the book data as a prop. */}
            <Book myBook={data}></Book>
        </div>

    );
}

export default Read;
