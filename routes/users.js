var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    console.log("In routes of users.js");
    //var data = req.param("jsonData");
    //console.log("data is: ");
    //console.log(data);
    //console.log("data ends");
    var n1 = Number(req.param("n1"));
    var n2 = Number(req.param("n2"));
    var op = req.param("op");
    console.log("num1 " + n1);
    console.log("num2 " + n2);
    console.log("oprator " + op);

    if(op=='/' && n2==0){
        var jasonData = {
            "statusCode": 401,
            "ans": "Divided by Zero not possible"
         };
        res.send(jasonData);
    }else {

        var ans;
        switch (op) {

            case '+':
                ans = n1 + n2;
                break;
            case '-':
                ans = n1 - n2;
                break;
            case '/':

                ans = n1 / n2;

                break;
            case '*':
                ans = n1 * n2;
                break;
        }

        if(isNaN(ans)){
            var jsonData = {"statusCode" : 401, "ans" : "Invalid Input!"};
        }
        else {
            var jsonData = {"statusCode": 200, "ans": ans};
        }
            res.send(jsonData);
    }

});

module.exports = router;
