const ajouterLiver = document.getElementById('ajouter-liver');
const titre = document.getElementById('titre');
const auteur = document.getElementById('auteur');
const date = document.getElementById('date');
const genre = document.getElementById('genre');
const description = document.getElementById('description');
const titreErour = document.getElementById('titer-errour');
const auteurErour = document.getElementById('auteur-errour');
const genreErour = document.getElementById('genre-errour');
const descriptionErour = document.getElementById('description-errour');
const dateErrour = document.getElementById('date-errour');
const books = document.getElementById('books');


titre.addEventListener('input', ()=>{
    if (titre.value.trim() === "" || titre.value.length > 30 || titre.value.length < 3) {
        titreErour.textContent = "errour !!!!!"
        titreErour.classList.remove('hidden')
    } else {
        titreErour.classList.add('hidden');
    }
});


auteur.addEventListener('input', ()=>{
    if (auteur.value.trim() === "" || auteur.value.length > 30 || auteur.value.length < 3) {
        auteurErour.textContent = "errour !!!!!"
        auteurErour.classList.remove('hidden')
    } else {
        auteurErour.classList.add('hidden');
    }
});



genre.addEventListener('input', ()=>{
    if (genre.value.trim() === "" || genre.value.length > 20 || genre.value.length < 3) {
        genreErour.textContent = "errour !!!!!"
        genreErour.classList.remove('hidden')
    } else {
        genreErour.classList.add('hidden');
    }
});


description.addEventListener('input', ()=>{
    if (description.value.trim() === "" || description.value.length > 40 || description.value.length < 3) {
        descriptionErour.textContent = "errour !!!!!"
        descriptionErour.classList.remove('hidden')
    } else {
        descriptionErour.classList.add('hidden');
    }
});

ajouterLiver.addEventListener('click', function () {

    errour = false

    if (titre.value.trim() === "" || titre.value.length > 30 || titre.value.length < 3) {
        titreErour.textContent = "errour !!!!!"
        titreErour.classList.remove('hidden')
        errour = true;
    } else {
        titreErour.classList.add('hidden');
    }

    
    if (auteur.value.trim() === "" || auteur.value.length > 30 || auteur.value.length < 3) {
        auteurErour.textContent = "errour !!!!!"
        auteurErour.classList.remove('hidden')
        errour = true;
    } else {
        auteurErour.classList.add('hidden');
    }

    if (genre.value.trim() === "" || genre.value.length > 20 || genre.value.length < 3) {
        genreErour.textContent = "errour !!!!!"
        genreErour.classList.remove('hidden')
        errour = true;
    } else {
        genreErour.classList.add('hidden');
    }

    if (date.value === "") {
        dateErrour.textContent = "errour !!!!!"
        dateErrour.classList.remove('hidden')
        errour = true;
    } else {
        dateErrour.classList.add('hidden')
    }

    if (description.value.trim() === "" || description.value.length > 40 || description.value.length < 3) {
        descriptionErour.textContent = "errour !!!!!"
        descriptionErour.classList.remove('hidden')
        errour = true;
    } else {
        descriptionErour.classList.add('hidden');
    }

    if (errour === false) {
        
        const div = document.createElement('div')
        div.classList = "flex  flex-col m-3 border p-4 rounded-xl word-break: break-all lg:m-7 lg:h-80 lg:col-span-1"
    
        const h1 = document.createElement('h1')
        h1.textContent = titre.value
        h1.className = "text-[#283e50] p-1 font-bold font-serif text-[30px] flex-wrap"

        const h2 = document.createElement('h2')
        h2.textContent = "auteur : " + auteur.value
        h2.className = " p-1 font-bold text-[15px]"

        const p = document.createElement('p')
        p.textContent = "date : " + date.value
        p.className = " pl-1 font-bold text-[15px]";

        const p2 = document.createElement('p')
        p2.textContent = "genre : " + genre.value
        p2.className = " p-1 font-bold text-[15px]";
        
        const p3 = document.createElement('p')
        p3.textContent = description.value
        p3.className = " p-1  text-[15px]";

    
        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(p3)
        books.appendChild(div)

        titre.value = ''
        auteur.value = ''
        date.value = ''
        genre.value = ''
        description.value = ''
        }
})