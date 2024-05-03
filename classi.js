"use strict";
//% Ereditarietà tra classi
//, Visibilità dei membri
/* class ClasseBase {
    public metodoBase() {
        console.log("Metodo della classe base");
    }
}
class ClasseDerivata extends ClasseBase {
    public metodoDerivato() {
        console.log("Metodo della classe derivata");
    }
}
const oggetto = new ClasseDerivata();
oggetto.metodoBase(); // Metodo della classe base
oggetto.metodoDerivato(); // Metodo della classe derivata */
/* class Classe {
    public pubblico: string = "Accessibile ovunque";
    private privato: string = "Accessibile solo in Classe";
    protected protetto: string = "Accessibile in Classe e sottoclassi";
}
class SottoClasse extends Classe {
    public testAccesso() {
        console.log(this.pubblico); // OK
        console.log(this.privato); // Errore: Proprietà 'privato' è privata
        console.log(this.protetto); // OK
    }
}
const oggetto = new Classe();
console.log(oggetto.pubblico); // OK
console.log(oggetto.privato);  // Errore: Proprietà 'privato' è privata
console.log(oggetto.protetto); // Errore: Proprietà 'protetto' è protetta */
//, Inizializzare le proprietà
/* class Classe {
    private p1 : number = 10;
    protected p2 : string;
    #p5 : string = 'privata';
    #p8: boolean;

    constructor(
        p2: string,
        public p3: string = 'Ciao',
        public p4: string,
        //#p5: string
    ) {
        this.p2 = 'Hello';
        this.p4 = p4;
        this.#p8 = true;
    }
} */
//, Override dei metodi
/* class Person {
    public name(): string {
        return "Persona";
    }
}
const person = new Person();
console.log(person.name()); // Persona

class Student extends Person {
    public name(): string {
        return "Studente";
    }
}
const student = new Student();
console.log(student.name()); // Studente */
//, Invocazione dei Costruttori delle superclassi
/* class Father {
    protected className: string = "Father";
    private oldValue: number;
    constructor(oldValue: number) {
        this.oldValue = oldValue;
        console.log(`Costruttore della classe ${this.className} invocato. Valore: ${this.oldValue}`);
    }
}
class Son extends Father {
    protected className: string = "Son";
    private newValue: number;
    constructor(oldValue: number, newValue: number) {
        super(oldValue);
        this.newValue = newValue;
        console.log(`Costruttore della classe ${this.className} invocato. Valore: ${this.newValue}`);
    }
}
const son = new Son(50, 10); */
// Costruttore della classe Father invocato. Valore: 50
// Costruttore della classe Son invocato. Valore: 10
//, Classi e metodi astratti
/* abstract class Person {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public abstract description(): void;
} */
// const person = new Person("Erik", 25); // Impossibile creare un'istanza di una classe astratta
/* class Student extends Person {
    private grade: number;
    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    public description(): void {
        console.log(`This is ${this.name}, a ${this.age} year old student. Grade: ${this.grade}`);
    }
}

const john = new Student("John", 15, 8);
john.description(); // This is John, a 15 year old student. Grade: 8

class Teacher extends Person {
    constructor(name: string, age: number, private subject: string = "Math") {
        super(name, age);
    }

    public description(): void {
        console.log(`This is ${this.name}, a ${this.age} year old teacher. Subject: ${this.subject}`);
    }
}
const mike = new Teacher("Mike", 45);
mike.description(); // This is Mike, a 45 year old teacher. Subject: Math */
//, Metodi statici
/* class Circle {
    public static pi: number = 3.14159;
    public static calculateArea(radius: number): number {
        return Circle.pi * radius * radius;
    }
}
console.log(Circle.pi); // 3.14159
console.log(Circle.calculateArea(5)); // 78.53975 */
//# this
/* class Circle {
    public static pi: number = 3.14159;
    public calculateCircumference(radius: number): number {
        return 2 * this.pi * radius;
    }
    static classLog(): void {
        console.log(this);
    }
}
console.log(Circle.classLog()); // Class Circle {} */
//# Ereditarietà tra classi con metodi statici
/* class Base {
    static show(): void {
        console.log('Metodo statico di Base');
    }
}
class Derived extends Base {
    static show(): void {
        console.log('Metodo statico di Derived');
    }
}
Base.show(); // 'Metodo statico di Base'
Derived.show(); // 'Metodo statico di Derived' */
//, Classi e metodi final
/* class Final {
    private constructor() {
        throw new Error("Impossibile creare un'istanza di questa classe");
    }
    public static create() {
        return new Final();
    }
} */
/* class Derived extends Final {
    constructor() {
        super();
    }
} */
// const final = new Final();
/* const final = Final.create();
console.log(final); */
//, Costruttori privati
//# Singleton
/* class Singleton {
    private static instance: Singleton;
    private constructor() {
        console.log("Istanza creata");
    }
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2);  // true */
//# Factory Pattern
/* class Product {
    private constructor(public name: string, public price: number) { }
    public static createStandardProduct() {
        return new Product("Standard Product", 20);
    }
    public static createPremiumProduct() {
        return new Product("Premium Product", 50);
    }
}
const standardProduct = Product.createStandardProduct();
const premiumProduct = Product.createPremiumProduct(); */
//# Costruttore privato della sottoclasse
/* class Base {}
class Derived extends Base {
    private constructor() {
        super();
    }
    static create() {
        return new Derived();
    }
}
const derived = Derived.create(); */
//, Classi anonime
//, Mixin
//, Ereditarietà multipla
/* interface A {
    a(): void;
}
interface B {
    b(): void;
}
class C implements A, B {
    a(): void {
        console.log("Metodo a");
    }
    b(): void {
        console.log("Metodo b");
    }
}
const c = new C();
c.a(); // Metodo a
c.b(); // Metodo b */ 
