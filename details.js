var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts',[{
    username : 'Asreet',
    balance:100
},
{
    username : 'admin',
    balance:120
}]);


var accounts = storage.getItemSync('accounts');

//push on a new accounts

accounts.push({
    username:'Jen',
    balance:75

});

console.log(accounts);