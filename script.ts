let stringType:string = "Hello World"
let undefinedVar:undefined
let numArray: number[]
let mixedArray: [string, number, number, string]

let matrix: number
matrix = 45

mixedArray = ['12', matrix, matrix, '21']

console.log(stringType)

let stringBooleanArray: [number, ...boolean[]] = [5,true,false]

function lowerCaseName(name: string) {
    name = name.toLowerCase()
    return name
}

lowerCaseName('Gian')

function nameLength(name: string) {
    return name + 2
}

nameLength('Gian').toString

function nameLength2(name: string): string {
    name = name.toLowerCase()
    return name + '2'
}

function _sum(num1: number, num2: number): string {
    return `${num1 + num2}`
}

const upperName = (name:string):string => {
    return name.toUpperCase()
}

upperName("Gian").length

function greeting(name:string):void{
    console.log("Hello", name)
}

greeting("Giann")

const faveJoke = (): void => console.log("Hello world")

faveJoke()

// array 2 elem: true, undefined

let iceTuple : [boolean, undefined] = [true, undefined]


class Person {
    talk() {
        console.log("Talking here")
    }
}

function unknownParam(person: unknown) {
    if (person instanceof Person) {
        person.talk
    }
}

// Create a function takes unknown data type param implement a type guard
// if param == number, square the number
// if string, return uppercased
// if boolean, return boolean

function unknownParameter(data: unknown) {
    if (typeof data == "number") {
        console.log(data**2)
    } else if (typeof data == "string") {
        console.log(data.toUpperCase())
    } else {
        console.log(data)
    }
}

unknownParameter(5)

// Create an object w/ 3 k-v pairs:
// id->number, num->string, wasFrozen->boolean

let swChars : { 
    id: number,
    name: string,
    wasFrozen: boolean
}

swChars = {
    id: 1,
    name: "Han Solo",
    wasFrozen: true
}

const swChar2 : {
    id: number,
    name: string,
    wasFrozen: boolean
} = {
    id: 2,
    name: "Luke Skywalker",
    wasFrozen: false
}

console.log(swChars)
console.log(swChar2)

const students5 : {
    readonly id: number,
    name: string
} = {
    id: 5,
    name: "Gian"
}

type StudentInfo = {
    readonly id: number,
    name: string,
    email? : string
}

let student7 : StudentInfo
let student8 : StudentInfo

student7 = {
    id: 12,
    name: "Andy"
}

student8 = {
    id: 13,
    email: "khoa@gmail.com",
    name: "Khoa"
}

console.log(student7.email)

student7.email = "andy@gmail.com"

type StudentMethod = {
    readonly id: number,
    name: string,
    email?: string,
    sayHello: (school:string) => string
}

const student9: StudentMethod = {
    id: 12,
    name: "David",
    sayHello: (school:string) => {
        return `We are going to ${school}`
    }
}

console.log(student9.sayHello("Coding Temple"))

type IceShoeType = {
    readonly id: number,
    name: string,
    size: number,
    description: string,
    width?: boolean
}

const iceShoe: IceShoeType = {
    id: 1,
    size: 10,
    name: "APL Phantom",
    description: "Athleisure"
} 

type LooseType = {
    name: string,
    [key: string]: any
}

const randomOb : LooseType = {
    name: "Todd",
    age: 24,
    email: "todd@gmail.com",
    favoriteTeams: ['bears', 'bulls']
}