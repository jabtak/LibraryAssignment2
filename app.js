const express = require('express');
const booksRouter = express.Router();
const app = express();
const port = process.env.PORT || 5000;


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views')


var book = [
    {
        title: 'Tom and Jerry',
        author: 'Joseph Barbera',
        genre: 'Cartoon',
        img: 'book1.jpg'
    },
    {
        title: 'Harry Potter and Sorcerer Stone',
        author: 'J.K Rowling',
        genre: 'Mystery',
        img: 'book1.jpg'
    },
    {
        title: 'Catching Fire',
        author: 'Suzanne Collins',
        genre: 'Thriller',
        img: 'book1.jpg'
    },
    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        genre: 'Drama',
        img: 'book1.jpg'
    }
]

var author = [
    {
        author: 'Joseph Barbera',
        age:95,
        genre: 'Cartoon',
        img: 'book1.jpg'
    },
    {
        author: 'J.K Rowling',
        age:55,
        genre: 'Mystery',
        img: 'book1.jpg'
    },
    {
        author: 'Suzanne Collins',
        age:58,
        genre: 'Thriller',
        img: 'book1.jpg'
    },
    {
        author: 'Suzanne Collins',
        age:58,
        genre: 'Drama',
        img: 'book1.jpg'
    }
]

app.get('/',function(req,res){
    res.render("index",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        title: 'Library',
        book
    });
   
    
});
app.get('/index-home',function(req,res){
    res.render("index-home",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        title: 'Library',
        book
    });
   
    
});


app.get('/authors',function(req,res){
    res.render("author",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        title: 'Library',
        author
    });
   
    
});


app.get('/signin',function(req,res){
    res.render("signin",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
       
    });
   
    
});


app.get('/signup',function(req,res){
    res.render("signup",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
       
    });
   
    
});


app.get('/book',function(req,res){
    res.render("books",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        title: 'Library',
        book
    });
   
    
});


booksRouter.get('/',function(req,res){
    res.render("index",{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        title: 'Library',
        book

    })
})




app.get('/books/:id',function(req,res){
    const id = req.params.id;
    res.render('book',{
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        title:'Library',
        book :book[id]
    })
})
app.listen(port,()=>{console.log("Server Ready at" +port)});