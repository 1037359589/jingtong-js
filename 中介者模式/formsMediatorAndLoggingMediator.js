/**
 * Created by EX-pengzhiliang001 on 2017-01-25.
 */
(function (formsMediator,loggingMediator) {

    formsMediator.subscribe("form-submit",function (url){
        loggingMediator.publish("log","Form submitted to "+url);
    });

    formsMediator.subscribe("ajax-response",function (response){
        loggingMediator. publish("log","The server response to an Ajax call with :" +response);
    })

})(formsMediator,loggingMediator)