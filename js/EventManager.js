

class EventManager {
    constructor(eventData) { 
        if (eventData === undefined) {
            throw `Cannot find Event Data`;
        }
        
        this.eventData = eventData;        
        this.currentEvents = [
            this.eventData[0],
            this.eventData[1],
            this.eventData[2]
        ]
    }

    getHead() {
        return this.currentEvents[0];
    }

    getMiddle() {
        return this.currentEvents[1]
    }

    getTail() {
        return this.currentEvents[2];
    }

    getNewTail() {
        return (this.eventData[this.getTail().id + 1]);
    }    

    check(time, cb) {
        return this.headIsStale(time) ? this.update(cb) : null
    }

    headIsStale(time) {
        return (this.getHead().time === time ? true : false);
    }

    update(cb) {        
        const preUpdateData = this.preshiftState()
        this.currentEvents = [
            preUpdateData.newHead, preUpdateData.newMiddle, preUpdateData.newTail
        ];   
        
        if (cb) {
            cb(this.currentEvents);
        }
        
        return this.currentEvents;            
    }

    preshiftState() {
        return {
            currentHead: this.getHead(),
            newHead: this.getMiddle(),
            newMiddle: this.getTail(),
            newTail: this.getNewTail()
        }
    }
}


// module.exports = EventManager;
