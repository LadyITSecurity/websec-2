fetch("/events")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        generateHTML(data.data);
    })

function generateHTML(data) {
    let allEvents = document.querySelector(".events-container");

    for (let event of data) {
        let eventElem = document.createElement('div');
        eventElem.classList.add('event');

        let title = document.createElement('p');
        title.classList.add('event-title');
        title.innerHTML = event.data.general.name;

        let imageElem = document.createElement('img');
        imageElem.setAttribute("src", event.data.general.image.url);
        imageElem.style.maxHeight = "100%";
        imageElem.style.maxWidth = "100%";

        let shortDescription = document.createElement('p');
        shortDescription.classList.add('event-desc');
        shortDescription.innerHTML = event.data.general.shortDescription;


        let fullAddress = document.createElement('p');
        fullAddress.classList.add('event-address');
        fullAddress.innerHTML = event.data.general.fullAddress;
        

        eventElem.appendChild(title);
        eventElem.appendChild(imageElem);
        eventElem.appendChild(shortDescription);

        allEvents.appendChild(eventElem);

        console.log(title);
        console.log(imageElem);
        console.log(shortDescription);
    }
}