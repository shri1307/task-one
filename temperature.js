       function convert() {
           const temperatureInput = document.getElementById("temperature");
           const unitSelect = document.getElementById("unit");
           const celsiusResult = document.getElementById("celsiusResult");
           const fahrenheitResult = document.getElementById("fahrenheitResult");
           const kelvinResult = document.getElementById("kelvinResult");

           const temperature = parseFloat(temperatureInput.value);
           const unit = unitSelect.value;

           if (!isNaN(temperature)) {
               if (unit === "celsius") {
                   // Convert to Fahrenheit and Kelvin
                   const fahrenheit = (temperature * 9 / 5) + 32;
                   const kelvin = temperature + 273.15;

                   celsiusResult.textContent = `Celsius: ${temperature} °C`;
                   fahrenheitResult.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
                   kelvinResult.textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
               } else if (unit === "fahrenheit") {
                   // Convert to Celsius and Kelvin
                   const celsius = (temperature - 32) * 5 / 9;
                   const kelvin = (temperature - 32) * 5 / 9 + 273.15;

                   celsiusResult.textContent = `Celsius: ${celsius.toFixed(2)} °C`;
                   fahrenheitResult.textContent = `Fahrenheit: ${temperature} °F`;
                   kelvinResult.textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
               } else if (unit === "kelvin") {
                   // Convert to Celsius and Fahrenheit
                   const celsius = temperature - 273.15;
                   const fahrenheit = (temperature - 273.15) * 9 / 5 + 32;

                   celsiusResult.textContent = `Celsius: ${celsius.toFixed(2)} °C`;
                   fahrenheitResult.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
                   kelvinResult.textContent = `Kelvin: ${temperature} K`;
               }
           } else {
               celsiusResult.textContent = "Invalid input";
               fahrenheitResult.textContent = "";
               kelvinResult.textContent = "";
           }
       }