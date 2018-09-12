const getUser = (id, callback) => {
    let user = {
        id: 123,
        name: 'Bob',
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(123, (user) => {
    console.log(user);
});