/* 


1. Create a custom function called "getArea" that calculates 
the area of any right triangle. Your function will take 2 arguments:
    * side1
    * side2

    Formula: side1 * side2 / 2

2. Create a custom function called "getHypotenuse" that calculates 
the hypotenuse of any right triangle. Your function will take 2 arguments:
    * side1
    * side2
    * 
    Formula: (side1 ** 2 + side2 ** 2) ** 0.5

3. Create a custom function called "getPerimeter" that calculates 
the perimeter of any right triangle. Your function will take 2 arguments:
    * side1
    * side2 
    * 
    Formula: side1 + side2 + hypotenuse

    Hint: Can you figure out a way to use getHypotenuse 
    function within the function body?


4. When you're done, test your functions using the console by invoking 
   each of them with different values for side1 and side2.

5. Bonus: See if you can create a way for your user to tell you the
          length of the two sides. Then, display the results back to the
          user.
*/


const getArea = (side1, side2) => {
    return side1 * side2 / 2;
}

const getHypotenuse = (side1, side2) => {
    return (side1 ** 2 + side2 ** 2) ** 0.5;
}

const getPerimeter = (side1, side2) => {
    return side1 + side2 + getHypotenuse(side1, side2);
}


const calculate = () => {
    const side1 = Number(document.querySelector('#side1').value);
    const side2 = Number(document.querySelector('#side2').value);

    const output = `
        <p><span>Area:</span> ${getArea(side1, side2).toFixed(2)}</p>
        <p><span>Hypotenuse:</span> ${getHypotenuse(side1, side2).toFixed(2)}</p>
        <p><span>Perimeter:</span> ${getPerimeter(side1, side2).toFixed(2)}</p>
    `;
    document.querySelector('#results').innerHTML = output;
}