var usernames = ["admin", "ahsan21", "hasnat12", "awais.1", "haris333"];
for (var i = 0; i < usernames.length; ++i) {
    if (usernames[3]) {
        console.log("Hello admin, would you like to see a status report");
    }
    else {
        console.log("hello ".concat(usernames, "thank you for logging in again"));
    }
}
