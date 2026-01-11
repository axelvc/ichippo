import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear.js'
import isoWeek from 'dayjs/plugin/isoWeek.js'
import timezone from 'dayjs/plugin/timezone.js'
import utc from 'dayjs/plugin/utc.js'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isoWeek)
dayjs.extend(isLeapYear)

export default dayjs
