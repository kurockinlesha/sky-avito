import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'
const _ = require('lodash')

export function formatToDate(dateString) {
    const date = new Date(dateString)

    const result = formatDistanceToNow(new Date(date), { locale: ru })
    return _.capitalize(result)
}

export function formatDate(dateString) {
    const date = new Date(dateString)
    const monthNames = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ]
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    const resultString = 'Продает товары с ' + month + ' ' + year
    return resultString
}