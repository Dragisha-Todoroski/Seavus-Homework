let year = parseInt(prompt('Enter your birthdate: '));
// if ((year - 4) % 12 == 0) {
//     console.log('Your Chinese Zodiac Sign is Rat');
// }
// else if ((year - 4) % 12 == 1) {
//     console.log('Your Chinese Zodiac Sign is Ox');
// }
// else if ((year - 4) % 12 == 2) {
//     console.log('Your Chinese Zodiac Sign is Tiger');
// }
// else if ((year - 4) % 12 == 3) {
//     console.log('Your Chinese Zodiac Sign is Rabbit');
// }
// else if ((year - 4) % 12 == 4) {
//     console.log('Your Chinese Zodiac Sign is Dragon');
// }
// else if ((year - 4) % 12 == 5) {
//     console.log('Your Chinese Zodiac Sign is Snake');
// }
// else if ((year - 4) % 12 == 6) {
//     console.log('Your Chinese Zodiac Sign is Horse');
// }
// else if ((year - 4) % 12 == 7) {
//     console.log('Your Chinese Zodiac Sign is Goat');
// }
// else if ((year - 4) % 12 == 8) {
//     console.log('Your Chinese Zodiac Sign is Monkey');
// }
// else if ((year - 4) % 12 == 9) {
//     console.log('Your Chinese Zodiac Sign is Rooster');
// }
// else if ((year - 4) % 12 == 10) {
//     console.log('Your Chinese Zodiac Sign is Dog');
// }
// else if ((year - 4) % 12 == 11) {
//     console.log('Your Chinese Zodiac Sign is Pig');
// }
// else {
//     console.log('That isn\'t a year');
// }

switch((year - 4) % 12) {
    case 0:
        console.log('Your Chinese Zodiac Sign is Rat');
        break;
    case 1:
        console.log('Your Chinese Zodiac Sign is Ox');
        break;
    case 2:
        console.log('Your Chinese Zodiac Sign is Tiger');
        break;
    case 3:
        console.log('Your Chinese Zodiac Sign is Rabbit');
        break;
    case 4:
        console.log('Your Chinese Zodiac Sign is Dragon');
        break;
    case 5:
        console.log('Your Chinese Zodiac Sign is Snake');
        break;
    case 6:
        console.log('Your Chinese Zodiac Sign is Horse');
        break;
    case 7:
        console.log('Your Chinese Zodiac Sign is Goat');
        break;
    case 8:
        console.log('Your Chinese Zodiac Sign is Monkey');
        break;
    case 9:
        console.log('Your Chinese Zodiac Sign is Rooster');
        break;
    case 10:
        console.log('Your Chinese Zodiac Sign is Dog');
        break;
    case 11:
        console.log('Your Chinese Zodiac Sign is Pig');
        break;
    default:
        console.log('That isn\'t a year.');
        break;
}