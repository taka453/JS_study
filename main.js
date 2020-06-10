// メンバーリスト

const members = [
    {
        name: "山田太郎",
        age: 42,
        hobby: "ギター ",
    },
    {
        name: "斎藤すぐる ",
        age: 46,
        hobby: "車 ",
    },
    {
        name: "田中よしお",
        age: 32,
        hobby: "旅行、カメラ",
    },
    {
        name: "高橋とおる",
        age: 25,
        hobby: "絵を書くこと",
    },
    {
        name: "藤原まこと",
        age: 20,
        hobby: "バイク",
    },
]

// 全員のメンバーを表示
// members.forEach(member => {
//     document.write(" 名前: " + member.name);
//     document.write(" 年齢: " + member.age + "歳");
//     document.write(" 趣味: " + member.hobby);
//     document.write("<br>");
// });

// 40代

document.write("40代" + "<br>");

/*===
    fillterメソッドにて、40代から50代のメンバーを抽出。
===*/

const forties = members.filter((member) => {
    return member.age >= 40 && member.age < 50;
});

forties.forEach(forties_member => {
    document.write(" 名前: " + forties_member.name);
    document.write(" 年齢: " + forties_member.age + "歳");
    document.write(" 趣味: " + forties_member.hobby);
    document.write("<br>");
});

// 30代

document.write("30代" + "<br>");

/*===
    fillterメソッドにて、40代から50代のメンバーを抽出。
===*/

const thirties = members.filter((member) => {
    return member.age >= 30 && member.age < 40;
});

thirties .forEach(thirties_member => {
    document.write(" 名前: " + thirties_member.name);
    document.write(" 年齢: " + thirties_member.age + "歳");
    document.write(" 趣味: " + thirties_member.hobby);
    document.write("<br>");
});

// 20代

document.write("20代" + "<br>");

/*===
    fillterメソッドにて、40代から50代のメンバーを抽出。
===*/

const twenties = members.filter((member) => {
    return member.age >= 20 && member.age < 30;
});

twenties.forEach(twenties => {
    document.write(" 名前: " + twenties.name);
    document.write(" 年齢: " + twenties.age + "歳");
    document.write(" 趣味: " + twenties.hobby);
    document.write("<br>");
});


