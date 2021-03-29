let game = {
    run() {
        for(let i = 0; i < questions.length; i++) {
            let answer = +prompt(`Ответьте на вопрос: \n Введите номер ответа или нажмите отмена для выхода.\n ${questions[i]} \n ${answers[i][0]}\n ${answers[i][1]}\n ${answers[i][2]}\n ${answers[i][3]}`);
            if (isNaN(answer)) {
                alert("Нужно вводить номер ответа");
                continue;
            }
            if (answer == 0) {
                break;
            }
            if (answer == rightAnswers[i]) {
                alert("Это правильный ответ.");
                result++;
            } else {
                alert("Это неправильный ответ.");
            }
        }
    },

    init() {
        alert('Добро пожаловать в игру "Кто хочет стать миллионером?".'); 
    },
}

game.init();
game.run();
alert("Игра окончена. Количество правильных ответов: " + result);

if (confirm("Хотите сыграть еще раз?")) {
    game.run();
}
