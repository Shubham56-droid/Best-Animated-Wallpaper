let bg = document.getElementById('bgImg');
    const backbg = ['bg1','bg2','bg3'];
    
    let i = 0;
    function animate(num)
    {
        bg.style.backgroundImage = 'url(./images/'+ `${backbg[num]}` + '.jpg)';
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