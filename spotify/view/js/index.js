async function getapi(url, show) {
    const response = await fetch(url);
    
    var data = await response.json();
    if (response) {}
    show(data);
};


const show = (data) => {
    // console.log(data);
    var topSongs = "";
    for(let i=0; i<data.length; i++) {
        const date = new Date(data[i].rls_date).toLocaleString("en-us", { month: "long", day: "2-digit",  year: "numeric"});
        var tr = `<tbody><tr class="align-middle" style="align-items: center;">
        <td><img src="${data[i].cover_img}" alt="" width="100px" height="100px"></td>
        <td>${data[i].name}</td>
        <td>${date}</td>
        <td>${data[i].artistsNames}</td>
        <td><div class="rating" id="${i}">
        <span class="rating__result"></span> 
        <i class="rating__star far fa-star"></i>
        <i class="rating__star far fa-star"></i>
        <i class="rating__star far fa-star"></i>
        <i class="rating__star far fa-star"></i>
        <i class="rating__star far fa-star"></i>
        </div></td>
        </tr></tbody>`;
        topSongs += tr;
    };
    document.getElementById("topSongs").innerHTML += topSongs;
};

const show2 = (data) => {
    console.log(data);
    var topArtists = "";
    for(let i=0; i<data.length; i++) {
        const date = new Date(data[i].dob).toLocaleString("en-us", { month: "long", day: "2-digit",  year: "numeric"});

        var tr = `<tbody><tr class="align-middle" style="align-items: center;">
        <td>${data[i].name}</td>
        <td>${date}</td>
        <td>songs</td>
        </tbody>`;
        topArtists += tr;
    };
    document.getElementById("topArtists").innerHTML += topArtists;
};

// rating feature functions
function executeRating(stars, result) {
    const starClassActive = "rating__star fas fa-star";
    const starClassUnactive = "rating__star far fa-star";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
       star.onclick = () => {
          i = stars.indexOf(star);
 
          if (star.className.indexOf(starClassUnactive) !== -1) {
             printRatingResult(result, i + 1);
             for (i; i >= 0; --i) stars[i].className = starClassActive;
          } else {
             printRatingResult(result, i);
             for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
          }
       };
    });
 }
 
 function printRatingResult(result, num = 0) {
    // const parent = result.parentNode;
    // console.log(parent);
    result.textContent = `${num}/5`;
 }

//  ----------------------------------------------------------------------------------
const callApi = async () => {
    const api_url_song = "http://localhost:8080/app/top_songs";
    try {
        await getapi(api_url_song, show);
    } catch (error) {
        console.log(error);
    }
    // call top Artist api too
    const api_url_artist = "http://localhost:8080/app/top_artists";
    try {
        await getapi(api_url_artist, show2);
    } catch (error) {
        console.log(error);
    }
    //
    const ratingStars = [...document.getElementsByClassName("rating__star")];
    const ratingResult = document.querySelector(".rating__result");
    // const elmid = ratingResult.getAttribute("id");
    // const parent = ratingResult.childNodes;
    // console.log(parent);
    printRatingResult(ratingResult);
    executeRating(ratingStars, ratingResult);
}
