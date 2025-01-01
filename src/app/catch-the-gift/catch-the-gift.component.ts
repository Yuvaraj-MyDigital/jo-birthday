import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';


@Component({
  selector: 'app-catch-the-gift',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catch-the-gift.component.html',
  styleUrls: ['./catch-the-gift.component.css'],
})
export class CatchTheGiftComponent implements OnInit {
  constructor(private gameService: GameService) {}
  questions = [
    {
      question: 'Where did we meet?',
      options: ['Instagram', 'College', 'School', 'Facebook'],
      answer: 'Instagram',
    },
    {
      question: 'What does joshika more has ?',
      options: ['Thimuru', 'Ego', 'Kindness', 'Love'],
      answer: 'Thimuru',
    },
    {
      question: 'When was our first phone call ?',
      options: ['Jan 4', 'Sep 13', 'June 5', 'Sep 12'],
      answer: 'Sep 12',
    },
    {
      question: "What does joel's  favorite of joshika?",
      options: ['Kindness', 'Attitude', 'Personality', 'Thimuru','Joshika'],
      answer: 'Joshika',
    },    {
      question: "What does Could be the joey's favour while meet you first  ",
      options: ['Giving u gift', 'Shake hands', 'Get U Flower', 'Have a hug','Ego'],
      answer: 'Get U Flower',
    },
   {
      question: "What was our longest night we talked together in (hrs)",
      options: ['2', '3', '4', '1','Lets make a day 😘 '],
      answer: '4',
    },{
      question: "What does yuvaraj admire you from ?",
      options: ['Privacy', 'Limiting With Boundaries', 'Boldness', 'Make Decision','Matter that  Matters','Joshika'],
      answer: 'Joshika',
    },
    {
      question: "What makes this moment with you, on your special day, the most unforgettable for Yuvaraj?",
      options: [
        'The way your smile lights up the entire world ✨',
        'Every word you speak feels like poetry to his heart 💖',
        'The warmth of your love that fills every space around him 💫',
        'How every second with you feels like a beautiful eternity ⏳',
        'When everything about you makes time stand still, leaving only the magic of now 🌹'
      ],
      answer: 'When everything about you makes time stand still, leaving only the magic of now 🌹',
    }
    ,{
      question: "Can I take u for the date ?",
      options: ['Yes'],
      answer: 'Yes',
    },{
      question: "Can I buy u Jhumka again",
      options: ['Yes'],
      answer: 'Yes',
    },{
      question: "Who is the Yuvaraj's Hearbeat",
      options: ['You'],
      answer: 'You',
    },{
      question: "Who holds the key to Yuvaraj's heart, forever and always?",
      options: ['You'],
      answer: 'You',
    },{
      question: "Who is the one that has captured Yuvaraj's heart completely?",
      options: ['You', 'Your smile', 'Your kindness', 'Your love'],
      answer: 'You',
    },{
      question: "What does Yuvaraj find absolutely irresistible about you?",
      options: [
        'Your sweet smile that melts hearts 💕',
        'The way you laugh, it’s music to his ears 🎶',
        'Your adorable quirks that make him smile all day 😊',
        'The way you always know how to make him blush 😘'
      ],
      answer: 'The way you always know how to make him blush 😘',
    },    
    {
      question: "I Love ",
      options: ['You'],
      answer: 'You',
    }
  ];
  currentQuestionIndex = 0;
  selectedAnswer: string = '';
  answerStatus: 'correct' | 'incorrect' | null = null; // To store the answer status
  gameOver: boolean = false;
  message: string = '';
  showAnswerFeedback: boolean = false; // Flag to control feedback display

  ngOnInit(): void {}

  selectAnswer(option: string) {
    this.selectedAnswer = option;

    // Check if the answer is correct or incorrect
    if (option === this.questions[this.currentQuestionIndex].answer) {
      this.answerStatus = 'correct';
    } else {
      this.answerStatus = 'incorrect';
    }

    // Show feedback (correct/incorrect)
    this.showAnswerFeedback = true;

    // After 2-3 seconds, go to the next question
    setTimeout(() => {
      this.nextQuestion();
    }, 2000); // Delay of 2 seconds
  }

  nextQuestion() {
    // Move to next question or end the game
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.showAnswerFeedback = false; // Hide feedback for the next question
      this.selectedAnswer = ''; // Reset selected answer
      this.answerStatus = null; // Reset answer status
    } else {
      this.endGame();
    }
  }

  endGame() {
    this.gameOver = true;
    this.message = `Game Over! Thanks for loving.`;
  }

  restartGame() {
    this.gameOver = false;
    this.currentQuestionIndex = 0;
    this.selectedAnswer = '';
    this.answerStatus = null;
    this.showAnswerFeedback = false;
  }
  nextGame() {
    this.gameService.triggerCatchNext(); // Emit the event
  }
}
