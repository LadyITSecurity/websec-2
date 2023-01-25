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
        imageElem.classList.add('img');
        imageElem.setAttribute("src", event.data.general.image.url);
        imageElem.style.maxHeight = "100%";
        imageElem.style.maxWidth = "100%";

        let shortDescription = document.createElement('p');
        shortDescription.classList.add('event-desc');
        shortDescription.innerHTML = event.data.general.shortDescription;


        let price = document.createElement('p');
        price.classList.add('event-price');
        if (event.data.general.price != null)
            price.innerHTML = event.data.general.price + ' rub.';
        else
            price.innerHTML = 'no info';

        

        eventElem.appendChild(title);
        eventElem.appendChild(imageElem);
        eventElem.appendChild(shortDescription);
        eventElem.appendChild(price);

        allEvents.appendChild(eventElem);

        console.log(title.innerHTML);
        console.log(imageElem.innerHTML);
        console.log(shortDescription.innerHTML);
        console.log(price.innerHTML);
    }
}