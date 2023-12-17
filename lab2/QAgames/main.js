function startGame() {
    let name=prompt("Hi, Say your Name");
    if (name == "") {
        alert("Please Start Again and Say Your Name");
        return;
    }
    alert("Hi, " + name + " please answer the Following Questions");
    age=prompt("How old are you?");
    if (isNaN(age) || age == "") {
        alert("Please Start Again and Say Your Age");
        return;
    }
    age=parseInt(age);
    if (age <= 0) {
        alert("Are you even born yet?");
        return;
    }
    else if(age > 0 && age < 18) {
        alert("Sorry, you are a child!");
        return;
    }
    else {
        alert("Ok! good enough to Complete");
        ans=prompt("Reply by yes or no | do you think programming is good for you?");
        ans = ans.toLowerCase();
        if(ans == "yes") {
            alert(name + ", Sorry to say this but you have Mental Issues 🙂");
        }
        else if (ans == "no" ||ans == "NO" || ans == "No"  ){
            alert("Me too! Thank you for telling us, i will give you something");
            scndans=prompt("Reply with ( advise || info || thanks )");
            scndans = scndans.toLowerCase();
            if (scndans == "advise") {
                alert(name + ", the secret of getting ahead is getting started , so start now 👌");
            }
            else if (scndans == "info") {
                alert("The human heart beats about 100,000 times a day! That means your ticker will beat around 36,500,000 times in a year. Count them if you don't believe us! Yes, we'll wait. 🤷‍♂️")
            }
            else if (scndans == "thanks") {
                alert("Thank you " + name);
            }
            else {
                alert("😒😒😒😒😒😒")
            } 
        }
        else {
            alert("I Said Reply by YES OR NO 😒");
        }
    }
}