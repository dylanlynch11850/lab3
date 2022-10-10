import React from "react";
//This is where you import 
import { BookItem } from "./bookItem";
export class Books extends React.Component{
    render(){

        //collect data 
//This will get rid of red warning 
        return this.props.books.map( (book)=>{
            return <BookItem book={book} key={book.isbn}></BookItem>
        }


        );
    
    }
}