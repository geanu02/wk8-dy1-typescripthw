// QUESTION 1

// Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values

type CTStudent = {
    readonly id: string,
    name: string,
    age: number,
    isTired: boolean,
    projectsCompleted: [...string[]], 
    pet?: string
}

let student1: CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}

// QUESTION 2

// Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  If there is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annotate the return type of the function.

type Fruit = {
    name: string,
    color: string,
    isEaten: boolean
}

function fruit(fruitObj: Fruit):void {
    if (fruitObj.isEaten) {
        console.log(`You ate my fruit (${fruitObj.name}) already.`)
    } else if (!fruitObj.isEaten) {
        console.log(`${fruitObj.color}`)
    } else {
        console.log("Object is null.")
    }
}

const apple: Fruit = {
    name: "Apple",
    color: "Red",
    isEaten: true
}

const banana: Fruit = {
    name: "Banana",
    color: "Yellow",
    isEaten: false
}
// QUESTION 3

// Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type

type Book = {
    readonly isbn: number,
    title: string,
    author: string,
    releaseYear: number,
    library: [...string[]]
}

type DigitalBook = {
    readonly isbn: number,
    title: string,
    author: string,
    releaseYear: number,
    url: [...string[]]
}

type Ebook = Book & DigitalBook

let TheLittlePrince: Ebook = {
    isbn: 13561653453,
    title: "The Little Prince",
    author: "Antoine De Saint-Exupery",
    releaseYear: 1943,
    library: ["Brooklyn Public Library"],
    url: ["https://amz.books/tlp"]
}


// QUESTION 4

// Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures

// - All ShopItems have an numeric id that can not be edited 
// - All ShopItems have a price
// - All ShopItems have a description
// - Some ShopItems have a color
// - All ShopItems have a Category represented with an enum 
//     - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
// - All ShopItems have a list of keywords used to help search for the ShopItem 
//     - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

// After Creating the `ShopItem` type create 3 items using this type

enum Category {
    'Shirts',
    'Shoes',
    'Pants',
    'Hats'
}

enum Tags {
    "Marvel", 
    "Endgame", 
    "Ironman",
    "Character Tees", 
    "Tony Stark"
}

type ShopItem = {
    readonly id: number,
    price: number,
    description: string,
    color?: string,
    category: [...string[]],
    tags: [...string[]]
}

const avengersTee: ShopItem = {
    id: 1325416854,
    price: 700,
    description: "Avengers Appliqué on Boxed Tee by Loewe",
    color: "Black",
    category: [Category[0]], 
    tags: [Tags[0], Tags[1], Tags[3]]
}

const ironmanCap: ShopItem = {
    id: 1325418503,
    price: 290,
    description: "Ironman Embellised on Cap by Yves Saint Laurent",
    category: [Category[3]], 
    tags: [Tags[0], Tags[2], Tags[4]]
}

const wandaVisionShoes: ShopItem = {
    id: 1325416854,
    price: 2200,
    description: "WandaVision Hightops with Studs by Christian Louboutin",
    category: [Category[1]], 
    tags: [Tags[0]]
}
