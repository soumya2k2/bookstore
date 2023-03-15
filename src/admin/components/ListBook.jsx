import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListBook = () => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const response = await axios.get("http://localhost:8000/books");
        setBooks(response.data);
    }

    useEffect(() => {
        getBooks();
    }, [])


    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4">Book List</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {books.map((book) => (
                        <Grid item xs={4} key={book.id}>
                            <Card>
                                <CardContent>
                                    <Typography
                                        sx={{ fontSize: 15 }}
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        {book.type}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {book.bookname}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {book.price}
                                    </Typography>
                                    <Typography variant="body2">{book.author}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button component={Link} to={`/admin/details/${book.id}`}>View Details</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ListBook;