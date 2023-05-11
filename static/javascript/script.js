//challenge 1: your age in days
function age_in_days(){
    var birthYear = prompt("what year were you born babe?");
    var in_days = (2021 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var text_ans = document.createTextNode(`you are ${in_days} years old!`);
    h1.setAttribute("id", "age_in_days");
    h1.appendChild(text_ans);
    document.getElementById("flexbox-result").appendChild(h1);
}

function reset(){
    document.getElementById("age_in_days").remove();
}

//challenge 2: cat generator
function generate_cat(){
    var image = document.createElement("img");
    var div = document.getElementById("flex_cat_gen");
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
    image.width = "250";
    image.height = "200";
    div.appendChild(image);
}

//challenge 3: rock paper scissor

function rps_game(your_choice){
    var human_choice, bot_choice;
    human_choice = your_choice.id;
    bot_choice = num_to_choice(random_to_rps_int());
    result = decide_winner(human_choice, bot_choice);
    console.log(result);
    message = final_message(result);
    rps_frontend(your_choice.id, bot_choice, message);
}

function random_to_rps_int(){
    return Math.floor(Math.random()*3);
}

function num_to_choice(number){
    return ["rock", "paper", "scissor"][number];
}

function decide_winner(user_choice, computer_choice){
    console.log("user ",user_choice)
    console.log("computer ",computer_choice)
    var rps_database = {
        rock : {scissor: 1, rock: 0.5, paper: 0},
        paper : {rock: 1, paper: 0.5, scissor: 0},
        scissor : {paper: 1, scissor: 0.5, rock: 0}
    };

    var user_score = rps_database[user_choice][computer_choice];
    var computer_score = rps_database[computer_choice][user_choice];

    return [user_score, computer_score];
}

function final_message([user_score, computer_score]){
    if(user_score === 1){
        return {"message":"You Won!" ,"color":"green"} ;
    }else if(user_score === 0.5){
        return {"message":"You Tied!" ,"color":"yellow"} ;
    }else{
        return {"message":"You Lost!" ,"color":"red"} ;
    }
}

function rps_frontend(h_img_choice, b_img_choice, end_message){

    var image_database = {
        "rock": document.getElementById('rock').src,
        "paper": document.getElementById('paper').src,
        "scissor": document.getElementById('scissor').src
    }
    
    //removing images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var human_div = document.createElement("div");
    var bot_div = document.createElement("div");
    var message_div = document.createElement("div");

    human_div.innerHTML = `<img src="${image_database[h_img_choice]}" height="150" width="150" style='box-shadow: 10px 18px 18px 8px rgba(14,27,143,0.57);
    -webkit-box-shadow: 10px 18px 18px 8px rgba(14,27,143,0.57);
    -moz-box-shadow: 10px 18px 18px 8px rgba(14,27,143,0.57);'>`;
    bot_div.innerHTML = `<img src="${image_database[b_img_choice]}" height="150" width="150" style='box-shadow: 10px 18px 18px 8px rgba(14,27,143,0.57);
    -webkit-box-shadow: 10px 18px 18px 8px rgba(14,27,143,0.57);
    -moz-box-shadow: 10px 18px 18px 8px rgba(14,27,143,0.57);'>`;
    message_div.innerHTML = `<h1 style="color:${end_message['color']}; font-size=60px; padding=30px;">${end_message["message"]}</h1>`;

    document.getElementById("flexbox-rps").appendChild(human_div);
    document.getElementById("flexbox-rps").appendChild(message_div);
    document.getElementById("flexbox-rps").appendChild(bot_div);
}

//challenge 4: change color of button
var all_btn = document.getElementsByTagName("button");
var copy_all_btn = [];
for(let i=0;i<all_btn.length;i++){
    copy_all_btn.push(all_btn[i].classList[1]);
}
function btn_color_change(choice){
    if(choice.value === "red"){
        btn_red();
    }else if(choice.value === "green"){
        btn_green();
    }else if(choice.value === "blue"){
        btn_blue();
    }else if(choice.value === "yellow"){
        btn_yellow();
    }
    else if(choice.value === "reset"){
        btn_reset();
    }else if(choice.value === "random"){
        btn_random();
    }
}

function btn_red(){
    for(let i=0;i<all_btn.length;i++){
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add("btn-danger");
    }
}

function btn_green(){
    for(let i=0;i<all_btn.length;i++){
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add("btn-success");
    }
}

function btn_blue(){
    for(let i=0;i<all_btn.length;i++){
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add("btn-primary");
    }
}

function btn_yellow(){
    for(let i=0;i<all_btn.length;i++){
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add("btn-warning");
    }
}

function btn_reset(){
    for(let i=0;i<all_btn.length;i++){
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add(copy_all_btn[i]);
    }
}

function btn_random(){
    var choices = ["btn-danger","btn-primary","btn-success","btn-warning"];
    for(let i=0;i<all_btn.length;i++){
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add(choices[Math.floor(Math.random() * 4)]);
    }
}

//challenge 5: blackjack
let blackjack_game = {
    'you' : {'score_span': '#blackjack-your-result', 'div': '#your-box', 'score': 0},
    'dealer' : {'score_span': '#blackjack-dealer-result', 'div': '#dealer-box', 'score': 0},
    'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cards_map' : {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':10, 'Q':10, 'K':10, 'A':[1, 11]},
    'wins' : 0,
    'losses' : 0,
    'draws' : 0,
    'is_stand' : false,
    'turns_over' : false
}

const YOU = blackjack_game['you'];
const DEALER = blackjack_game['dealer'];

document.querySelector("#blackjack-hit").addEventListener("click", blackjack_hit);
document.querySelector("#blackjack-deal").addEventListener("click", blackjack_deal);
document.querySelector("#blackjack-stand").addEventListener("click", dealer_logic);

function random_card(){
    let random_idx = Math.floor(Math.random()*13);
    return blackjack_game['cards'][random_idx];
}

function blackjack_hit(){
    if(blackjack_game['is_stand'] === false){
        let card = random_card();
        show_card(YOU, card);
        update_score(card, YOU);
        show_score(YOU);
    }
}

const hit_sound = new Audio('static/sound/sounds_swish.m4a');
const won_sound = new Audio('static/sound/sounds_cash.mp3');
const lost_sound = new Audio('static/sound/sounds_aww.mp3');

function show_card(active_player, card){
    if(active_player['score']<=21){
        let card_image = document.createElement('img');
        card_image.src = `static/image/card_images/${card}.png`;
        document.querySelector(active_player['div']).appendChild(card_image);
        hit_sound.play();
    }else{
        
    }
}

function blackjack_deal(){
    if(blackjack_game['turns_over'] === true){
        blackjack_game['is_stand'] = false;
        document.getElementById("blackjack-result").textContent = "Let's Play";
        document.getElementById("blackjack-result").style.color = "black";

        let your_images = document.querySelector("#your-box").querySelectorAll("img");
        let dealer_images = document.querySelector("#dealer-box").querySelectorAll("img");
        for (let i = 0; i < your_images.length; i++) {
            your_images[i].remove();
        }
        for (let i = 0; i < dealer_images.length; i++) {
            dealer_images[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;
        document.querySelector(YOU['score_span']).textContent = YOU['score'];
        document.querySelector(YOU['score_span']).style.color = "white";

        document.querySelector(DEALER['score_span']).textContent = DEALER['score'];
        document.querySelector(DEALER['score_span']).style.color = "white";

        blackjack_game['turns_over'] = false;
    }
}

function update_score(card, active_player){
    //for A 2 options (1, 11)
    if(card === 'A'){
        //if adding 11 keeps me below 21 then add 11 else add 1
        //0 based indexing (+11)
        if(active_player['score']+blackjack_game['cards_map'][card][1] <= 21){
            active_player['score'] += blackjack_game['cards_map'][card][1];
        }else{
            active_player['score'] += blackjack_game['cards_map'][card][0];
        }
    }else{
        active_player['score'] += blackjack_game['cards_map'][card];
    }
}

function show_score(active_player){
    if(active_player['score'] > 21){
       document.querySelector(active_player['score_span']).textContent = "BUST!";
       document.querySelector(active_player['score_span']).style.color = "red";
    }else{
        document.querySelector(active_player['score_span']).textContent = active_player['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealer_logic(){
    blackjack_game['is_stand'] = true;
    while(DEALER['score']<16 && blackjack_game['is_stand']===true){
        let card = random_card();
        show_card(DEALER, card);
        update_score(card, DEALER);
        show_score(DEALER);
        await sleep(1000);
    }
    blackjack_game['turns_over'] = true;
    show_winner(compute_winner());
}

function compute_winner(){
    let winner;

    if(YOU['score']<=21){
        if(DEALER['score']>21 || (DEALER['score'] < YOU['score'])){
            blackjack_game['wins']++;
            winner = YOU;
        }else if(DEALER['score'] === YOU['score']){
            blackjack_game['draws']++;
            // console.log("tie");
        }else{
            blackjack_game['losses']++;
            winner = DEALER;
        }
    }else if(YOU['score']>21 && DEALER['score']<=21){
        blackjack_game['losses']++;
        winner = DEALER;
    }else if(YOU['score']>21 && DEALER['score']>21){
        blackjack_game['draws']++;
        // console.log("tie");
    }

    // console.log("winner is", winner);
    return winner;
}

function show_winner(winner){
    let message, message_color;
    if(blackjack_game['turns_over'] === true){
        if(winner === YOU){
            message = "YOU WON!";
            message_color = "green";
            won_sound.play();
        }else if(winner === DEALER){
            message = "YOU LOST!";
            message_color = "red";
            lost_sound.play();
        }else{
            message = "YOU TIED!";
            message_color = "orange";
        }
    
        document.querySelector("#blackjack-result").textContent = message;
        document.querySelector("#blackjack-result").style.color = message_color;
    
        document.querySelector("#wins").textContent = blackjack_game['wins'];
        document.querySelector("#losses").textContent = blackjack_game['losses'];
        document.querySelector("#draws").textContent = blackjack_game['draws'];
    
    }
}
