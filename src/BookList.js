import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Book from './Book';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const BookList = () => {
    const classes = useStyles();
    const [lists, setLists] = useState();

    useEffect(() => { 
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=tv2wLRwIAcjqj0wrLmQyxYGBitviaFoJ`)
        .then(res => {
          const responseBookLists = res.data.results.lists;
          setLists( responseBookLists );
        })

    },[]) ;
  //  console.log(books);

    return (
        <div>
            
            {
                lists && lists.map((list) => {
                    const ListTitle = list.display_name ;
                    const books = list.books ;
                    
                    const bookTitle = books.map((book) =>{
                        return (
                            <Book key={book.primary_isbn13} title={book.title} description={book.description} imgSrc={book.book_image} amazonLink={book.amazon_product_url} author={book.author} />
                        )
                    });
                    console.log(bookTitle);
                    return (
                     <div>
                            
                           

    <Card className={classes.root} variant="outlined">
      <CardContent>
       <h1>{ListTitle}</h1>
        
        <Box  display="flex"
        flexWrap="wrap"
        alignContent="flex-start"
    
        m={1}
        bgcolor="background.paper"
       >
        {bookTitle}
       </Box>                    
                        
      </CardContent>
    
    </Card>
                     </div>
                    );
 
                }) 
                
              
            }            
        </div>
    );
};

export default BookList ;