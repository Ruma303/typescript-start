
    //, Type annotation
    function add(x: number, y: number): number {
        return x + y;
    }

    function log(message: string): void {
        console.log(message);
    }


    //, Parametri Default
    function profile(name: string, age: number = 20): string {
        return `Name: ${name}, Age: ${age}`;
    }
    console.log(profile('Mario'));
    // Name: Mario, Age: 20


    //, Parametri opzionali
    function sum(x: number, y?: number): number {
        return y ? x + y : x;
    }
    console.log(sum(10)); // 10


    //, Rest Parameters
    function sumAll(...numbers: number[]): number {
        return numbers.reduce((acc, val) => acc + val, 0);
    }
    sumAll(1, 2, 3, 4, 5); // 15


    //, Overloading
    //* Definizione delle firme di overload
    function getInfo(id: number): string; // Overload 1
    function getInfo(email: string): string; // Overload 2
    function getInfo(name: string, address: string): string; // Overload 3

    //* Implementazione della funzione che deve essere compatibile con tutte le firme
    function getInfo(input: number | string, address?: string): string {
        if (typeof input === "number") {
            return `Fetching user data by ID: ${input}`;
        } else if (typeof input === "string" && address) {
            return `Fetching user data by name: ${input}, address: ${address}`;
        } else {
            return `Fetching user data by email: ${input}`;
        }
    }

    //* Utilizzo degli overload
    const infoById = getInfo(101); // Chiama la prima firma
    const infoByEmail = getInfo("user@example.com"); // Chiama la seconda firma
    const infoByNameAndAddress = getInfo("John Doe", "123 Main St"); // Chiama la terza firma


    //, Funzioni come tipi
    type Operazione = (x: number, y: number) => number;

    type Log = {(x: string): string};

    let somma: Operazione = function(x, y) {
        return x + y;
    };
    let differenza: Operazione = function(x, y) {
        return x - y;
    };

    console.log(somma(5, 3));      // 8
    console.log(differenza(5, 3)); // 2


    //% Generics
    function identity<T>(arg: T): T {
        return arg;
    }