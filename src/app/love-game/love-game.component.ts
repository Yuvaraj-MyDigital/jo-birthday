import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';

interface Scenario {
  text: string; // The heartfelt description for Joshika to read
  feedback: string; // Lovely follow-up message
}

@Component({
  selector: 'app-love-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './love-game.component.html',
  styleUrls: ['./love-game.component.css']
})
export class LoveGameComponent {
  constructor(private gameService: GameService) {

  }

  scenarios: Scenario[] = [
    {
      text: "Joshika, I remember your face and eyes always. Time stood still. Your smile—it was like the dawn breaking over a dark sky. The blishful moments in my life  forever. From friends to something more, every word we exchanged wove us closer. Do you remember how easily we could talk for hours? How your laugh felt like the sweetest melody I’d ever heard?",
      feedback: "You didn’t just walk into my life, Joshika—you became it. Each moment with you was a gift, every conversation a treasure, and I knew, even then, that my heart was yours."
    },
    {
      text: "Joshika, close your eyes and imagine this: a quiet beach, where the waves gently kiss the shore. As the breeze brushes past, I sit there, lost in thought, writing your name in the sand. Every wave whispers your name to me. Your voice, your laughter, your eyes—they are etched in my soul. You are my poetry, the ink that fills my empty pages.",
      feedback: "When I think of beauty, I think of you. Your eyes outshine the stars, your smile lights up my darkest nights, and your presence is my safe haven. You are my forever muse, Joshika."
    },
    {
      text: "Joshika, imagine a garden, filled with flowers of every color. Among them, one stands out—a single, radiant rose. That’s you, Joshika. You stand out in a crowd, your grace unmatched, your kindness unparalleled. When I see you, it feels like the world fades, leaving only you. And I? I’m just a butterfly, drawn irresistibly to your beauty, fluttering around you, captivated by your charm.",
      feedback: "Your presence is a symphony, Joshika. Every note is perfect, every moment magical. Loving you feels like finding a rare gem, one I’ll cherish forever."
    },
    {
      text: "Do you remember the times we stayed up late, talking about everything and nothing? The moments we shared, the memories we built—they are my most precious treasures. Each one is a piece of my heart, a chapter in the story of us. Joshika, this journey we’ve shared has been my greatest blessing. You’ve shown me what love truly means, and for that, I’m forever grateful.",
      feedback: "Joshika, you are my home, my peace, my joy. Every step we’ve taken together has brought me closer to the realization that life without you is unimaginable."
    },
    {
      text: "Joshika, the stars above could never shine as brightly as you do in my heart. Tonight, under this infinite sky, I stand here, ready to make the biggest promise of my life. I kneel before you, holding a small box that contains more than a ring—it holds my heart, my soul, my everything. As I look into your eyes, I see my forever. Joshika",
      feedback: "You are my universe, Joshika. My life began the day you entered it, and I want to spend every moment of my future loving you."
    }
  ];
  

  currentScenarioIndex = 0;
  showFeedback = false;
  showProposal = false;

  ngOnInit() {
    this.loadNextScenario();
  }

  nextStep() {
    if (this.showFeedback) {
      this.showFeedback = false;

      if (this.currentScenarioIndex < this.scenarios.length - 1) {
        this.currentScenarioIndex++;
        this.loadNextScenario();
      } else {
        this.showProposal = true;
      }
    } else {
      this.showFeedback = true;
    }
  }

  loadNextScenario() {
    this.showFeedback = false;
  }
  nextGame() {
    this.gameService.triggerCatchNext(); // Emit the event
  }
}
