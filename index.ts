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



    //, void



    //, never


    //, null e undefined



