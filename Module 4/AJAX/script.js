async function getDataWithXHR() {
    try {
        const data = await makeRequestWithXHR();
        updatePage("XHR", data);
    } catch (error) {
        console.error("XHR failed: ", error);
    }
};

function makeRequestWithXHR() {
    return new Promise((resolve, reject) => {
        const xhr  = new XMLHttpRequest();
        const resource = "https://jsonplaceholder.typicode.com/todos/3";

        xhr.open("GET", resource, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let resp = JSON.parse(xhr.response);
                    resolve(resp);
                } else {
                    reject(new Error(`HTTP error! status: ${this.response.status}`));
                }
            }
        }

        xhr.send();
    });
};

async function getDataWithFetch() {
    try {
        const resource = "https://jsonplaceholder.typicode.com/posts/1";
        const options = {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {"Content-Type": "application/json"}};
        const response = await fetch(resource, options);

        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Output the fetched data
        updatePage("Fetched", data);

    } catch (error) {
        console.error("Fetch failed: ", error);
    }
};

function updatePage(requestType, data) {
    document.querySelector("#output").innerHTML = 
    `<h2>Retrieved Data with ${requestType}</h2>
    <p>ID: ${data.id}</p>
    <p>Title: ${data.title}</p>
    <p>Completed: ${data.completed}</p>`
    ;
};

document.querySelector("#getXHR").addEventListener("click", getDataWithXHR);
document.querySelector("#getFetch").addEventListener("click", getDataWithFetch);


