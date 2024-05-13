//% Data Types
function itemOrItems(name) {
    if (Array.isArray(name)) {
        return name.length;
    }
    else {
        return name.prop;
    }
}
var obj = { prop: "Prop1" };
var arr = [{ prop: "Prop1" }, { prop: "Prop2" }];
console.log(itemOrItems(obj)); // Prop1
console.log(itemOrItems(arr)); // 2
var book1 = {
    title: "Il Signore degli Anelli",
    pages: 1000,
    author: "J.R.R. Tolkien",
    ISBN: "978-88-04-12345-6"
};
console.log(book1);
var book2 = book1;
console.log(book2);
console.log(book2.title);
//console.log(book2.pages);
//, Type Guard
//# typeof
var price = 10;
function getType(price) {
    if (typeof price === 'number') {
        return parseFloat(price.toFixed(2));
    }
    else {
        return price;
    }
}
//# instanceof
var newDate = new Date();
function isDate(date) {
    if (date instanceof Date) {
        return date.toISOString();
    }
    else {
        return date;
    }
}
//# user-defined type guard
var someValue = "Hello World";
function isString(value) {
    if (someValue === "string") {
        return true;
    }
}
console.log(isString(someValue));
var course = {
    name: "TypeScript",
    duration: 10
};
function courseName(course) {
    return course.name;
}
console.log(courseName(course)); // TypeScript
