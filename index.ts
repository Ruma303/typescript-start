    //% Data Types

    //, Type assignment

    /* let a: number = 1;
    let b: string = 'Hello';
    let c: boolean[] = [true, false, true]; */


    //, Type inference
    /* let a = 1;
    //a = 'Hello'; // Error: Type 'string' is not assignable to type 'number'.
    // a = 2.3456;
    let b = 'Hello';
    let c = [true, false, true]; */


    //, Union types
    /* let d: number | string = 1;
    d = 'Hello'; */


    //, Type literal
    /* let vero: true = true;
    let nome: "Ruma" = "Ruma";
    const falso = false; */


    //, Type alias
    /* type Nome = string;
    type Eta = number;
    type CodiceFiscale = string | number;

    let nomeCompleto: Nome = "Mario Rossi";
    let ata: Eta = 42;
    let codiceFiscale: CodiceFiscale = "RSSMRA42A01XXXXXX"; */


    //, Tipi come insiemi
    /* let obj1 = { name: "Ruma", age: 29 };
    let obj2 = { name: "Mario", age: 35, job: "Developer" };

    obj1 = obj2; // obj2 è visto come un super insieme di obj1
    obj2 = obj1; // obj1 non ha lo stesso insieme di tipi di obj2 */



    //, Intersection types
    /* type Person = { name: string; age: number; };
    type Employee = { job: string; salary: number; };

    type Developer = Person & Employee;
    type Baker = Person | Employee;

    let ruma: Developer = { name: "Ruma", age: 29, job: "Developer", salary: 1500 };
    let john: Baker = { job: "Baker", salary: 1200 }; */

    /* type numOrStr = number | string;
    type numAndStr = string & boolean;

    let a: numOrStr = 1;
    let b: numOrStr = "Hello";

    let c: numAndStr = "Hello"; */



    //% Novità sui tipi

    //, any
    /* let notSure: any = 4;
    notSure = "Forse è meglio una stringa?";
    notSure = false;
    notSure.metodo(); */


    //, unknown
    /* let notSure: unknown = 4;
    // notSure + 5;

    if (typeof notSure === "number") {
        console.log(notSure + 5);
    } else if (typeof notSure === "string") {
        console.log(notSure.toUpperCase());
    } */


    //, Number
    // let myNumber: number = 123_456_978;


    //, Object
    /* let obj = {
        name: "Ruma",
        age: 29
    }; */

    /* const obj = {
        prop: "Valore 1",
    };
    obj.prop = "Valore 2"; */

    /*   */

    //obj.name?.toUpperCase();

    /* let obj: {
        [key: string]: boolean
    } = {
        prop1: true,
        prop2: false
    }; */



    //, Array
    //let arr1 = [1, 2, 3];
    //let arr2: number[] = [4, 5, 6];
    //let arr3: string[] = ['a', 'b', 'c'];
    //let arr4 = [1, 'a', true];
    //let arr5: (string | number)[] = [1, 'a'];
    //let arr6: (any | void )[] = [1, 'a', true, {}];

    /* const arr7 = [];
    arr7.push(1);
    arr7.push('a');
    console.log(arr7); */

    //const arr8: Array<number> = [1, 2, 3];

    //# readonly
    //let a: readonly any[] = [1, 'Hello'];
    //a.push(3)

    //let b: ReadonlyArray<any> = [1, 'Hello'];
    //b.sort();



    //, Tuple
    //let t1: [number, string] = [1, 'Hello'];

    //let t2: [number, string, boolean] = [1, 'Hello', {}];
    //let t3: [number, string, boolean, object, number] = [1];

    //let t4: [ number & any, boolean | undefined, string? ] = [10, true];

    //let t5: [number, string, ...boolean[]] = [1, 'Hello', true, false, true];


    //# readonly
    //let a: readonly [number, string] = [1, 'Hello'];
    //a.pop(3)

    //let b: Readonly<[number, string]> = [1, 'Hello'];
    //b.push(true);


    //, null e undefined
    /* let n: null = null;
    let u: undefined = undefined;

    let num: number | null | undefined = 10;
    num = n;
    num = u; */
    //num * 2;

    /* if (num !== null && num !== undefined) {
        num * 2;
    } else {
        console.log('num è null o undefined');
    } */

    /* u = n;
    n = u; */


    //, void e never

    /* function f1 () {
        let a = 10;
    }

    function f2 (): never {
        throw new Error('Errore');
    }

    function f3 (): never {
        while (true) {
            console.log('Ciao');
        }
    }

    let f4 = f3(); */


    //, Refinement



    //, Type Narrowing

    type Item = { prop: string; };

    function itemOrItems(name: Item | Item[]) { // oggetto o array
        if (Array.isArray(name)) {
            return name.length;
        } else {
            return name.prop;
        }
    }

    let obj = { prop: "Prop1" };
    let arr = [{ prop: "Prop1" }, { prop: "Prop2" }];

    console.log(itemOrItems(obj)); // Prop1
    console.log(itemOrItems(arr)); // 2


    //, Object Narrowing

    type Book = {
        title: string;
        pages: number;
        author: string;
        ISBN: string;
    };

    let book1: Book = {
        title: "Il Signore degli Anelli",
        pages: 1000,
        author: "J.R.R. Tolkien",
        ISBN: "978-88-04-12345-6"
    };

    console.log(book1);

    type BookName = {
        title: string;
    };

    let book2: BookName = book1;
    console.log(book2);
    console.log(book2.title);
    //console.log(book2.pages);


    //, Type Guard

    //# typeof
    let price = 10;

    function getType(price: number | string) {
        if (typeof price === 'number') {
            return parseFloat(price.toFixed(2));
        } else {
            return price;
        }
    }

    //# instanceof

    let newDate = new Date();

    function isDate(date: Date | string) {
        if (date instanceof Date) {
            return date.toISOString();
        } else {
            return date;
        }
    }

    //# user-defined type guard


    let someValue: string = "Hello World";

    function isString(value: string) {
        if (someValue === "string") {
            return true;
        }
    }

    console.log(isString(someValue));



    //, Type Widening

    type Course = {
        name: string;
        duration: number;
    };

    let course = {
        name: "TypeScript",
        duration: 10
    } as Course;

    function courseName(course: Course) {
        return course.name;
    }

    console.log(courseName(course)); // TypeScript
