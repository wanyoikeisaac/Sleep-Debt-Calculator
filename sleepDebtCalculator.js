const getSleepHours = day => {
    if (day === 'monday'){
      return 8;
    }else if (day === 'tuesday'){
      return 7;
    } else if (day === 'wednesday'){
      return 9;
    } else if (day === 'thursday'){
      return 2;
    } else if (day === 'friday'){
      return 1;
    } else if (day === 'saturday'){
      return 3;
    } else if (day === 'sunday'){
      return 4;
    }
  };
  const getActualSleepHours = () => {
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  };
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
  };
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep.');
  } else if(actualSleepHours > idealSleepHours){
    console.log('You got more sleep than needed' + (actualSleepHours - idealSleepHours) + 'hours more sleep than you needed this week. Keep up the good work.');
  } else if(actualSleepHours < idealSleepHours){
    console.log('You should get some more rest' + (idealSleepHours - actualSleepHours) + 'hours less sleep than you needed this week. Get some rest.');
  } else {
    console.log('Error! Something went wrong, check your code.');
  }
  
  };
  calculateSleepDebt('monday');
  