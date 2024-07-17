let messageEl=document.querySelector(".message");
let scoreEl=document.querySelector(".score");
let cardsEl=document.querySelector(".cards");
let firstcard=randomcard()
let secondcard=randomcard()
let cards=[firstcard,secondcard]
let sum=cards[0]+cards[1]

function startgame()
{
    rendergame()

}
function collation()
{
    let card_updated="cards: "
    for(let i=1;i<=cards.length;i++)
    {
        card_updated+=cards[i-1]+' '
    }

    return card_updated;

}

function randomcard()
{
    let ran=Math.floor(Math.random()*10)+2
    return ran

}
function rendergame()
{
    scoreEl.innerText="sum: "+sum;
    cardsEl.innerText=collation()
    if(sum<21)
    {
        messageEl.innerText="want to draw?"
        
    }
    else if(sum===21)
    {
        messageEl.innerText="You have won!"
    }
    else{
        messageEl.innerText="You lost and out of the game!"

    }
    
}

function newCard()
{
    let newcard=randomcard()
    cards.push(newcard)

    sum=sum+newcard
    rendergame()
}

function reset()
{
    cardsEl.innerText="cards: "
    sum=0
    firstcard=randomcard()
    secondcard=randomcard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    rendergame()
}