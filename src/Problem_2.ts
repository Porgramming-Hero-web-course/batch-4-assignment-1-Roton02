const removeDuplicates = (number:number[]) : number[]=>{
    return [...new Set(number)]
}
console.log( removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
