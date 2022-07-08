let buildComputer = function(memory, display, processor) {

  return {
          basicPrice: 5000,
          processor: processor,
          display: display,
          memory: memory
      };
    }
    
  let myComputer = buildComputer(8, 13, 'i7');
  console.log(myComputer)