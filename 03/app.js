export default function randomNumber(min, max) {
    if(typeof(min) === 'number' && typeof(max) === 'number') {
        if(min <= max) {
            return Math.random() * (max - min) + min;
        } else {
            throw new RangeError();
        }
    } else {
        throw TypeError();
    }
}