const client = require('../Database/postgreSQL')

exports.getFincance = (req,res) => {

    let query = `select * from income_breakdown(p_userid:=${req.body.userid})`;

    client.query(query,(err,result) => {
        if(!err){
            res.send(result.rows);
        }
        else {
            res.send(err);
        }
    })

}

exports.filterFincance = (req,res) => {

    if(req.body.month === ''){

        var query = `select * from income_breakdown(p_userid:=${req.body.userid},p_chk:=2,p_year:=${req.body.year})`;

    }
    else {
        var query = `select * from income_breakdown(p_userid:=${req.body.userid},p_chk:=3,p_month:='${req.body.month}',p_year:=${req.body.year})`;

    }

    client.query(query,(err,result) => {
        if(!err){
            res.send(result.rows);
        }
        else {
            res.send(err);
        }
    })

}

exports.FincanceBreakdown = (req,res) => {
    if(req.body.year === ''){
        var query = `select * from income_breakdown(p_chk:=4,p_userid:=${req.body.userid})`;
    }
    else {
        var query = `select * from income_breakdown(p_chk:=4,p_userid:=${req.body.userid},p_year:=${req.body.year})`;
    }

    client.query(query,(err,result) => {
        if(!err){
            res.send(result.rows);
        }
        else {
            res.send(err);
        }
    })

}
