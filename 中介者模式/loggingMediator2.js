/**
 * Created by EX-pengzhiliang001 on 2017-01-25.
 */
(function (loggingMediator) {

    var button =document.createElement('button');

    button.innerHTML="show logs";

    button.addEventListener("click",function () {
        loggingMediator.publish("retrieve-log")
    },false);

    loggingMediator.subscribe("log-retrieved",function (logs){

        var index= 0,
            length = logs.length,
            ulTag=document.createElement("ul"),
            liTag=document.createElement("li"),
            listItem ;

        for (;index < length;index++ ){
            listItem= liTag.cloneNode(false);
            listItem.innerHTML=logs[index].date.toDateString()+":"+logs[index].message;
            ulTag.appendChild(listItem);
        }

        document.body.appendChild(ulTag);

    })

    document.body.appendChild(button);

})(loggingMediator)