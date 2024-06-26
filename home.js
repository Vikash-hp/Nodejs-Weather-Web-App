const curDate= document.getElementById("date")
let weathercon= document.getElementById("weathercon")
const tempStatus= "{%tempstatus%}"
if (tempStatus == "Sunny") {
    weathercon.innerHTML =
      "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
  } else if (tempStatus == "Clouds") {
    weathercon.innerHTML =
      "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
  } else if (tempStatus == "Rainy") {
    weathercon.innerHTML =
      "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
  } else {
    weathercon.innerHTML =
      "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
  }

const getCurrentDay=()=>{
    var weekday= new Array(7);
    weekday[0]="Sun";
    weekday[1]="Mon";
    weekday[2]="Tue";
    weekday[3]="Wed";
    weekday[4]="Thu";
    weekday[5]="Fri";
    weekday[6]="Sat";

    let currentTime= new Date();
    let day=weekday[currentTime.getDay()]
    return day;
}



const getCurrentTime=()=>{

    var months=[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
    var now= new Date();
    var month= months[now.getMonth()];
    var date= now.getDate();

    let hours= now.getHours();
    let min= now.getMinutes();

    let period="AM";
    if(hours>11)
    {
        period="PM"
        hours-=12;
    }

    if(min<10)
    min= "0"+ min;

    return `${month} ${date} | ${hours}:${min} ${period}`;

}

curDate.innerHTML= getCurrentDay()+ " | " +getCurrentTime();