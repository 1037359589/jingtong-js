/**
 * Created by EX-pengzhiliang001 on 2017-01-25.
 */


(function (formsMediator){
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

    formsMediator.subscribe('form-submit',function (url,formData) {
        ajaxPost(url,formData,function (response) {
            formsMediator.publish("ajax-response",response);
        })
    })
}) (formsMediator);