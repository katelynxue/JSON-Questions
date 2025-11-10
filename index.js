import data from './rawBooks.json' with { type: 'json' };
console.log(data);
console.log(data[57]);
console.log(data[57].title);

const filteredBooks = data.filter(book => 
    book.title !== "zzzzzz" &&
    book.title !== ""

);
console.log(filteredBooks);

// 1. avg time it takes me to read a book
const filteredReadBooks = data.filter(book => 
  book["Time on TBR (days)"] !== "N/A" && 
  book["Time on TBR (days)"] !== "zzzzzz"
);

let sum = 0;
for (let i = 0; i<filteredReadBooks.length; i++){
    sum += Number(filteredReadBooks[i]["Time on TBR (days)"]);
}
const averageTime = sum / filteredReadBooks.length;

console.log(averageTime);

// 2. % of books that are read
const readBooks = filteredBooks.filter(book => book["read?"] !== "No" );
console.log(readBooks);

const NumberOfReadBooks = readBooks.length;
console.log(NumberOfReadBooks);

const totalBooks = filteredBooks.length;
const fractionOfBooksRead = NumberOfReadBooks / totalBooks;
console.log(fractionOfBooksRead);
const percentOfBooksRead = fractionOfBooksRead * 100;
console.log(percentOfBooksRead);

// 3. what my fav genre based on how many purchaes
const allGenres = filteredBooks.map(book => book.category);
console.log(allGenres);
const genres = [...new Set(allGenres)];
console.log(genres);

let favGenre = null;
let favCount = 0;

for(let i = 0; i < genres.length; i++) {
  const genre = genres[i];
  const count = allGenres.filter(g => g === genre).length;

  if (count > favCount) {
    favCount = count;
    favGenre = genre;
  }
}
console.log(favGenre);

// 4. what year have i aquired the most books
const allDates = filteredBooks.map(book => book['Date Bought']);
console.log(allDates);

const filteredDates = allDates.filter(date => date && date !== "N/A" && date !== "zzzzzz")
const allYears = filteredDates.map(date => date.split(", ")[1]);
console.log(allYears);

let mostCount = null;
let mostYear = 0;

for(let x = 0; x < allYears.length; x++) {
  const year = allYears[x];
  const count = allYears.filter(y => y === year).length;

  if (count > mostCount) {
    mostCount = count;
    mostYear = year;
  }
}
console.log(mostYear);

// 5. come up with your own stat


