let birthDayList = [];

// Load data from local storage when the page is loaded
window.onload = function() {
    let storedList = localStorage.getItem('birthDayList');
    if (storedList) {
        birthDayList = JSON.parse(storedList);
        renderList();
    }
};

function renderList() {
    let bdListHTML = '';

    for (let i = 0; i < birthDayList.length; i++) {
        const eachBirthDay = birthDayList[i];

        const bdPerson = eachBirthDay.beloved;
        const bdDay = eachBirthDay.day;
        const bdMonth = eachBirthDay.month;
        const html = `
        <div>
            Family Member: ${bdPerson} <br>
            ${bdDay} days ${bdMonth} months left to birthday
        </div> 
        <button onclick="
            removeBirthday(${i});
        ">Delete</button>
        `;
        bdListHTML += html;
    }
    document.getElementById("theList").innerHTML = bdListHTML;
}

function calculateTime() {
    let birthDateInputValue = document.getElementById("birthdate").value;
    let nameInputValue = document.getElementById("isim").value;

    let birthDate = new Date(birthDateInputValue);
    let today = new Date();

    let dayGap;
    let monthGap;

    if (birthDate.getDate() - today.getDate() < 0) {
        dayGap = ((birthDate.getDate() + 30) - today.getDate());
        monthGap -= 1;
        if (birthDate.getMonth() - today.getMonth() <= 0) {
            monthGap = (birthDate.getMonth() + 12) - today.getMonth(); 
        } else {
            monthGap = birthDate.getMonth() - today.getMonth();
        }
    } else {
        dayGap = (birthDate.getDate() - today.getDate());
        if (birthDate.getMonth() - today.getMonth() <= 0) {
            monthGap = (birthDate.getMonth() + 12) - today.getMonth(); 
        } else {
            monthGap = birthDate.getMonth() - today.getMonth();
        }
    }

    birthDayList.push({
        beloved: `${nameInputValue}`,
        month: `${monthGap}`,
        day: `${dayGap}`
    });
    
    // Save updated list to local storage
    localStorage.setItem('birthDayList', JSON.stringify(birthDayList));

    document.getElementById("isim").value = '';
    renderList();
}

function removeBirthday(index) {
    birthDayList.splice(index, 1);
    
    // Save updated list to local storage
    localStorage.setItem('birthDayList', JSON.stringify(birthDayList));
    
    renderList();
}
