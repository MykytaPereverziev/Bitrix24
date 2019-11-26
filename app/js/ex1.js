$(document).ready(function () {
    BX24.init(function () {
        // app.displayCurrentUser('#user-name');
        app.displayUserClosedDeals(1);
        });
});

function application () {}

// application.prototype.displayCurrentUser = function(selector) {
//     BX24.callMethod(
//         'user.current',
//         {},
//         function(result) {
//             $(selector).html('Приветствую Вас, ' + result.data().NAME + ' ' + result.data().LAST_NAME + ' в приложении BX24!')
//         }
//     );
//     }

  


//create function displayUserClosedDeals

application.prototype.displayUserClosedDeals = function (idUser) {

    var dealSum = 0, dealHTML = '';
    var curapp = this;

    BX24.callMethod(
        "crm.deal.list", 
        { 
            order: { "DATE_CREATE": "ASC" },
            filter: { "ASSIGNED_BY_ID": idUser, "CLOSED": 'Y'},
            select: [ "ID", "TITLE", "OPPORTUNITY"]
        }, 
        function(result) 
        {
            if(result.error())
            curapp.displayErrorMessage('К сожалению, произошла ошибка получения сделокю Попробуйте повторить отчет позже');
                console.error(result.error());
            else
            {
                var data = result.data();

                console.dir(result.data()); 			
                
                for(indexDeal in data) {
                    dealSum += parseFloat(data[indexDeal].OPPORTUNITY);
                    dealHTML += '<tr><th scope="row">' + data[indexDeal].ID + '</th><td>' + data[indexDeal].TITLE + '</td><td>' 
                                + data[indexDeal].OPPORTUNITY + '</td></tr>';
                }
                
                if(result.more())
                    result.next();

                    else {
                        $('deal-list').html(dealHTML);
                        $('deal-sum').html('<span class="volume">' + dealSum + '</span><br/> общая сумма');
                    }					
            }
        }
    );

};

app = new application();
