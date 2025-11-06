import data from './rawBooks.json' with { type: 'json' };
console.log(data);
console.log(data[57]);
console.log(data[57].title);

const filteredZ = data.filter(book => book.title !== "zzzzzz");
console.log(filteredZ);

const filteredEmpty = data.filter(book => book.title !=="");
console.log(filteredEmpty);
// 1. avg time it takes me to read a book
const filteredReadBooks = data.filter(book => 
  book["Time on TBR (days)"] !== "N/A" && 
  book["Time on TBR (days)"] !== "zzzzzz"
);

let sum = 0;
for (let i = 0; i++; i<=data.length){
    sum += arr[i];
}
return sum / arr.length;


// 2. % of books that are read
// 3. what my fav genre based on how many purchaes
// 4. what year have i quired the most books
// 5. come up with your own stat



// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
