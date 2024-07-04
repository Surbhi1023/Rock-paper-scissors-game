const game=()=>
{
    let playerScore=0;
    let computerScore=0;
    let moves=0;


    const playGame=()=>{
        const rockBtn=document.querySelector('.rock');
        const paperBtn=documnent.querySelector('.paper');
        const scissorBtn=documnent.querySelector('.scissor');

        const playerOptions=[rockBtn, paperBtn, scissorBtn];
        const computerOptions=['rock', 'paper', 'scissor']

        //func to start
        playerOptions.forEach(option=> {

                option.addEventListener('click', function(){

                    const movesLeft=document.querySelector('.movesLeft');
                    moves++;
                    movesLeft.innerText=`Moves Left : ${10-moves}`;

                    const choiceNumber=Math.floor(Math.random()*3);
                    const computerChoice=computerOptions[choiceNumber];

                    
                    winner(this.innerText, computerChoice)

                    if(moves==10)
                    {
                        gameOver(playerOptions, movesLeft);
                    }
                })
            })
    }

    //to decide winner
    const winner=(player, computer)=>
    {
        const result=document.querySelector('.result');
        const playerScoreBoard=document.querySelector('.p-count');
        const computerScoreBoard=documnent.querySelector('.c-count');

        player=player.toLowerCase();
        computer=computer.toLowerCase();

        if(player==computer)
        {
            result.textContent='TIE';
        }
        else if(player=='rock')
        {
            if(computer=='paper')
            {
                result.textContent='Computer Won';
                computerScore++;
                computerScoreBoard.textContent=computerScore;
            }
            else 
            {
                result.textContent='Player Won';
                playerScore++;
                playerScoreBoard.textContent=playerScore;
            }
        }
        else if(player=='paper')
        {
            if(computer=='scissor')
            {
                result.textContent='Computer Won';
                computerScore++;
                computerScoreBoard.textContent=computerScore;
            }
            else 
            {
                result.textContent='Player Won';
                playerScore++;
                playerScoreBoard.textContent=playerScore;
            }
        }
        else if(player=='scissor')
        {
            if(computer=='rock')
            {
                result.textContent='Computer Won';
                computerScore++;
                computerScoreBoard.textContent=computerScore;
            }
            else 
            {
                result.textContent='Player Won';
                playerScore++;
                playerScoreBoard.textContent=playerScore;
            }
        }
    }

    const gameOver=(playerOptions, movesLeft)=>
    {
        const chooseMove=document.querySelector('.move');
        const result=document.querySelector('.result');
        const reloadBtn=document.querySelector('.reload');

        playerOptions.forEach(option=>{
            option.style.display='none';
        })

        chooseMove.innerText='GAME OVER!!!';
        movesLeft.style.display='none';

        if(playerScore>computerScore)
        {
            result.style.fontSize='2rem';
            result.innerText='YOU WON THE GAME';
            result.style.color='#308D46';
        }
        else if(playerScore<computerScore)
        {
            result.style.fontSize='2rem';
            result.innerText='YOU LOST THE GAME';
            result.style.color='red';
        }
        else
        {
            result.style.fontSize='2rem';
            result.innerText='TIE';
            result.style.color='grey';
        }

        reloadBtn.innerText='Restart';
        reloadBtn.style.display='flex';
        reloadBtn.addEventListener('click', ()=>{
            window.location.reload();
        })
    }

    playGame();
}

game();
