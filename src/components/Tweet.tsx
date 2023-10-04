import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';

import './Tweet.css';

interface tweetProps {
  content: string;
}

export function Tweet(props: tweetProps) {
  return (
    <Link to="/status" className="tweet">
    <img src="https://github.com/jjr17.png" alt="Juarez Junior" />

    <div className="tweet-content">
      <div className="tweet-content-header">
        <strong>Juarez Junior</strong>
        <span>@jjr_7</span>
      </div>

      <p>{props.content}</p>

      <div className="tweet-content-footer">
        <button type="button">
          <ChatCircle />
          20
        </button>

        <button type="button">
          <ArrowsClockwise />
          20
        </button>

        <button type="button">
          <Heart />
          20
        </button>
      </div>
    </div>
  </Link>
  );
  
}