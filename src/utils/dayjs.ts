import dayjs from 'dayjs'
import 'dayjs/locale/en-au'
import 'dayjs/locale/zh-cn'
import duration from 'dayjs/plugin/duration'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import updateLocale from 'dayjs/plugin/updateLocale'
import localeData from 'dayjs/plugin/localeData'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import relativeTime from 'dayjs/plugin/relativeTime'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import isoWeek from 'dayjs/plugin/isoWeek'
import weekYear from 'dayjs/plugin/weekYear'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekday from 'dayjs/plugin/weekday'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import isToday from 'dayjs/plugin/isToday'
dayjs.extend(duration)
dayjs.extend(advancedFormat)
dayjs.extend(updateLocale)
dayjs.extend(customParseFormat)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(dayOfYear)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(isoWeek)
dayjs.extend(localeData)
dayjs.extend(quarterOfYear)
dayjs.extend(relativeTime)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)
dayjs.extend(weekday)
dayjs.extend(isToday)

export default dayjs;