const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 60);
    dinosaur3 = new Dinosaur('stegosaurus', 'herbivore', 40);
    park = new Park('Dino Park',20)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual,'Dino Park');
  });


  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });


  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.collectionOfDinosaurs[0],dinosaur1);

  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.collectionOfDinosaurs[0],dinosaur1);
    park.removeDinosaur(dinosaur1);
    assert.deepStrictEqual(park.collectionOfDinosaurs,[])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);
      const actual = park.mostVisitors();
      assert.strictEqual(actual, dinosaur2);
  });


  it('should be able to find all dinosaurs of a particular species', function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);
      const actual = park.findSpecies('t-rex');
      assert.strictEqual(actual, dinosaur1);

  });



  it('should be able to calculate the total number of visitors per day', function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);
      const actual = park.visitorsPerDay();
      assert.strictEqual(actual,150);
  });


  it('should be able to calculate the total number of visitors per year', function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);
      const actual = park.visitorsPerYear();
      assert.strictEqual(actual,54750);

  });

  it('should be able to calculate total revenue for one year', function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);
      const actual = park.totalAnnualRevenue();
      assert.strictEqual(actual, 1095000)
  });

});
