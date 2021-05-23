'use strict';

function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
};

const userProto = new User();
User.prototype = userProto;

const users = [];
for(let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`, 
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5,
  );
  users.push(user);
};

// 1.1 Для примера с последней части занятия 
// (https://github.com/pecourses/js-intro/blob/main/js/users.js) 
// прописать метод getFullName() (возвращает строку с полным именем) для юзера. 
// Общую логику (т.е. указанный метод) вынести в прототип.
console.groupCollapsed('Task 1.1');
    userProto.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };

    const fullNames = users.map(function(user) {
        return user.getFullName();
    });
    console.table(fullNames);
console.groupEnd();

// 1.2 Получить массив полных имен лиц женского пола школьного возраста (6 - 18 лет).
console.groupCollapsed('Task 1.2');
    const teenageWomenFullnames = users.filter(areTeenageWomen).map(getFullnames);
    console.table(teenageWomenFullnames);

    function areTeenageWomen(user, i, arr) {
        return !user.isMale && user.age >= 6 && user.age <= 18;
    };

    function getFullnames(user, i, arr) {
        return user.getFullName();
    };
console.groupEnd();

// 1.3 Проверить, есть ли среди пользователей пользователь с email`ом useremail99@gmail.com
console.groupCollapsed('Task 1.3');
    console.log('users.some(isSomeMail("useremail99@gmail.com")) :>> ', users.some(
        item => (item.email === "useremail99@gmail.com")
    ));
console.groupEnd();

// 1.4 Проверить, все ли пользователи подписаны (subscribed).
console.groupCollapsed('Task 1.4');
    console.log('users.every(isSubscribed) :>> ', users.every(isSubscribed));

    function isSubscribed(item) {
        return item.isSubscribed;
    };
console.groupEnd();

