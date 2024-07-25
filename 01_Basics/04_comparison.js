// Always prefer Same data type for comparison

console.log( 2 > 4);
console.log( 2 < 4);
console.log( 2 >= 4);
console.log( 2 <= 4);
console.log( 2 == 4);
console.log( 2 != 4);

console.log( "2" == 2);
console.log( 2 == "2");
console.log( 2 == "4");
console.log( 2 > "4");
console.log( 2 < "4");
console.log( "2" <= 4);


/*****  sometimes it converts to 0 and sometimes to NaN, hence output not predictable *****/
console.log( null > 0);  //false
console.log( null >= 0); //true
console.log( null == 0);  //false
console.log( null <= 0);  //true

console.log( undefined > 0);
console.log( undefined <= 0);
console.log( undefined == 0);

// ===   (dont convert)
console.log( "2" === 2 );

