let bg = document.getElementById('bgImg');
   
    let i = 0;
    function animate(num)
    {
        bg.style.backgroundImage = 'url(./images/bg'+ `${num}` + '.jpg)';
        bg.style.transition = '2s';
        i++;
        if(i==backbg.length)
        {
            i = 0;
        }
    }
    setInterval(() => {
        animate(i);
    },10000);