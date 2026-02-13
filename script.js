// PASSWORD
function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "02082024") {
    document.getElementById("lockscreen").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
    startTyping();
    startRelationshipTimer();
  } else {
    document.getElementById("error").innerText = "Salah sayang 😢";
  }
}

// TYPING
const text = "yayyyy happyy valentinee dayy babyyy sayanggkuuuuu yayy yayyy, i wopyuu babyyy sayanggg muahh eheheheh 💕";
let index = 0;

function startTyping() {
  typeEffect();
}

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

// RELATIONSHIP TIMER
function startRelationshipTimer() {
  const startDate = new Date("2024-08-02T00:00:00");

  setInterval(() => {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("relationshipTime").innerText =
      `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
  }, 1000);
}

// LETTER
function openLetter() {
  document.getElementById("letter").classList.remove("hidden");
  confetti({ particleCount: 200, spread: 100 });
}

function closeLetter() {
  document.getElementById("letter").classList.add("hidden");
}

// LOVE METER
let love = 0;

function increaseLove() {
  if (love < 100) {
    love += 10;
    document.getElementById("loveFill").style.width = love + "%";
    confetti({ particleCount: 50, spread: 70 });
  }
}

// MUSIC PLAYER
// MUSIC PLAYER WITH LYRICS
const songs = [
  {
    title: "Perfect 💖",
    artist: "Ed Sheeran",
    src: "songs/lagu1.mp3",
    lyrics: `I found a love for me
Darling, just dive right in and follow my lead
Well, I found a girl, beautiful and sweet
Oh, I never knew you were the someone waitin' for me

Cause we were just kids when we fell in love
Not knowin' what it was
I will not give you up this time
Darling, just kiss me slow
Your heart is all I own
And in your eyes, you're holdin' mine

Baby, I'm dancin' in the dark
With you between my arms
Barefoot on the grass
Listenin' to our favourite song
When you said you looked a mess
I whispered underneath my breath
But you heard it
Darling, you look perfect tonight

I found a woman
Stronger than anyone I know
She shares my dreams
I hope that someday I'll share her home
I found a love
To carry more than just my secrets
Carry love, to carry children
Of our own

We are still kids and we're so in love
Fightin' against all odds
I know we'll be alright this time
Darling, just hold my hand
Be my girl, I'll be your man
I see my future in your eyes

Baby, I'm dancin' in the dark
With you between my arms
Barefoot on the grass
Listenin' to our favourite song
When I saw you in that dress
Looking so beautiful
I don't deserve this
Darling, you look perfect tonight

Baby, I'm dancin' in the dark
With you between my arms
Barefoot on the grass
Listenin' to our favourite song

I have faith in what I see
Now I know I have met an angel in person
And she looks perfect
Oh, I don't deserve this
You look perfect tonight`
  },
  {
    title: "Angel Numbers 💕",
    artist: "Chris Brown",
    src: "songs/lagu2.mp3",
    lyrics: `I lost my way, somewhere in another galaxy ('xy)
Too much to take, these memories, end in tragedy ('gy)
And all of these places, all of these faces
I didn't wanna let you down (down)
And all these mistakes of mine, I can't replace it
I gotta move on somehow

Healing energy on me
Baby, all I really need's one thing
Healing energy on me
Baby, can you make a wish for me?
Healing energy on me
When it's 11:11, I need it
Healing energy on me
Baby, can you make a wish for me?

11:11, oh
11:11
When it's 11:11, I need it

Anxiety
Don't let the pressure get to your head
You know we play for keeps
Don't let it go over your head

Heavy stepper, I got too much weight on this
You can see the diamonds, don't complain on this (me)
We was hustling, you niggas got no say on this (no)
I'm just being honest
I'm moving steady (shoot)
You can't buy success, ain't got no sale on it
You know that God did, he never gon' fail on us
Too much paper, got me thinking I'ma save all this
I know the opps want it, they love this

Two-tone, got the bussdown like woah (woah)
The streets crazy, they don't love me no more (ooh)
Not one for pressure, but I'll bang for my bros (bros)
Walking in Giuseppe, I be ten on my toes

Welcome all the smoke (smoke, smoke, smoke, ski)
Mama, pray for me, so I won't fold (fold)
Walking ten toes
I be paranoid, but nobody knows (woah)

Anxiety
Don't let the pressure get to your head (head)
You know we play for keeps (for keeps)
Don't let it go over your head

Steady, moving onto greater (ghetto, ghetto)
Never thought that I'd be ready (ready)
She let me, I let her keep her things (keep)
She told me, "Why didn't you just fight for it?"
All these baddies, had too many (many)
I promised that I would have died for it
You just had to fuckin' let me (let me)

Now I'm married to the game, I'm in that
No more chains, I'ma buy me some gold (woah)
Three babies, tryna make room for some more (ooh)
Life learning lessons 'cause you reap what you sow (grow)
Walking in Giuseppe, I be ten on my toes

You know I welcome all the smoke (smoke, smoke, smoke, ski)
Mama, pray for me, so I won't fold (fold)
Walking ten toes (ten toes)
I be stressing out, but nobody knows (yeah, yeah)

Anxiety (anxiety)
Don't let the pressure get to your head (don't let it get to your head)
You know we play for keeps (we play, we play, we play)
Don't let it go over your head (know welcome all the smoke)

Welcome all the smoke (welcome all the smoke, ooh)
Mama, pray for me, so I won't fold (fold)
Walking ten toes (ten toes)
I be paranoid, but nobody knows (yeah)

Anxiety (anxiety, yeah, oh)
Don't let the pressure get to your head (don't let it get to your head, don't let it)
You know we play for keeps (we play, we play, we play, play for keeps)
Don't let it go over your head

Steady (ooh)
Oh-woah
Just fight for it`
  },
  {
    title: "One Call Away ❤️",
    artist: "Charlie Puth",
    src: "songs/lagu3.mp3",
    lyrics: `I'm only one call away
I'll be there to save the day
Superman got nothing on me
I'm only one call away

Call me, baby, if you need a friend
I just wanna give you love
C'mon, c'mon, c'mon
Reaching out to you, so take a chance

No matter where you go
Know you're not alone

I'm only one call away
I'll be there to save the day
Superman got nothing on me
I'm only one call away

Come along with me and don't be scared
I just wanna set you free
C'mon, c'mon, c'mon
You and me can make it anywhere
But for now, we can stay here for a while
'Cause you know, I just wanna see you smile

No matter where you go
You know you're not alone

I'm only one call away
I'll be there to save the day
Superman got nothing on me
I'm only one call away

And when you're weak I'll be strong
I'm gonna keep holding on
Now don't you worry, it won't be long
Darling, and when you feel like hope is gone
Just run into my arms

I'm only one call away
I'll be there to save the day
Superman got nothing on me
I'm only one, I'm only one call away
I'll be there to save the day
Superman got nothing on me
I'm only one call away

I'm only one call away`
  }
];

let songIndex = 0;
let audio = new Audio(songs[songIndex].src);
let isPlaying = false;

const progress = document.getElementById("progress");
const timeDisplay = document.getElementById("timeDisplay");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const lyricsBox = document.getElementById("lyrics");

function loadSong() {
  audio = new Audio(songs[songIndex].src);
  songTitle.innerText = songs[songIndex].title;
  songArtist.innerText = songs[songIndex].artist;
  lyricsBox.innerText = songs[songIndex].lyrics;

  audio.addEventListener("timeupdate", updateProgress);
}

loadSong();

function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
}

function nextSong() {
  audio.pause();
  songIndex = (songIndex + 1) % songs.length;
  loadSong();
  audio.play();
  isPlaying = true;
}

function prevSong() {
  audio.pause();
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong();
  audio.play();
  isPlaying = true;
}

function updateProgress() {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;

  const format = (t) =>
    Math.floor(t / 60) + ":" + String(Math.floor(t % 60)).padStart(2, "0");

  timeDisplay.innerText =
    `${format(audio.currentTime)} / ${format(audio.duration || 0)}`;
}

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// FLOATING HEARTS
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let hearts = [];

function createHearts() {
  hearts = [];
  for (let i = 0; i < 50; i++) {
    hearts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 15 + 5,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random()
    });
  }
}

createHearts();

function drawHeart(x, y, size, opacity) {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = "#ff4e88";

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - size, x - size, y - size, x - size, y);
  ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.5, x, y + size * 2);
  ctx.bezierCurveTo(x, y + size * 1.5, x + size, y + size, x + size, y);
  ctx.bezierCurveTo(x + size, y - size, x, y - size, x, y);

  ctx.fill();
  ctx.restore();
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  hearts.forEach(h => {
    h.y -= h.speed;

    if (h.y < -20) {
      h.y = canvas.height;
      h.x = Math.random() * canvas.width;
    }

    drawHeart(h.x, h.y, h.size, h.opacity);
  });

  requestAnimationFrame(animateHearts);
}

animateHearts();
