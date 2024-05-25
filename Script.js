var computerChoise;
let userChoise,draw=0,win=0,loss=0;

// Rock -> 0
// Paper -> 1
// Scissor -> 2

function random()
{
    computerChoise = Math.round(Math.random()*3);
    if(computerChoise>2)
    {
        computerChoise=0;
    }
    console.log(computerChoise);
    checking();
}

function rock()
{
    userChoise = 0;
    random();
}

function paper()
{
    userChoise = 1;
    random();
}

function scissor()
{
    userChoise = 2;
    random();
}

function checking()
{
    if(userChoise == 0 && computerChoise == 0)
    {
        draw++;
    }
    else if(userChoise == 0 && computerChoise == 1)
    {
        loss++;
    }
    else if(userChoise == 0 && computerChoise == 2)
    {
        win++;
    }
    else if(userChoise == 1 && computerChoise == 0)
    {
        win++;
    }
    else if(userChoise == 1 && computerChoise == 1)
    {
        draw++;
    }
    else if(userChoise == 1 && computerChoise == 2)
    {
        loss++;
    }
    else if(userChoise == 2 && computerChoise == 0)
    {
        loss++;
    }
    else if(userChoise == 2 && computerChoise == 1)
    {
        win++;
    }
    else if(userChoise == 2 && computerChoise == 2)
    {
        draw++;
    }
    document.getElementById("win").innerText=win;
    document.getElementById("loss").innerText=loss;
    document.getElementById("draw").innerText=draw;
}