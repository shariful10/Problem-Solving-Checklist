function JimOrDela (marksOfJim, marksOfDela){
    if (marksOfJim > marksOfDela) {
        return "Jim";
    } else {
        return "Dela";
    }
}

const marks = JimOrDela(84, 75);
console.log(marks);