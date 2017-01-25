/**
 * Created by EX-pengzhiliang001 on 2017-01-25.
 */
(function (loggingMediator){
    var logs=[];

    loggingMediator.subscribe("log",function (message){
        logs.push({
            message:message,
            date:new Date()
        });

        loggingMediator.subscribe("retrieve-log",function () {
            loggingMediator.publish("log-retrieved",logs);
        });

    })

})(loggingMediator);