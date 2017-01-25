/**
 * Created by EX-pengzhiliang001 on 2017-01-25.
 */
(function (formsMediator){

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

        formsMediator.publish ("form-submit", action, data.join("&"));

    }

    form .addEventListener("submit",onFormSubmit,false);

    formsMediator.subscribe("ajax-response",function (response){
        thankYouMessage.innerHTML="Thank you for your form submission . The server responsed with:\n "+response;

        form.parentNode.appendChild(thankYouMessage);
    })





}) (formsMediator)