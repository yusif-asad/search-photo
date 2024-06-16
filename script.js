const searchInput = document.getElementById(`searchInput`);
const searchButton = document.getElementById(`searchButton`);
const clearButton = document.getElementById(`clearButton`);
const imageListWrapper = document.getElementById(`imageListWrapper`);

runeventListener();

function runeventListener() {
  searchButton.addEventListener(`click`, search);
  
}

clearButton.addEventListener(`click`,()=>{
    searchInput.innerHTML="";
})

function search(event) {
    event.preventDefault();
   
  const value = searchInput.value.trim();
  if (!value) {
    alert('Search input is empty.');
    return;
  }
  fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
    method: "GET",
    headers: {
      Authorization : `Client-ID 00Z8NcW-yYQpJtXmeDuhzQoWvDMrdzIXoIVsqAf5CCc}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
        let html=``;
       Array.from(data.results).forEach(image => {
        html+= `<img src="${image.urls.small}">`;
    
       });
       imageListWrapper.insertAdjacentHTML(`beforeend`,html);
    })
    .catch((err) => console.log(err));

 
  
}
