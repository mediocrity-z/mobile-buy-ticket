// 筛选出二维数组里符合要求的选项
export default function filterSearch (data, key) {
    const arr = data.map(d => d.citys).flat(Infinity).map(d => d ? d.name : '')
    let res = []
    for(let i=0;i<arr.length;i++){
        if(arr[i].indexOf(key) !== -1){
            res.push({display: arr[i]})
        }
    }
    return res
}