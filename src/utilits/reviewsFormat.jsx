export function reviewsFormat(num) {
    let str = ''

    if (num % 10 === 1 && num % 100 !== 11) {
        str = 'отзыв'
    } else if (
        [2, 3, 4].includes(num % 10) &&
        ![12, 13, 14].includes(num % 100)
    ) {
        str = 'отзыва'
    } else {
        str = 'отзывов'
    }

    return `${num} ${str}`
}