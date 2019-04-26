function func1(arr, name) {
    let newArr = arr.filter ( obj => obj.name === name);
    return newArr.length ? newArr : "Not found";
}

function func2(arr, gen) {
    return arr.sort( a => a.gender !== gen ? 1 : -1);
}
