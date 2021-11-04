'use strict';

async function get_num_jokes(num, lang, cat) {
    let url = `http://flask-env.eba-kizmemsb.us-east-2.elasticbeanstalk.com/api/v1/jokes?language=${lang}&number=${num}&category=${cat}`
    console.log(url)
    let elements = await fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));

    return elements
}


async function run_num() {
    let num  = document.getElementById("number").value
    let cat  = document.getElementById("category").value
    let lang = document.getElementById("language").value

    let base = document.getElementById("jokes")

    let v = get_num_jokes(num, lang, cat);
    console.log(v)
}

async function get_id_jokes(id, lang, cat) {
    let url = `http://flask-env.eba-kizmemsb.us-east-2.elasticbeanstalk.com/api/v1/jokes?language=${lang}&id=${id}&category=${cat}`
    console.log(url)
    let elements = await fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));

    return elements
}

async function run_id() {
    let num  = document.getElementById("idn").value
    let cat  = document.getElementById("category").value
    let lang = document.getElementById("language").value

    let base = document.getElementById("jokes")

    let v = get_num_jokes(num, lang, cat);
    console.log(v)
}

