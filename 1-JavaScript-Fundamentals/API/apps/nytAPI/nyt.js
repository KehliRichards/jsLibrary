const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'qGPfMFR10YJAsB0OyGZuNwA8nj5E8tSp'; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';
let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;

    //1                     //2   
searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3




                    //1
function fetchResults(e) {
    // console.log(e); //2
    // Assemble the full URL
    e.preventDefault(); //1
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3
    // console.log(url); //4
    console.log("URL:", url);

    //START  
    if(startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };

    if(endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };
    //END


/**********************************************************************/


      //1
    fetch(url)
        .then(function(result) {
            // console.log(result)
        return result.json(); //2
        })
        .then(function(json) {
            displayResults(json); //1 & //3
        });
}
         
    //2
    function displayResults(json) {

        // console.log("DisplayResults", json);
        // console.log(json.response.docs);
        while (section.firstChild) {
            section.removeChild(section.firstChild); //1
        }

        let articles = json.response.docs;

        if(articles.length === 0) {
            console.log("No results");
          } else {
            for(let i = 0; i < articles.length; i++) {
                let article = document.createElement('article'); //1
                let heading = document.createElement('h2'); //2
                let link = document.createElement('a'); //1
                let img = document.createElement('img');  //1
                let para = document.createElement('p');   //1
                let clearfix = document.createElement('div'); //2

                let current = articles[i]; //2
                // console.log("Current:", current); //3

                link.href = current.web_url; //4
                link.textContent = current.headline.main; //5

                para.textContent = 'Keywords: '; //3

                //4
                for(let j = 0; j < current.keywords.length; j++) {
                    //5
                    let span = document.createElement('span');   
                    //6
                    span.textContent += current.keywords[j].value + ' ';   
                    //7
                    para.appendChild(span);
                    }

                  //2
                if(current.multimedia.length > 0) {
                    //3
                    img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                    //4
                    img.alt = current.headline.main;
                }
                
                //8
                clearfix.setAttribute('class','clearfix');

                article.appendChild(heading); //3
                heading.appendChild(link); //6
                article.appendChild(img); //5
                article.appendChild(para);
                article.appendChild(clearfix);
                section.appendChild(article); //4

                // if(articles.length === 10) {
                //     nav.style.display = 'block';//shows the nav display if 10 items are in the array
                //   } else {
                //     nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
                //   }

                if (pageNumber === 0) {
                    previousBtn.style.display = 'none';
                } else {
                    previousBtn.style.display = 'block';
                }

                if (articles.length < 10 && pageNumber !== 0) {
                    nextBtn.style.display = 'none';
                    previousBtn.style.display = 'block';
                } else if(articles.length === 10) {
                    nav.style.display = 'block';
                } else {
                    nav.style.display = 'none'
                }

                if (articles.length === 10) {
                    nextBtn.style.display = 'block';
                }
                
            }
        }
        
        
    };

    function nextPage(e) {
        pageNumber++; //1
        fetchResults(e);  //2
        console.log("Page number:", pageNumber); //3
     };

    function previousPage(e) {
        if(pageNumber > 0) { //1
          pageNumber--; //2
        } else {
          return; //3
        }
        fetchResults(e); //4
        console.log("Page:", pageNumber); //5
    };



    // function nextPage(){
    // console.log("Next button clicked");
    // } //5
                      
    // function previousPage(){
    // console.log("Previous button clicked");
    // } //5