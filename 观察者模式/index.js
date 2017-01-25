/**
 * Created by EX-pengzhiliang001 on 2017-01-24.
 */
var observer=(function () {
    "use strict";

    var event={};

    return {
        subscribe:function (eventName,callback){
            if (!eventName.hasOwnProperty(eventName)){
                event[eventName]=[];
            }

            event[eventName].push(callback);
        },

        unsubscribe:function ( eventname, callback ) {
            var index =0 ,
                length= 0;

            if(event.hasOwnProperty(eventname)){
                length=event[eventname].length;

                for (;index<length;index++){
                    if( event[eventname][index]===callback){
                        event[eventname].splice(index,1);
                        break;
                    }
                }
            }
        },

        publish : function (eventname) {
            console.log(arguments);
            var data=Array.prototype.slice.call(arguments,1),
                index=0,
                length=0;

            if (event.hasOwnProperty(eventname)) {
                length=event[eventname].length;

                for(;index<length;index++){
                    event[eventname][index].apply(this , data);
                }
            }

        }
    }
}());



(function (observer){

    function ajaxPost(url,data,callback){
        var xhr=new  XMLHttpRequest(),
            STATE_LOADED=4,
            STATE_OK=200;
        xhr.onreadystatechange=function () {

            if (xhr.readyState!==STATE_LOADED){
                return ;
            }

            if (xhr.status===STATE_OK){
                callback(xhr.responseText);

            }
        }

        xhr.open("POST",url);

        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

        xhr.send(data);

    }

    observer.subscribe('form-submit',function (url,formData) {
        ajaxPost(url,formData,function (response) {
            observer.publish("ajax-response",response);
        })
    })
})(observer);


(function (observer){

    var form =document.getElementById("my-form"),
        action = form.action ,
        data = [];

    var fields = form.getElementsByTagName("input"),
        index = 0,
        length = fields.length ,
        field="",
        thankYouMessage = document.createElement('p');
    console.log(fields);
    function onFormSubmit (e) {
        e.preventDefault();

        for (; index < length ; index++ ){
            field = fields[index];
            data.push(escape(field.name)+"= "+ escape(field.value));
        }
        console.log(data);

        observer.publish ("form-submit", action, data.join("&"));

    }

    form .addEventListener("submit",onFormSubmit,false);

    observer.subscribe("ajax-response",function (response){
        thankYouMessage.innerHTML="Thank you for your form submission . The server responsed with:\n "+response;

        form.parentNode.appendChild(thankYouMessage);
    })





}) (observer)