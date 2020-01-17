// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

 axios.get('https://lambda-times-backend.herokuapp.com/articles')
 .then(response => {
 //console.log(`THEN IS WORKING`, dataObj.data);
 const articles = Object.values(response.data.articles);
 console.log(articles);

 articles.forEach(array => {
  articles.forEach(article => {
  const newCard = articleCreator(article);
   articleEntryPoint.appendChild(newCard);
 })
})      
 })
 function articleCreator(article){
    const newCard=document.createElement('div'),
          newHeadDiv =document.createElement('div'),
          newAutorDiv =document.createElement('div'),
          imgDiv = document.createElement('div'),
          autorImg = document.createElement('img'),
          autorSpan = document.createElement('span');

 //  // set class names
          newCard.classList.add('card');
          newHeadDiv.classList.add('headline');
          newAutorDiv.classList.add('autor');
          imgDiv.classList.add('img-container');

          newCard.appendChild(newHeadDiv);
          newCard.appendChild(newAutorDiv);
          autorImg.appendChild(imgDiv);
          newAutorDiv.appendChild(autorSpan);

 // // set text content
          newHeadDiv.textContent= article.headline;
          autorImg.src = article.autorPhoto;
          autorSpan.textContent = article.autorName;

          return newCard;
        }
        const articleEntryPoint =document.querySelector('.cards-container');
