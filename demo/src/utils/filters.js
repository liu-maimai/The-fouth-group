//时间过滤器
const 
    timeFormat=(val)=>{
        var time = Number(val) * 1000;
        var newDate = new Date(time);
        var date = newDate.toLocaleDateString();
        return date
    },
    salesNum=(val)=>{
        // console.log(val);
        if(val>=10000){
            return '1万+'
        }else{
            return val
        }
    },
    price=(val)=>{
        if(val==0){
            return '免费'
        }else{
            return val
        }
    }

export default {timeFormat,salesNum,price}