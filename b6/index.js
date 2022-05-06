

function clickHere() {
    // khởi tạo 4 biến
    let name = prompt("Please enter your name");
    const yourHeight = prompt("Please enter your height");
    const yourPartnerHeight = prompt("Please enter your partner's height");
    const yourWeight = prompt("Please enter your weight");
    // tính tổng chiều cao, độ chênh lệch chiều cao, BMI
    const totalHeight = Number(yourHeight) + Number(yourPartnerHeight);
        // mình thắc mắc tại sao cái totalHeight của mình sẽ bị coi là một string nếu ko sử dụng Number trong phép tính,
        // mà hai cái heightDifference và BMInumber lại ko cần nhỉ???
    const heightDifference = Math.abs(yourHeight - yourPartnerHeight);
    const BMInumber = yourWeight / (yourHeight *2);

    // in ra console
    if (isNaN(totalHeight || heightDifference) || isNaN(BMInumber)) {
        console.log("nhập số vào bạn êi")
    } else {
        console.log("ok, bạn tên là " + name);
        console.log("chiều cao của bạn là " + yourHeight);
        console.log("chiều cao bồ của bạn là " + yourPartnerHeight);
        console.log("độ chênh lệch chiều cao hai đứa là " + heightDifference);
        console.log("tổng chiều cao hai đứa là " + totalHeight);
        console.log("giá trị BMI là " + BMInumber);
    // bài tập nâng cao dù đã tình cờ làm luôn ở trên =))))))
        if (heightDifference >= 10) {
            console.log("chiều cao hợp lý")
        } else {
            console.log("chiều cao lý tưởng của một chiếc sừng, hãy cẩn thận")
        }
        if (BMInumber < 18.5) {
            console.log("gầy vl");
        } else if (BMInumber >= 18.5 && BMInumber <= 24.9) {
            console.log("bình thường vl");
        } else if (BMInumber > 24.9 && BMInumber <= 29.9) {
            console.log("tăng cân vl");
        } else {
            if (BMInumber > 29.9 && BMInumber <= 34.9) {
                console.log("béo phì độ 1 cmnr");
            } else if (BMInumber > 34.9 && BMInumber <= 39.9) {
                console.log("béo phì độ 2 cmnr");
            } else {
                console.log("béo phì độ 3 cmnr");
            } 
        }


    }
    
        
    
    

    



}

