let letter = prompt("Enter a letter: ");

switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
        break;
}