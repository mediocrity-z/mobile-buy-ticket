export default function throttle (cb, delay) {
    let timer = null
    if (timer) return
    timer = setTimeout(() => {
        cb()
        timer = null
    }, delay);
}