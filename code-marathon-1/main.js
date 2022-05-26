// // Drag and Drop game

// const list_items = document.querySelectorAll('.css');
// const blanks = document.querySelectorAll('.blank');
// const list = document.querySelector('.cssLists');

// let draggedItem = null;

// for (let i = 0; i < list_items.length; i++) {
//     let item = list_items[i];
//     // event bắt đầu kéo thanh từ vựng
//     item.addEventListener("dragstart", function (event) {
//         draggedItem = item;
//         // đặt id cho thanh từ vựng được kéo (giống nội dung thanh từ vựng)
//         item.id = item.innerText;
//         event.dataTransfer.setData("text", event.target.id)
//         // dùng setTimeout để trì hoãn việc item biến mất ngay khi kéo đi
//         setTimeout(function () {
//             draggedItem.style.display = "none"; // khi kéo thì xóa thanh từ vựng đi
//         }, 0);
//     });
//     // event sau khi thả kéo thanh từ vựng
//     item.addEventListener("dragend", function (event) {
//         setTimeout(function () {
//             draggedItem.style.display = "inline"; // thả ra thì thanh từ vựng hiện lại  
//         }, 0) 
//         // nếu từ vựng được điền vào chỗ trống thì sẽ ko drag được nữa
//         if (this.parentNode.className == "blank") {
//             item.setAttribute('draggable', false);
//         }
//     })  
    
// }

// for (let j = 0; j < blanks.length; j++) {
//     const blank = blanks[j];    
//     // event khi kéo thanh từ vựng đến ô trống 
//     blank.addEventListener("dragover", function(event) {
//         event.preventDefault();
//     })
//     // event khi thả thanh từ vụng vào ô trống
//     blank.addEventListener("drop", function(event) {
//         // nếu còn chỗ trống thì mới thêm từ vựng vào được
//         if (this.textContent == 0) {
//             const dragged = event.dataTransfer.getData("text");
//             const dropped = event.target.getAttribute("id");
//             // nếu hai id giống nhau thì mới thêm từ vựng vào được
//             if (dragged == dropped) {
//                 this.prepend(draggedItem);
//                 blank.style.padding = "0";  // xóa padding của ô trống blank đi
//             }
//         } 
//     })      
// }

// // hết thời gian sẽ hiện thông báo
// setTimeout(function() {
//     if (list.innerHTML == 0) {
//         alert("well done !");
//     } else {
//         alert("you have failed...");
//     }
// }, 16000);

// // hiển thị thời gian còn lại
// let now = new Date().setTime(15);
// setInterval(function() {
//     document.getElementById("time").innerHTML = now ;
//     now -= 1;
//     now = checkTime(now);
    
// }, 1000)

// function checkTime(now) {
//     if (now < 0) {
//         document.getElementById("time").innerHTML = "EXPIRED";
//     }
//     return now;
// } // chưa xong


let game = document.getElementById("gameArea");

let frog4 = document.createElement("i");
frog4.style.color = "purple";
frog4.style.fontSize = "50px";
frog4.className = "fa-solid fa-frog";
game.appendChild(frog4);
game.style.display = "flex";
game.style.flexDirection = "column";

let userCode = document.getElementById("userCode");
setInterval(function() {
    let x = userCode.value;
    game.style = x;
}, 1000)




