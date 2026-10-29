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
const search = document.getElementById('search');

let arrBooks = JSON.parse(localStorage.getItem("booksList")) || [];

function displayBooks(filterText = "") {
    books.innerHTML = "";
    
    const query = filterText.trim().toLowerCase();

    const sortedBooks = [...arrBooks].sort((a, b) => {
        const aMatch = (a.titre.toLowerCase().includes(query) || a.auteur.toLowerCase().includes(query) || a.date.toLowerCase().includes(query)) && query !== "";
        const bMatch = (b.titre.toLowerCase().includes(query) || b.auteur.toLowerCase().includes(query) || b.date.toLowerCase().includes(query)) && query !== "";
        return bMatch - aMatch; 
    });
    
    sortedBooks.forEach((book) => {
       
       const arrdelet = arrBooks.indexOf(book)

       const div1 = document.createElement('div');
       div1.className = "flex justify-between border-b";
       
       const div = document.createElement('div');
       div.className = "flex flex-col p-4 break-all gap-2";
       
       if (query !== "" && (book.titre.toLowerCase().includes(query) || book.auteur.toLowerCase().includes(query) || book.date.toLowerCase().includes(query))) {
           div1.classList.add("bg-blue-50");
        }
        
        
        const status = document.createElement('button');
        status.textContent = "to-read"; 
        
        const status1 = document.createElement('button');
        status1.textContent = "reading"; 
        
        const status2 = document.createElement('button');
        status2.textContent = "read"; 

        
        function updateStatusUI() {
            [status, status1, status2].forEach(btn => {
                btn.className = "px-4 py-2 text-black font-semibold border border-black";
            });
            
            if (book.status === "reading") {
                status1.classList.add("bg-green-500");
            } else if (book.status === "read") {
                status2.classList.add("bg-green-500");
            } else {
                status.classList.add("bg-green-500");
            }
        }
        updateStatusUI();
        
        const statusDiv = document.createElement('div');
        statusDiv.className = "flex mt-3 justify-center items-center mr-12";
        
        const h1 = document.createElement('h1');
        h1.textContent = book.titre;
        h1.className = "text-[#283e50] p-1 font-bold font-serif text-[30px] flex-wrap";
        
        const h2 = document.createElement('h2');
        h2.textContent = "auteur : " + book.auteur;
        h2.className = "p-1 font-bold text-[15px]";
        
        const p = document.createElement('p');
        p.textContent = "date : " + book.date;
        p.className = "pl-1 font-bold text-[15px]";
        
        const p2 = document.createElement('p');
        if (book.genre && book.genre !== "") { 
            p2.textContent = "genre : " + book.genre;
            p2.className = "p-1 font-bold text-[15px]";
        }
        
        const p3 = document.createElement('p');
        p3.textContent = book.description;
        p3.className = "p-1 text-[15px]";
        
        
        const label2 = document.createElement('label');
        label2.textContent = "titre : ";
        label2.className = "hidden";
        const titleInput = document.createElement('input');
        titleInput.type = "text";
        titleInput.value = book.titre;
        titleInput.className = "border p-2 rounded text-xl font-bold hidden"; 
        
        const label = document.createElement('label');
        label.textContent = "auteur : ";
        label.className = "hidden";
        const auteurInput = document.createElement('input');
        auteurInput.type = "text";
        auteurInput.value = book.auteur;
        auteurInput.className = "border p-2 rounded text-xl font-bold hidden"; 

        const label1 = document.createElement('label');
        label1.textContent = "date : ";
        label1.className = "hidden";
        const dateInput = document.createElement('input');
        dateInput.type = "text"; 
        dateInput.value = book.date;
        dateInput.className = "border p-2 rounded hidden"; 
        
        const label3 = document.createElement('label');
        label3.textContent = "genre : ";
        label3.className = "hidden";
        const genreInput = document.createElement('input');
        genreInput.type = "text";
        genreInput.value = book.genre || "";
        genreInput.className = "border p-2 rounded hidden";
        
        const label4 = document.createElement('label');
        label4.textContent = "description : ";
        label4.className = "hidden";
        const descInput = document.createElement('input');
        descInput.type = "text";
        descInput.value = book.description || "";
        descInput.className = "border p-2 rounded hidden"; 
        
        const buttonDiv = document.createElement('div');
        buttonDiv.className = "flex gap-2 mt-3 justify-center items-center mr-12";
        
        const modifyBtn = document.createElement('button');
        modifyBtn.textContent = "Modifier"; 
        modifyBtn.className = "px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600";
        
        const deletBtn = document.createElement('button');
        deletBtn.textContent = "Supprimer"; 
        deletBtn.className = "px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600";

        const con = document.createElement('button')
        con.textContent = "Voulez-vous supprimer ce livre ?";
        con.className = "hidden" 

        const confirm = document.createElement('button')
        confirm.textContent = "confirme"; 
        confirm.className = "px-4 py-2 bg-red-500 text-white font-semibold rounded hidden hover:bg-red-600";

        const annule = document.createElement('button')
        annule.textContent = "annule"; 
        annule.className = "px-4 py-2 bg-green-500 text-white font-semibold rounded hidden hover:bg-green-600";


        const saveBtn = document.createElement('button');
        saveBtn.textContent = "Sauvegarder";
        saveBtn.className = "px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 hidden";
        
        
        modifyBtn.addEventListener('click', () => {
            h1.classList.add('hidden');
            p.classList.add('hidden');
            h2.classList.add('hidden');
            p2.classList.add('hidden');
            p3.classList.add('hidden');
            
            label2.classList.remove('hidden');
            titleInput.classList.remove('hidden');
            label1.classList.remove('hidden');
            dateInput.classList.remove('hidden');
            label.classList.remove('hidden');
            auteurInput.classList.remove('hidden');
            label3.classList.remove('hidden');
            genreInput.classList.remove('hidden');
            label4.classList.remove('hidden');
            descInput.classList.remove('hidden');
            
            modifyBtn.classList.add('hidden');
            saveBtn.classList.remove('hidden');
        });

        
        
        
        saveBtn.addEventListener('click', () => {
            if (titleInput.value.trim() !== ""){
                 book.titre = titleInput.value.trim()
                }
            if (dateInput.value.trim() !== "") {
                book.date = dateInput.value.trim()
            }  
            if (auteurInput.value.trim() !== "") {
                book.auteur = auteurInput.value.trim()
            }
            book.genre = genreInput.value.trim();
            book.description = descInput.value.trim();
            
            
            localStorage.setItem("booksList", JSON.stringify(arrBooks));
            displayBooks(search.value);
        });

       
        deletBtn.addEventListener('click', ()=> {
            modifyBtn.classList.add('hidden')
            deletBtn.classList.add('hidden')
            con.classList.remove('hidden')
            confirm.classList.remove('hidden')
            annule.classList.remove('hidden')

            annule.addEventListener('click', ()=>{
            confirm.classList.add('hidden')
            annule.classList.add('hidden') 
            div1.classList.remove("bg-red-200")

             modifyBtn.classList.remove('hidden')
            deletBtn.classList.remove('hidden')
            con.classList.add('hidden')
            })
            
            div1.classList.add("bg-red-200")
            confirm.addEventListener('click', ()=>{

            arrBooks.splice(arrdelet, 1);
        
            localStorage.setItem("booksList", JSON.stringify(arrBooks));
            displayBooks(search.value);
            })
        })
        
       
        status.addEventListener('click', () => {
            book.status = "to-read";
            localStorage.setItem("booksList", JSON.stringify(arrBooks));
            updateStatusUI();
        });
        
        status1.addEventListener('click', () => {
            book.status = "reading";
            localStorage.setItem("booksList", JSON.stringify(arrBooks));
            updateStatusUI();
        });
        
        status2.addEventListener('click', () => {
            book.status = "read";
            localStorage.setItem("booksList", JSON.stringify(arrBooks));
            updateStatusUI();
        });

        buttonDiv.appendChild(modifyBtn);
        buttonDiv.appendChild(saveBtn);
        buttonDiv.appendChild(deletBtn);
        buttonDiv.appendChild(con);
        buttonDiv.appendChild(confirm);
        buttonDiv.appendChild(annule);
        
        
        statusDiv.appendChild(status);
        statusDiv.appendChild(status1);
        statusDiv.appendChild(status2);
        
        div.appendChild(h1);
        div.appendChild(label2);
        div.appendChild(titleInput); 
        div.appendChild(h2);
        div.appendChild(label);
        div.appendChild(auteurInput); 
        div.appendChild(p);
        div.appendChild(label1);
        div.appendChild(dateInput);  
        if (book.genre && book.genre !== "") {
            div.appendChild(p2);
            div.appendChild(label3);
            div.appendChild(genreInput); 
        }
        if (book.description && book.description !== "") {
            div.appendChild(p3);
            div.appendChild(label4);
            div.appendChild(descInput);
        }
        div.appendChild(statusDiv);
        div1.appendChild(div);
        div1.appendChild(buttonDiv);

        books.appendChild(div1);
    });
}

displayBooks();

search.addEventListener('input', () => {
    displayBooks(search.value);
});

titre.addEventListener('input', ()=>{
    if (titre.value.trim() === "" || titre.value.length > 30 || titre.value.length < 3) {
        titreErour.textContent = "errour !!!!!";
        titreErour.classList.remove('hidden');
    } else {
        titreErour.classList.add('hidden');
    }
});

auteur.addEventListener('input', ()=>{
    if (auteur.value.trim() === "" || auteur.value.length > 30 || auteur.value.length < 3) {
        auteurErour.textContent = "errour !!!!!";
        auteurErour.classList.remove('hidden');
    } else {
        auteurErour.classList.add('hidden');
    }
});

genre.addEventListener('input', ()=>{
    if (genre.value.trim() === "" || genre.value.length > 20 || genre.value.length < 3) {
        genreErour.textContent = "errour !!!!!";
        genreErour.classList.remove('hidden');
    } else {
        genreErour.classList.add('hidden');
    }
});

description.addEventListener('input', ()=>{
    if (description.value.trim() === "" || description.value.length > 40 || description.value.length < 3) {
        descriptionErour.textContent = "errour !!!!!";
        descriptionErour.classList.remove('hidden');
    } else {
        descriptionErour.classList.add('hidden');
    }
});

ajouterLiver.addEventListener('click', function () {
    let errour = false;
    
    if (titre.value.trim() === "" || titre.value.length > 30 || titre.value.length < 3) {
        titreErour.textContent = "errour !!!!!";
        titreErour.classList.remove('hidden');
        errour = true;
    } else {
        titreErour.classList.add('hidden');
    }
    
    if (auteur.value.trim() === "" || auteur.value.length > 30 || auteur.value.length < 3) {
        auteurErour.textContent = "errour !!!!!";
        auteurErour.classList.remove('hidden');
        errour = true;
    } else {
        auteurErour.classList.add('hidden');
    }
    
    if (date.value === "") {
        dateErrour.textContent = "errour !!!!!";
        dateErrour.classList.remove('hidden');
        errour = true;
    } else {
        dateErrour.classList.add('hidden');
    }
    
    if (errour === false) {
        const newBook = {
            titre: titre.value,
            auteur: auteur.value,
            date: date.value,
            genre: genre.value,
            description: description.value,
            status: "to-read"
        };
        
        arrBooks.push(newBook);
        localStorage.setItem("booksList", JSON.stringify(arrBooks));
        
        displayBooks(search.value);
        
        titre.value = '';
        auteur.value = '';
        date.value = '';
        genre.value = '';
        description.value = '';
    }
});