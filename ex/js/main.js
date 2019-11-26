function application(){
}

application.prototype.displayCurrentUser = function(selector) {
    BX24.callMethod(
        'user.current',
        {},
        function(result){
            $(selector).html('Hello ' + result.data().NAME + ' ' + result.data().LAST_NAME + '!');
        }
    );
}

//create our application
app = new application();

//crm.deal.list - получение списка сделок
//crm.lead.list - список лидов
//crm.item.get - список элементов хранилища
//crm.items.getlist - список задач
application.prototype.displayUserClosedDeals = function(idUser){

    var dealSum = 0, dealHTML = '';
    var curapp = this;

BX24.callMethod(
    //выбираем сделки пользователя
    "crm.deal.list",
    //с указанными параметрами
    {
        order: { "STAGE_ID": "ASC"},
        filter: {"ASSIGNED_BY_ID": idUser, "CLOSED": 'y'},
        select: ["ID", "TITLE", "OPPORTUNITY"]
    },
    function(result)
    {
        //получение порции данных
        if(result.error()){
        //обработка ошибки
        curapp.displayErrorMessage('К сожалению, произошла ошибка получения сделок. Попробуйте повторить отчёт позже');
        console.error(result.error());
        }
        else{
            var data = result.data();
 //вывод порции данных
 //console.log(result.data());
 //создаём цикл, формирует html на основании объекта result
            for(indexDeal in data){
                dealDum += parserFloat(data[indexDeal].OPPORTUNITY);
                dealHTML += '<tr><th scope="row">' + data[insexDeal].ID + '</th><td>' + data[indexDeal].TITLE + '</td><td>'
                        + data[indexDeal].OPPORTUNITY + '</td></tr>';
            }
           
            // ещё есть сделки?
        if(result.more())
        result.next();
        else{
            //выводим html в нужные нам блоки
            $('#deal-list').html(dealHTML);
            $('#deal-sum').html('<span class="volume">' + dealSum + '</span><br/>общая сумма');
           
        }
        }
    }
);
};