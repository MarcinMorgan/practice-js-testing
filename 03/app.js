export default function randomNumber(min, max) {
    if(typeof(min) === 'number' && typeof(max) === 'number' && min <= max) {
        return Math.random() * (max - min) + min;
    };
}