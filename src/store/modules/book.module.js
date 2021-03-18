import bookService from '@/services/bookService.js';
import { Utils } from '@/services/utilsService.js';
export default {
    state: {
        books: null,
        filterBy: null,
        selectedBook:null

    },
    getters: {

        booksToShow(state) {
            const { books } = state
            if (!state.filterBy) return books;
            const regex = new RegExp(state.filterBy.byName, "i");
            const booksToShow = books.filter((book) => {
                return (
                    regex.test(book.title) &&
                    book.listPrice.amount >= state.filterBy.fromPrice &&
                    book.listPrice.amount <= state.filterBy.toPrice
                );
            });
            return booksToShow;
        },
        selectedBook(state){
            return state.selectedBook
        }


    },
    mutations: {
        setBooks(state, payload) {
            state.books = payload.books
            console.log('setBook',state.books);
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        },
        removeBook(state, { bookId }) {
            const idx = state.books.findIndex(book => book._id === bookId)
            state.books.splice(idx, 1)
        },
        addBook(state, { bookToAdd }) {
            state.books.push(bookToAdd)
        },
        removeReview(state, { reviewId, book }) {
            const copyBook = { ...book }
            copyBook.reviews = copyBook.reviews.filter(review => review._id !== reviewId)
            console.log('copyBook',copyBook);
            const idx = state.books.findIndex(currBook => currBook._id === copyBook._id)
            console.log('idx',idx);
            state.books.splice(idx, 1, copyBook)

        },
        addReview(state, { reviewToAdd, book }) {
            console.log('state',state);
            console.log('reviewToAdd',reviewToAdd);
            let copyBook = { ...book }
            reviewToAdd._id = Utils.getRandomId()
            reviewToAdd.datePicker=Date.now()
            console.log('befor',copyBook.reviews);
            if (copyBook.reviews) copyBook.reviews = [...copyBook.reviews, reviewToAdd]
            else copyBook.reviews = [reviewToAdd]
            // if (!copyBook.reviews){
            //     console.log('if');
            //     copyBook.reviews=[reviewToAdd]
            // } 
            // else {
            //     console.log('else');
            //     copyBook.reviews = [...copyBook.reviews, reviewToAdd]
            // }
            console.log('after',copyBook.reviews);
            console.log('after',state.books);
            const idx = state.books.findIndex(currBook => currBook._id === copyBook._id)
            console.log('idxttttttt',idx);
            state.books.splice(idx, 1, copyBook)

        },
        
        setSelectedBook(state, { book }) {
            state.selectedBook = book
        }


    },
    actions: {
        async loadBooks(context) {
            const books = await bookService.query()
            context.commit({ type: 'setBooks', books })
        },

        async removeBook(context, { bookId }) {
            try {

                await bookService.remove(bookId);
                context.commit({ type: 'removeBook', bookId })
                context.dispatch({ type: 'showMsg', msg: { typeMsg: 'success', txt: `Book was successfully remove` } })
                
            } catch (err) {
                context.dispatch({ type: 'showMsg', msg: { typeMsg: 'error', txt: `Book was not remove` } })

            }
        },
        async addBook(context, { bookToAdd }) {
       
            try {
                context.commit({ type: 'addBook', bookToAdd })
                context.dispatch({ type: 'showMsg', msg: { typeMsg: 'success', txt: `Book was successfully add` } })
                
            } catch (err) {
                context.dispatch({ type: 'showMsg', msg: { typeMsg: 'error', txt: `Book was not add` } })

            }
        },
        async removeReview(context, { reviewId, book }) {
           
            try {
                await bookService.deleteReview(reviewId, book);
                context.commit({ type: 'removeReview', reviewId, book })
               
                context.dispatch({ type: 'showMsg', msg: { typeMsg: 'success', txt: `Review was successfuly remove` } })

            } catch (err) {

                context.dispatch({ type: 'showMsg', msg: { typeMsg: 'error', txt: `Review was not remove` } })
            }

        },

        async addReview(context, { reviewToAdd, book }) {

            try {

                await bookService.addReview(reviewToAdd, book);
                context.commit({ type: 'addReview', reviewToAdd, book })
                context.dispatch({ type: 'showMsg', msg: { typeMsg: 'success', txt: `Review was successfuly add` } })
            } catch (err) {
                context.dispatch({ type: 'showMsg', msg: { typeMsg: 'error', txt: `Review was not add` } })

            }
        },
        async getBookById(context, { bookId }) {
            const book = await bookService.get(bookId)
            context.commit({ type: 'setSelectedBook', book })
        }


    },
}