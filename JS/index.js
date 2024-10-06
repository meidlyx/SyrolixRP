// function updateDateTime() {
//     const now = new Date();

//     const day = String(now.getDate()).padStart(2, '0');
//     const month = String(now.getMonth() + 1).padStart(2, '0');
//     const year = now.getFullYear();
//     const formattedDate = `${day}.${month}.${year}`;
    
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
//     const formattedTime = `${hours}:${minutes}:${seconds}`;

//     document.getElementById('date').textContent = formattedDate;
//     document.getElementById('clock').textContent = formattedTime;
// }

// setInterval(updateDateTime, 1000);
// updateDateTime();
