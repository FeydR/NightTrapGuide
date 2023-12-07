function renderEvent(event) {
    const eventItem = document.createElement('div');
    eventItem.className = "eventItem";
    eventItem.innerHTML = `    
        <h3>Time: ${event.time}</h3>
        <h3>Location: ${event.location}</h4>            
    
    `;
    return eventItem;
}


function renderCurrentEvents(stackElement, currentEvents) {
    stackElement.innerHTML = "";
    currentEvents.forEach(e => {
        stackElement.appendChild(renderEvent(e))
    });
}


function renderSyncMessage(stackElement) {
    const eventItem = document.createElement('div');
    stackElement.innerHTML = "";
    eventItem.className = "eventItem"
    eventItem.innerHTML = `
        <h3><u>Sync To Game</u></h3>
        <p>Get ready to click start</p>
        <p>after Lt. Simms wishes you</p>
        <p>Good Luck</p>
    `
    stackElement.appendChild(eventItem);
}
