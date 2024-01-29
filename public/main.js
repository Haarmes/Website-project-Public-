const db = require("./mysql")

let dict = [
    {"id": "empty","name": "" ,"series":"","picture": "", "tags": ["empty"]},
    {"id": "bookName1","name": "Name of the wind","series":"The KingKiller Chronicle","picture": "https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg", "tags": ["page1", "The KingKiller Chronicle", "recommend"]},
    {"id": "bookName2","name": "The Wise Man's Fear","series":"The KingKiller Chronicle","picture": "https://upload.wikimedia.org/wikipedia/en/7/7b/The_Wise_Man%27s_Fear.jpg", "tags": ["page1", "The KingKiller Chronicle", "recommend"]},
    {"id": "bookName3","name":"Assassin's Apprentice","series":"The Farseer Trilogy","picture": "https://upload.wikimedia.org/wikipedia/en/2/26/Robin_Hobb_-_Assassin%27s_Apprentice_Cover.jpg", "tags": ["page1","The Farseer Trilogy"]},
    {"id": "bookName4","name":"Royal Assassin","series":"The Farseer Trilogy","picture": "https://upload.wikimedia.org/wikipedia/en/2/2f/Robin_Hobb_-_Royal_Assassin_Cover.jpg", "tags": ["page1","The Farseer Trilogy"]},
    {"id": "bookName5","name":"Assassin's Quest","series":"The Farseer Trilogy","picture": "https://upload.wikimedia.org/wikipedia/en/1/1c/Robin_Hobb_-_Assassin%27s_Quest_Cover.jpg", "tags": ["page1","The Farseer Trilogy"]},
    {"id": "bookName6","name":"Fool's Errand","series":"Tawny Man","picture": "https://upload.wikimedia.org/wikipedia/en/d/d2/Robin_Hobb_-_Fool%27s_Errand_Cover.jpg", "tags": ["page1", "Tawny Man"]},
    {"id": "bookName7","name":"The Golden Fool","series":"Tawny Man","picture": "https://upload.wikimedia.org/wikipedia/en/a/a1/Robin_Hobb_-_The_Golden_Fool_Cover.jpg", "tags": ["page1", "Tawny Man"]},
    {"id": "bookName8","name":"Fool's Fate","series":"Tawny Man","picture": "https://upload.wikimedia.org/wikipedia/en/7/7a/Robin_Hobb_-_Fool%27s_Fate_Cover.jpg", "tags": ["page1", "Tawny Man"]},
    {"id": "bookName9","name":"Fool's Assassin","series":"The Fitz and the Fool","picture": "https://upload.wikimedia.org/wikipedia/en/d/d8/Fool%27s_Assassin_Cover.jpg", "tags": ["page1", "The Fitz and the Fool"]},
    {"id": "bookName10","name":"Fool's Quest","series":"The Fitz and the Fool","picture": "https://upload.wikimedia.org/wikipedia/en/8/8b/Fool%27s_Quest_Cover.jpg", "tags": ["page1", "The Fitz and the Fool"]},
    {"id": "bookName11","name":"Assassin's Fate","series":"The Fitz and the Fool","picture": "https://upload.wikimedia.org/wikipedia/en/c/c7/Assassin%27s_Fate.jpg", "tags": ["page1", "The Fitz and the Fool"]},
    {"id": "bookName12","name":"The Blade Itself","series":"The First Law","picture":  "https://i0.wp.com/joeabercrombie.com/wp-content/uploads/2014/03/uk-orig-the-blade-itself.jpg?resize=424%2C650&ssl=1", "tags": ["page1","The First Law", "recommend"]},
    {"id": "bookName13","name":"Before They Are Hanged","series":"The First Law","picture": "https://i0.wp.com/joeabercrombie.com/wp-content/uploads/2014/03/uk-orig-before-they-are-hanged.jpg?resize=423%2C650&ssl=1", "tags": ["page1","The First Law", "recommend"]},
    {"id": "bookName14", "name": "Last Argument of Kings","series":"The First Law","picture": "https://i0.wp.com/joeabercrombie.com/wp-content/uploads/2014/03/uk-orig-last-argument-of-kings.jpg?resize=424%2C650&ssl=1", "tags": ["page1","The First Law", "recommend"]},
    {"id": "bookName15", "name": "Best Served Cold","series":"The First Law","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347732723l/2315892.jpg", "tags":["page2","The First Law"]},
    {"id": "bookName16","name":"The Heroes","series":"The First Law","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1375671200l/9300768.jpg","tags":["page2","The First Law"]},
    {"id": "bookName17","name":"Red Country","series":"The First Law","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333663008l/13521459.jpg","tags":["page2","The First Law"]},
    {"id": "bookName18","name":"A Little Hatred","series":"The First Law","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1558367199l/35606041.jpg","tags":["page2","The First Law"]},
    {"id": "bookName19","name":"The Trouble with Peace","series":"The First Law","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590592843l/40701777._SY475_.jpg","tags":["page2","The First Law"]},
    {"id": "bookName20","name":"The Wisdom of Crowds","series":"The First Law","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618942363l/40701780._SY475_.jpg","tags":["page2","The First Law"]},
    {"id": "bookName21","name":"A Game of Thrones","series":"A Song of Ice and Fire","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562726234l/13496.jpg","tags":["page2","A Song of Ice and Fire"]},
    {"id": "bookName22","name":"A Clash of Kings","series":"A Song of Ice and Fire","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567840212l/10572.jpg","tags":["page2","A Song of Ice and Fire"]},
    {"id": "bookName23","name":"A Storm of Swords","series":"A Song of Ice and Fire","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571318786l/62291.jpg","tags":["page2","A Song of Ice and Fire"]},
    {"id": "bookName24","name":"A Feast for Crows","series":"A Song of Ice and Fire","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661026821l/13497._SY475_.jpg","tags":["page2","A Song of Ice and Fire"]},
    {"id": "bookName25","name":"A Dance with Dragons","series":"A Song of Ice and Fire","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581625286l/10664113._SX318_.jpg","tags":["page2","A Song of Ice and Fire"]},
    {"id": "bookName26","name":"The Fellowship of the Ring","series":"The Lord of the Rings","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1654215925l/61215351._SY475_.jpg","tags":["page2","The Lord of the Rings"]},
    {"id": "bookName27","name":"The Two Towers","series":"The Lord of the Rings","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1654216149l/61215372._SY475_.jpg","tags":["page2","The Lord of the Rings"]},
    {"id": "bookName28","name":"The Return of the King","series":"The Lord of the Rings","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1654216226l/61215384._SY475_.jpg","tags":["page2","The Lord of the Rings"]},
    {"id": "bookName29","name":"The Hobbit","series":"The Lord of the Rings","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546071216l/5907.jpg","tags":["page3","The Lord of the Rings"]},
    {"id": "bookName30","name":"The Way of Kings","series":"The Stormlight Archive","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1659905828l/7235533._SY475_.jpg","tags":["page3","The Stormlight Archive"]},
    {"id": "bookName31","name":"Words of Radiance","series":"The Stormlight Archive","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1659905768l/17332218._SY475_.jpg","tags":["page3","The Stormlight Archive"]},
    {"id": "bookName32","name":"Oathbringer","series":"The Stormlight Archive","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1654573897l/34002132._SY475_.jpg","tags":["page3","The Stormlight Archive"]},
    {"id": "bookName33","name":"The Last Wish","series":"The Witcher","picture": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529591917l/40603587._SX318_.jpg","tags":["page3","The Witcher","recommend"]},
    {"id": "bookName34","name":"Sword of Destiny","series":"The Witcher","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433369883l/25454056._SY475_.jpg","tags":["page3","The Witcher","recommend"]},
    {"id": "bookName35","name":"Blood of Elves","series":"The Witcher","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1589998653l/6043781._SX318_.jpg","tags":["page3","The Witcher","recommend"]},
    {"id": "bookName36","name":"The Time of Contempt","series":"The Witcher","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1443278961l/14781491._SY475_.jpg","tags":["page3","The Witcher","recommend"]},
    {"id": "bookName37","name":"Baptism of Fire","series":"The Witcher","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1443279182l/18656031._SY475_.jpg","tags":["page3","The Witcher","recommend"]},
    {"id": "bookName38","name":"The Tower of the Swallow","series":"The Witcher","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457652195l/18247597._SY475_.jpg","tags":["page3","The Witcher","recommend"]},
    {"id": "bookName39","name":"Lady of the Lake","series":"The Witcher","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1481521908l/31933977._SY475_.jpg","tags":["page3","The Witcher","recommend"]},
    {"id": "bookName40","name":"Season of Storm","series":"The Witcher","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1514124650l/36099978.jpg","tags":["page3","The Witcher","recommend"]},
    {"id": "bookName41","name":"The Final Empire","series":"Mistborn","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617768316l/68428._SY475_.jpg","tags":["page3","Mistborn"]},
    {"id": "bookName42","name":"The Well of Ascension","series":"Mistborn","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619538925l/68429._SY475_.jpg","tags":["page3","Mistborn"]},
    {"id": "bookName43","name":"The Hero of Ages","series":"Mistborn","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628563911l/2767793._SY475_.jpg","tags":["page4","Mistborn"]},
    {"id": "bookName44","name": "The Alloy of Law","series":"Mistborn","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442889632l/10803121._SY475_.jpg","tags":["page4","Mistborn"]},
    {"id": "bookName45","name":"The Three-Body Problem","series":"Remembrance of Earth's Past","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1415428227l/20518872.jpg","tags":["page4","Remembrance of Earth's Past","recommend"]},
    {"id": "bookName46","name":"The Dark Forest","series":"Remembrance of Earth's Past","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1412064931l/23168817.jpg","tags":["page4","Remembrance of Earth's Past","recommend"]},
    {"id": "bookName47","name":"Death's End","series":"Remembrance of Earth's Past","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1430330507l/25451264.jpg","tags":["page4","Remembrance of Earth's Past","recommend"]},
    {"id": "bookName48","name":"Foundation","series":"Foundation","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg","tags":["page4","Foundation"]},
    {"id": "bookName49","name":"Foundation and Empire","series":"Foundation","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391454612l/29581.jpg","tags":["page4","Foundation"]},
    {"id": "bookName50","name":"Second Foundation","series":"Foundation","picture":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661015922l/29580._SY475_.jpg","tags":["page4","Foundation"]},


    //"id":,"name":,"picture":,"tags":,
    
]

let clicked_last = ""

function loadFromDatabase() {
    try {
    db.promise().query("select * from polls")}
    catch (err) {
        console.log(err)
    }
}

function searchTagFunction(tag, bookname = "") {
    if (bookname != "") {
        for (i = 0; i < Object.keys(dict).length; i++){
        
      
            if (Object.values(dict)[i]["id"] == bookname){
                if (Object.values(dict)[i]["tags"].includes(tag)) {
                    
                    return true
                }}}
    }
    let booksWithTag = [];
   
    for (i = 0; i < Object.keys(dict).length; i++){
        
      
        if (Object.values(dict)[i]["tags"].includes(tag)){
          
            let keyToPush = Object.keys(dict)[i]
            
            let keyValuesToPush = Object.values(dict)[i]
            
            booksWithTag.push(keyValuesToPush)
          
           
        }
    }
    
    return booksWithTag
}
function switchBookPageFunction(id) {
    loadFromDatabase() 
    let ulList = document.querySelector(".book-list");
    ulList.replaceChildren();
    let newitems = searchTagFunction(id);
    console.log(newitems)
    
    for (i = 0; i < newitems.length; i++) {
        
        li = document.createElement("li")
        li.className = "book-name"
        li.id = newitems[i]["id"]
        li.innerHTML = newitems[i]["name"]
        li.setAttribute("onclick", "bookClickFunction(id)")
        console.log()
        ulList.appendChild(li)
        
    }
    }


function bookClickFunction(id) {
    allbooks = document.querySelectorAll(".book-name")

    allbooks.forEach(element => {
        element.style.color = "white";
        element.style.fontSize = "2rem"
       

    });
    document.querySelector(".recommend-text").innerHTML = ""
    if (id != clicked_last) {
        
        
    document.getElementById(id)
        .style.color = "lightblue";
    document.getElementById(id)
        .style.fontSize = "2.2rem";

    document.getElementById("book-name-id").innerHTML = document.getElementById(id).innerHTML
    bookChangeImageFunction(id)
    if (searchTagFunction("recommend", id) == true)  {
        console.log("yes")
        document.querySelector(".recommend-text").innerHTML = "Recommend"
    }
    clicked_last = id
    for (i = 0; i < Object.keys(dict).length; i++){
  
      
        if (Object.values(dict)[i]["id"] == id){
            document.querySelector("#book-series-id").innerHTML = dict[i]["series"]
            
    
    }}}
        
    else {
      
        clicked_last = ""
        bookInfoClearFunction()
    }
}


function bookChangeImageFunction(id) {
    
    for (i = 0; i < dict.length; i++){
        if (dict[i]["id"] == id) {
            console.log(dict[i]["picture"])
            document.getElementById("book-image-id").src = dict[i]["picture"]
            
        }
    }
   

}

function bookInfoClearFunction() {
    
    document.getElementById("book-image-id").src = dict[0]["picture"]
    document.getElementById("book-name-id").innerHTML = ""
    document.getElementById("book-series-id").innerHTML = ""
    document.querySelector(".recommend-text").innerHTML = ""

}