particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

const instance = new Typewriter('#typewriter', {
    loop: true
});

const helloWorld = "Hey there, I'm Yashwin!";

instance.typeString(helloWorld)
    .pauseFor(1000)
    .deleteAll()
    .typeString('I am a self-taught full stack developer 🤓')
    .pauseFor(1000)
    .deleteAll()
    .typeString('❤️ => React-Redux | Javascript | Java | Unit Testing')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Algorithms & DS | Cloud Computing | Web Development | Distributed Systems')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Check out my work at<br>github.com/Yashwin12')
    .pauseFor(1000)
    .deleteAll()
    .start();
