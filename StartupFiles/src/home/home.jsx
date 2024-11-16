import React from 'react';
import '../app.css';

export function Home() {
    const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');

    React.useEffect(() => {
        setImageUrl('exercise_holder_image.jpg')
    })
    return (
        <main>
            <h2>Welcome to Your Fitness Tracker</h2>
            <br />
            <img src={imageUrl} width="700" />
            <br />
            <p class="paragraph-element">
                Exercise is a crucial aspect to the quality and longevity of ones life, and both setting and tracking goals are impactful ways of helping people to take their health to the next level. The goal of this startup is to create an easy way for people to record their goals, and the progress they've made in achieving them. We want to create a community where you can track your progress, while following the progress of others, so that together we can enjoy our lives to the fullest.
            </p>
        </main>
      );
}