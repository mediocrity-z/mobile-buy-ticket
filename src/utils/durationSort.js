// 仅针对出现的x时x分格式比较
export default function durationSort(time1, time2) {
    const interval1 = time1.indexOf('时')
    const h1 = parseInt(time1.slice(0, interval1))
    const m1 = parseInt(time1.slice(interval1 + 1, time1.length-1))
    const duration1 = h1 * 60 + m1
    const interval2 = time2.indexOf('时')
    const h2 = parseInt(time2.slice(0, interval2))
    const m2 = parseInt(time2.slice(interval2 + 1, time2.length-1))
    const duration2 = h2 * 60 + m2
    return duration1 - duration2
}