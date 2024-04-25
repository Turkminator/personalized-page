
let birthDayList = [];

let timeLeft;

function renderList(){
    let bdListHTML = '';

    for (let i = 0; i<birthDayList.length; i++){
        const eachBirthDay = birthDayList[i];

        const bdPerson = eachBirthDay.beloved;
        const bdDay = eachBirthDay.day;
        const bdMonth = eachBirthDay.month
        const html = `
        <div>
            Family Member:${bdPerson} \n
            ${bdDay} days ${bdMonth} months left to birthday
        </div> 
        <button onclick="
            birthDayList.splice(${i}, 1);
            renderList();
        ">Delete</button>
        `
        bdListHTML += html;
    }
    document.getElementById("theList").innerHTML = bdListHTML;
}


function calculateTime(){
    let birthDateInputValue = document.getElementById("birthdate").value;
    let nameInputValue = document.getElementById("isim").value;

    let birthDate = new Date(birthDateInputValue);
    let today = new Date();

    let dayGap;
    let monthGap;

    if (birthDate.getDate() - today.getDate() < 0){
        dayGap = ((birthDate.getDate() + 30) - today.getDate());
        monthGap-=1;
        if (birthDate.getMonth() - today.getMonth() <= 0){
            monthGap = (birthDate.getMonth() + 12) - today.getMonth(); 
        } else {
            monthGap = birthDate.getMonth() - today.getMonth();
        }
    } else {
        dayGap = (birthDate.getDate() - today.getDate());
        if (birthDate.getMonth() - today.getMonth() <= 0){
            monthGap = (birthDate.getMonth() + 12) - today.getMonth(); 
        } else {
            monthGap = birthDate.getMonth() - today.getMonth();
        }
    }

    birthDayList.push({
        beloved: `${nameInputValue}`,
        month: `${monthGap}`,
        day: `${dayGap}`
    })
    
    document.getElementById("isim").value = '';
    renderList();
}