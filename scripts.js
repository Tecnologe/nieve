document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.querySelector('.heart-container').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 4 + 2 + 's';
        body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
    setInterval(createSnowflake, 400);
});
