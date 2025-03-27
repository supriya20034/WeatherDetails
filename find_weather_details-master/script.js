$(document).ready(function(){

    var typed = new Typed('.typed', {
        strings: ['Hello,', 'Enter the city name '],
        smartBackspace: true,
        loop: true,
        typeSpeed: 100
    });
          $("#userinput").on("keyup", function(event) {
                var cityname = event.target.value;
                const APIKey = "425f263559720f69b73a57832858bdea";

                //make a request to the server

                $.ajax({

                    url: `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`,

                }).done(function(weatherdata) {
                    $("#res").html(`
                    <div class="container">
                    <div class="row" id= "rest">
                        <div class="card" >
                                <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">Weather: ${weatherdata.weather[0].description}</h5>
                                    <p class="card-text">The Temperatur at ${cityname} is = ${weatherdata.main.temp} &#8451; and it feels like it is ${weatherdata.main.feels_like} &#8451;</p>
                                    <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">Learn more about ${cityname}</a>
                                </div>
                        </div>
                    </div>
                    </div>`);
                });
            });
        });

        // $(document).ready(function(){

        //     var typed = new Typed('.typed', {
        //         strings: ['Hello,', 'Enter the city name '],
        //         smartBackspace: true,
        //         loop: true,
        //         typeSpeed: 100
        //     });
        // $("#userinput").on("keyup", function(event) {
        //     var cityname = event.target.value;
        //     const APIKey = "425f263559720f69b73a57832858bdea";

        //     //make a request to the server

        //     $.ajax({

        //         url: `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`,

        //     }).done(function(weatherdata) {
