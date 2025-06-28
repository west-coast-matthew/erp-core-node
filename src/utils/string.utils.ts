
/**
 * Given a string reference, convert to a 'user friendly' format, basically we are 
 * just inserting spaces and performing capitalization. This is usefull when converting values referencing
 * entities present in URLs to human friendly values.
 * 
 * Example:
 *      operationCode --> Operation Code
 */
export const convertCamelCaseToUserFriendly = (input:string|undefined):string=>{
    if (!input) {
        return "";
    }

  // Use a regex to insert a space before uppercase letters
  const spacedString = input.replace(/([A-Z])/g, ' $1');

  // Trim leading/trailing spaces and capitalize the first letter of each word
  const words = spacedString.trim().split(' ');

  const titleCasedWords = words.map(word => {
    // Capitalize the first letter and lowercase the rest
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return titleCasedWords.join(' ');
}