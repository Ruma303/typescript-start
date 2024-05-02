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


    //% Interfacce

    //, Metodi statici



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




    //, Classi e metodi final

    /* class Final {
        private constructor() { }

        private finalMethod() {
            console.log("Metodo della classe base");
        }

        static create() {
            return new Final();
        }
    }

    class Derived extends Final {
        public finalMethod() {
            console.log("Metodo della classe derivata");
        }
    }
    const derived = Derived.create();
    derived.finalMethod(); // Metodo della classe base */




    //, Mixin