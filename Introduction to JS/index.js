console.log("Hello World"); // Prints to console
txt = "This is App Dev II"
console.log(txt);

// var -> function based scope [inside a fn body]
// let, const -> block based scope [anything written bw two {} curly braces]
{
    // use const a = 20 and let a = 20: throws an error when printed outside the scope{} undefined
    var a = 20; // inside a block not NOT inside a fn hence it also has global scope
    console.log(a);
}
console.log(a)