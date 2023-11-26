import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BookItem(props) {
    return (
        <div>
            {/*Since I already installed bootstrap, I imported the card component.*/}
            <Card>
                {/*I used props.mybook.title to pass data from one component to another.*/}
                <Card.Body>{props.mybook.title}</Card.Body>
            </Card>
    {/* Displaying the cover image of the book using the src from props.mybook.cover. */}
            <img src={props.mybook.cover}></img>
            <p>{props.mybook.author}</p>
        	
           {/* This Link component creates a hyperlink to the edit page for the specific book using the book's _id. */}
            <Link to={"/edit/" + props.mybook._id} className='btn btn-primary'>Edit</Link>
        </div>
    );

}

export default BookItem;
