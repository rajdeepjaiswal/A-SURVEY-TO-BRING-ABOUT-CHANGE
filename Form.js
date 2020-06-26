class Form{
    constructor(){
        this.greeting = createElement('h2');
        this.input = createInput("");
        this.input.style('width', '160px');
        this.email = createInput("");
        this.email.style('width', '160px');
        this.button = createButton('Submit'); 
        this.title = createElement('h2');
        this.name = createElement('h4');
        this.emailinput = createElement('h4');
        this.reset = createButton('Reset');


        this.button.style('width','100px');
        this.button.style('height','40px');
        this.button.style('background','lavender');

        this.reset.style('width','100px');
        this.reset.style('height','40px');
        this.reset.style('background','lavender');

        //question 1
        this.question1 = createElement('h4', "Q1. Do you have your own houses?");
        this.radio = createRadio('h4');
        this.radio.option('YES');
        this.radio.option('NO');
        this.radio.option('Maybe');
        this.radio.style('width', '60px');

        //question 2
        this.question2 = createElement('h4', "Q2. Can you afford two meals a day?");
        this.radio1 = createRadio('h5');
        this.radio1.option('YES');
        this.radio1.option('NO');
        this.radio1.option('Maybe');
        this.radio1.style('width', '60px');

        //question 3
        this.question3 = createElement('h4', "Q3. Do you have water supply at home?");
        this.radio2 = createRadio('h5');
        this.radio2.option('YES');
        this.radio2.option('NO');
        this.radio2.option('Maybe');
        this.radio2.style('width', '60px');

        //question 4
        this.question4 = createElement('h4', "Q4. Do you have electric supply at home?");
        this.radio3 = createRadio('h5');
        this.radio3.option('YES');
        this.radio3.option('NO');
        this.radio3.option('Maybe');
        this.radio3.style('width', '60px');

        //question 5
        this.question5 = createElement('h4', "Q5. Do you have a job?");
        this.radio4 = createRadio('h4');
        this.radio4.option('YES');
        this.radio4.option('NO');
        this.radio4.option('Maybe');
        this.radio4.style('width', '60px');

        //question 6
        this.question6 = createElement('h4', "Q6. If you had a chance to help poors,will you help?");
        this.radio5 = createRadio('h4');
        this.radio5.option('YES');
        this.radio5.option('NO');
        this.radio5.option('Maybe');
        this.radio5.style('width', '60px');
        //question 7
        this.question7 = createElement('h4', "Q7. Your child goes to school ?");
        this.radio6 = createRadio('h4');
        this.radio6.option('YES');
        this.radio6.option('NO');
        this.radio6.option('Maybe');
        this.radio6.style('width', '60px');
        //question 8
        this.question8 = createElement('h4', "Q8. Do you make your family happy");
        this.radio7 = createRadio('h4');
        this.radio7.option('YES');
        this.radio7.option('NO');
        this.radio7.option('Maybe');
        this.radio7.style('width', '60px');

        this.description = createInput("Please add your comments here.");
        this.description.style('width','420px');
        this.description.style('height','100px');
        this.desc= createElement('h4',"ADDITIONAL COMMENTS");

        

        
    }
    display(){
        this.title.html("Survey For Poor People");
        this.title.position(displayWidth/2 + 50 ,20);
        this.name.html("Your Name");
        this.name.position(displayWidth/2 + 50 ,125);
        this.input.position(displayWidth/2 + 300 , 155);
        this.emailinput.html("Your Email");
        this.emailinput.position(displayWidth/2 + 50 ,200);
        this.email.position(displayWidth/2 + 300 ,225);
        this.button.position(displayWidth/2 + 0, displayHeight+300);
        this.reset.position(displayWidth/2 + 200, displayHeight +300);

        this.question1.position(displayWidth/2-100, 300);
        this.radio.position(displayWidth/2 +0, 340);
        
        this.question2.position(displayWidth/2-100, 400);
        this.radio1.position(displayWidth/2 +0, 440);

        this.question3.position(displayWidth/2-100, 500);
        this.radio2.position(displayWidth/2 +0, 540);

        this.question4.position(displayWidth/2-100, 600);
        this.radio3.position(displayWidth/2 +0, 640);

        this.question5.position(displayWidth/2-100, 700);
        this.radio4.position(displayWidth/2 +0, 740);

        this.question6.position(displayWidth/2-100, 800);
        this.radio5.position(displayWidth/2 +0, 840);

        this.question7.position(displayWidth/2-100, 900);
        this.radio6.position(displayWidth/2 +0, 940);

        this.question8.position(displayWidth/2-100, 1000);
        this.radio7.position(displayWidth/2 +0, 1040);

        this.desc.position(displayWidth/2-100,1200);

        this.description.position(displayWidth/2 +30,1250);
        this.description.style('color', 'rgb(237, 227, 227)');
        this.description.style('font-size', '20px');

       

        this.button.mousePressed(() => {
         
            this.greeting.show();
            this.description.hide();
            this.greeting.html("Thanks for your Submisssion!!");
            this.greeting.position(displayWidth/2 +30,1250);
            this.greeting.style('width', '440px');
            this.greeting.style('height', '100px');
            this.greeting.style('background','lavender');
            this.greeting.style('padding','10px');
            //User.getCount();
            User.input = this.input.value();
            User.email = this.email.value();
            User.radio= this.radio.value();
            User.radio1= this.radio1.value();
            User.radio2= this.radio2.value();
            User.radio3= this.radio3.value();
            User.radio4= this.radio.value();
            User.radio5= this.radio.value();
            User.radio6= this.radio.value();
            User.radio7= this.radio.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
            

            
        });
        this.reset.mousePressed(() => { 
          this.greeting.hide();
          this.description.show();
          this.input.value('');
          this.email.value('');
          this.radio.value();
          this.radio1.value();
          this.radio2.value();
          this.radio3.value();
          this.radio4.value();
          this.radio5.value();
          this.radio6.value();
          this.radio7.value();
        });    
    }
}