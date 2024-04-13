function AccessLogger(req, res, next) {
    var accessUUID = uuid.v1();
    console.log('Accessed to ' + req.path)
    console.log('Logged as: ' + accessUUID)
    res.locals.accessUUID = accessUUID;
    res.locals.accessDate = Date.now();

    var accessData = {};
    accessData[accessUUID] = {
        req,
        timestamp: Date.now()
    }

    accessLog.push(accessData);
    next()
}

module.exports = AccessLogger;