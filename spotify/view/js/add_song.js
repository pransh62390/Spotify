
async function getapi(url) {
    const response = await fetch(url);
    
    var data = await response.json();
    if (response) {}
    show(data);
};

const show = (data) => {
    for(let i=0; i<data.length; i++) {
        var option = document.createElement("option");
        option.setAttribute('value', `${JSON.stringify(data[i])}`);
        option.innerHTML = data[i].name;
        document.getElementById("artists_list").appendChild(option);
    };
};


function addsong() {
    var form = new FormData($("#add_song")[0]);
    $.ajax({
        url: 'http://localhost:8080/app/addSong',
        method: "post",
        dataType: 'json',
        data: form,
        processData: false,
        contentType: false,
        success: function(result){},
        error: function(er){alert(er)}
    });
};


const callApi = () => {
    const api_url = "http://localhost:8080/app/getArtistList";
    getapi(api_url);
}
