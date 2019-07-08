// import { getArticles } from "./api";

function makeArtComp(art) {
  // getArticles()
  //   .then(article => article.json())
  //   .then(art => {
  let artComponent = `
        <div class="artCard" id="artCard--${art.id}">
         <h1>${art.title}</h1>
         <p>${art.synopsis}</p>
         <p>${art.link}</p>
         <p>${art.date}</p>
         <button id="delete--${art.id}" class="deleteArtBtn">delete</button>
         <button id="edit--${art.id}" class="editArtBtn">edit</button>
         
        </div>
        `;
  return artComponent;
  // });
}

export { makeArtComp };
