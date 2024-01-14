export function pokeIdFormatter(value: number): string{
    const valueString = value.toString();
    // Get the number of 0 to add on the left
    const zeroToAdd = Math.max(0,4 - valueString.length);
    // Add the 0 
    const formattedValue = "N°" + "0".repeat(zeroToAdd)+ valueString;
    return formattedValue;
}