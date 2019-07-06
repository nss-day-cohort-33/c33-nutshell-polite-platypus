// import { getArticles } from "./api";

function makeArtComp(art) {
  // getArticles()
  //   .then(article => article.json())
  //   .then(art => {
  return `
        <div class="artCard" id="artCard--${art.id}">
         <h1>${art.title}</h1>
         <p>${art.synopsis}</p>
         <p>${art.link}</p>
         <p>${art.date}</p>
         <button id="delete--${art.id}" class="deleteBtn">delete</button>
         <button id="edit--${art.id}" class="editBtn">edit</button>
         
        </div>
        `;
  // });
}

export { makeArtComp };
