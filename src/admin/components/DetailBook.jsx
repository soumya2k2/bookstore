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
  import { useNavigate, useParams } from "react-router-dom";
  
  const DetailBook = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState();
  
    const getBook = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/books/${params.id}`
      );
      setBook(data);
    };
  
    const deleteBook = async () => {
      await axios.delete(`http://localhost:8000/books/${params.id}`);
      navigate("/admin/list");
    };
  
    useEffect(() => {
      getBook();
    }, []);
  
    if (!book) {
      return <Grid>Loading...</Grid>;
    }
  
    return (
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {book.type}
          </Typography>
          <Typography variant="h5" component="div">
            {book.bookName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {book.price}
          </Typography>
          <Typography variant="body2">{book.author}</Typography>
        </CardContent>
        <CardActions>
          <Button color='error' onClick={() => deleteBook()}>Delete Book</Button>
        </CardActions>
      </Card>
    );
  };
  
  export default DetailBook;