//async-await

async function kuchKam(a,b){
 console.log("wait for promise");
console.log(a);
  let data = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  console.log(data.json());
  console.log(b);
}

console.log(kuchKam(2,4));