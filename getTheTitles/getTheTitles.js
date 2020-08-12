const getTheTitles = function(books) {
  const bookTitles = books.map(function(book) {
    //console.log(book.title);
    return book.title;
  });
  return bookTitles;
}
/*
use .filter pass in each object one by one and retrun tru to add to empty array
of title (.title or use map to return .title since it returns an arr
*/
module.exports = getTheTitles;
