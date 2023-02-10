export default function debounce (cb, delay) {
    let timer = null
    timer = setTimeout(() => {
        clearTimeout(timer)
        cb()
    }, delay);
}