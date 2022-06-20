    
    function handleCreateCountDown(startDate, endDate) {
      const currentYear = new Date().getFullYear();
      const defaultStartDate =
        startDate == "" ? +new Date() : +new Date(`${startDate}`);
      const defaultEndDate =
        endDate == ""
          ? +new Date(`January 01 ${currentYear + 1} 00:00:00`)
          : +new Date(`${endDate}`);
  
      const timeFrame = defaultEndDate - defaultStartDate;

      handleCreateTimeElemens(timeFrame);
      //---------------   LOGS  --------------------------  
     // console.log(`CreateCountDown`);
   
    }

   function  handleCreateTimeElemens(timeFrame){
      if (timeFrame > 0) {
        const timeElements = {
          days: Math.floor(timeFrame / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeFrame / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeFrame / 1000 / 60) % 60),
          seconds: Math.floor((timeFrame / 1000) % 60),
        };

        handleRenderCountDown(timeElements) 
       //---------------   LOGS  --------------------------  
      // console.log(`Time elements:  ${timeElements.seconds}`);

      } else {
        console.log("Message");
      }
  }

  const handleFormatCountDown = (t) => {
     //---------------   LOGS  --------------------------  
    // console.log(`Format`);
    return t < 10 ? "0" + t : t;
  }

  function handleRenderCountDown(time){
     document.getElementById('days').innerHTML = ` ${handleFormatCountDown(time.days)}`;
     document.getElementById('hours').innerHTML = ` ${handleFormatCountDown(time.hours)}`;
     document.getElementById('minutes').innerHTML = `${handleFormatCountDown(time.minutes)}`;
     document.getElementById('seconds').innerHTML=`${handleFormatCountDown(time.seconds)}`;
    
     //---------------   LOGS  --------------------------  
    // console.log(`Render`);
  }


// --------- WITHOUT SETINTERVAL ---------
// handleCreateCountDown('', '')

// ----- WITH SETINTERVAL ----------
setInterval(() => {
  handleCreateCountDown('', '')
}, 1000)