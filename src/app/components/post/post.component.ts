import { Component } from '@angular/core';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css'],
})
export class PostComponent {
	tweetMaxLength: number = 240;
	tweetRemain: number = this.tweetMaxLength;
	tweetMessage: string = '';

	changeTweet() {
		this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length;
	}

	sendTweet() {
		alert(`twitter criado: ${this.tweetMessage}`);
	}
}
