import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css'],
})
export class PostComponent {
	tweetMaxLength: number = 240;
	tweetRemain: number = this.tweetMaxLength;
	tweetMessage: string = '';

	constructor(private service: MessagesService) {}

	changeTweet() {
		this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length;
	}

	sendTweet() {
		this.service.addMessage(this.tweetMessage);
		this.tweetMessage = '';
		this.tweetRemain = this.tweetMaxLength;
	}
}
