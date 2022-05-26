// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//add to Set for handle dulicate data
function addSet(set, arr) {
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
    }
}

//add edu
function addEdu(education, name, city, graduate) {
    let edu = new Object();
    edu.name = name;
    edu.city = city;
    edu.graduate = graduate;
    education.push(edu);
}

//add user
function addUser(
    name,
    gender,
    age,
    email,
    favoriteColor,
    isHavePet,
    education,
    favoriteRestourant
) {
    let user = new Object();
    user.name = name;
    user.gender = gender;
    user.age = age;
    user.email = email;
    user.favoriteColor = favoriteColor;
    user.isHavePet = isHavePet;
    user.education = JSON.stringify(education); //for show object data
    user.favoriteRestaurant = favoriteRestourant;
    users.push(user);
}

//=== add first user multipele data ====//

const favoriteColor1 = new Set();
addSet(favoriteColor1, ["Yellow", "Pink", "White", "Purple"]);

const favoriteRestourant1 = new Set();
addSet(favoriteRestourant1, [
    "Bento",
    "Sushi",
    "Pancake",
    "Eggy",
    "Tempura",
    "Bento",
    "Eggy",
    "Padang",
    "Tteok",
    "Sushi",
    "Sushi",
]);

const education1 = [];

addEdu(education1, "SD 01", "Jakarta", 2016);
addEdu(education1, "SMP 02", "Jakarta", 2019);
addEdu(education1, "SMA 03", " Tangerang");
console.log(education1);

//=== add second user multipele data ====//

const favoriteColor2 = new Set();
addSet(favoriteColor2, ["Blue", " Black", " Grey"]);

const favoriteRestourant2 = new Set();
addSet(favoriteRestourant2, [
    "Tempura",
    "Bento",
    "Sushi",
    "Pancake",
    "Padang",
    "Katsu",
    "Geprek",
    "Pancake",
    "Eggy",
]);

const education2 = [];
addEdu(education2, "SD 02", "Jakarta", 2010);
addEdu(education2, "SMP 03", "Bogor", 2013);
addEdu(education2, "SMA 01", "Surabaya", 2016);
addEdu(education2, "Universitas Maju", "Tangerang");

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

//add user data
addUser(
    "Monica",
    "Female",
    17,
    "monica@dingdong.com",
    favoriteColor1,
    "Yes",
    education1,
    favoriteRestourant1
);

addUser(
    "Wendy",
    "Male",
    23,
    "wendy@dingdong.com",
    favoriteColor2,
    "NO",
    education2,
    favoriteRestourant2
);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users,
};
