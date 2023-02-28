const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
    
};

Park.prototype.addDinosaur = function(dinosaur){
    this.collectionOfDinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur)
    this.collectionOfDinosaurs.splice(indexOfDinosaur,1)
};

Park.prototype.mostVisitors = function(){
    let popularDino = this.collectionOfDinosaurs[0];
    for (const dinosaur of this.collectionOfDinosaurs){
        if(dinosaur.guestsAttractedPerDay > popularDino.guestsAttractedPerDay){
            popularDino = dinosaur;
        }
    }
    return popularDino;

};

Park.prototype.findSpecies = function(species){
    let dino
    for(const dinosaur of this.collectionOfDinosaurs){
        if(dinosaur.species === species){
            dino = dinosaur;
        }
    }
    return dino;
};

Park.prototype.visitorsPerDay = function(){
    total = 0
    for (const dinosaur of this.collectionOfDinosaurs){
        total += dinosaur.guestsAttractedPerDay
    }
    return total;
}

Park.prototype.visitorsPerYear = function(){
    const day = this.visitorsPerDay();
    const annual = day*365;
    return annual;
}

Park.prototype.totalAnnualRevenue = function(){
    const visitors = this.visitorsPerYear();
    const revenue = visitors * this.ticketPrice;
    return revenue;
}

module.exports = Park;