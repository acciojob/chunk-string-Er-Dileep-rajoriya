function stringChop(str, size) {
    // Check if the input string is null or empty
    if (!str) {
        return []; // Return an empty array if the string is null or empty
    }

    const result = []; // Array to hold the chunks
    for (let i = 0; i < str.length; i += size) {
        // Use slice to get chunks of the specified size
        result.push(str.slice(i, i + size));
    }
    return result; // Return the array of chunks
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10); // Ensure size is an integer
alert(stringChop(str, size));
