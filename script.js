// 1. Complete the following in your .js file
// 2. Give it a property called stations and make the value an array of station objects
// 3. Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
// 4. Song object should have two properties: title and artist
// 5. Create a method on your radio object that changes the station randomly. 
// 6. When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)


const Radio = {
    station: [
        {
            name: 'Hot 97',
            song: [
                {
                    artist: 'Adele',
                    title: 'Hello'
                },
                {
                    artist: 'The Roots',
                    title: 'The Seed 2.0'
                }
            ]
        },
        {
            name: 'Z-100',
            song: [
                {
                    artist: 'Kanye West',
                    title: 'The Life of Pablo'
                },
                {
                    artist: 'The Beatles',
                    title: 'Hey Jude'
                }
            ]
        },
        {
            name: 'FlyLo Radio',
            song: [
                {
                    artist: 'ThunderCat',
                    title: 'Dragonball Durag'
                },
                {
                    artist: 'Tyler the Creator',
                    title: 'WUSYANAME'
                }
            ]
        }
    ],
    shuffle() {
       let i =  Math.floor(Math.random() * 3)
       let s =  Math.floor(Math.random() * 2)
    //    return Radio.station[i].song[s]
       console.log(`Now playing ${Radio.station[i].song[s].title} by ${Radio.station[i].song[s].artist} on ${Radio.station[i].name}.`)
    }

 }

 console.log(Radio.shuffle())



//  =======================================================

// Create an Animal class that will have name, color, age, and legs properties.
// Create different methods for Animal class.

// Encapsulation - allows us to keep things inside where they're supposed to be

// This is encapsulation
// Superclass = parent
class Animal {
    // creating our properties for our class
    constructor(name, color, age, legs) {
      this.name = name
      this.color = color
      this.age = age
      this.legs = legs
    }
  
    // method
    genericSound() {
      console.log('This is a generic animal sound! WOOO')
  
      // this will point at the current object we are working with
      // console.log('we are inside genericSound', this)
    }
  }
  
  // Instiated Animal class using new keyword
  // const dog = new Animal('Spot', 'brown', 2, 4)
  // console.log(typeof dog)
  
  // const dog = 'Dillon'
  
  // dog.genericSound()
  
  // const cat = new Animal('Meow', 'blue', 2, 4)
  // cat.genericSound()
  
  // genericSound()
  
  
  // this doesn't belong anywhere
  // console.log(this)
  
  // INHERITANCE
  // The way we inherit from our parent is by extending
  // We use the extends keyword to inherit from our parent Class
  
  // Inheritance
  // Subclass = child
  class Dog extends Animal {
    constructor(name, color, age, legs, owner) {
      // super refers to the parent of the child class
      // in this example we are extending from Animal
      // which makes Animal the parent
  
      // If we do the constructor/super way, we need to pass the values we want from the parent inside our super()
      super(name, color, age, legs)
      this.owner = owner
    }
  
    playFetch() {
      console.log('Playing fetch with owner')
    }
  
    // Re-write our method 
    // method overriding
    // Polymorphism - we can change the statements inside our method that is named exactly the same from the parent
    genericSound() {
      console.log('Woof! Woof!')
    }
  }
  
  const spot = new Dog('Spot', 'Purple', 99, 4, 'Liv')
  // console.log(spot)
  
  spot.genericSound()
  spot.playFetch()
  
  // Yes, we can keep passin down/genes/method or properties down using extends
  // class Puppy extends Dog {
  // }
  
  // const puppy = new Puppy()
  // console.log(puppy)