'use strict';

const videoPlayer = document.getElementById('episode-player');
const episodesContainer = document.querySelector('.episodes-container');
const episodes = document.querySelectorAll('.episode');
const playBtn = document.querySelector('.btn--play');
const videos = [
  'https://www.youtube.com/embed/GuIvzozPVak?start=2',
  'https://www.youtube.com/embed/SGoE-OLKUzg?start=2',
  'https://www.youtube.com/embed/hdJbfJ9IF80?start=2',
  'https://www.youtube.com/embed/3JwvxvIApEM?start=2',
  'https://www.youtube.com/embed/ET3htZ0wKpM?start=2',
  'https://www.youtube.com/embed/EEfn-6M1GhQ?start=2',
  'https://www.youtube.com/embed/tg2Wm1NKwt8?start=2',
  'https://www.youtube.com/embed/ncHi3Nfd1r4?start=2',
  'https://www.youtube.com/embed/qM4MIa16iUQ?start=2',
  'https://www.youtube.com/embed/wMYgAwLne3I?start=2',
  'https://www.youtube.com/embed/i4nEx84e-K8?start=2',
  'https://www.youtube.com/embed/kgR-HOs_8s0?start=2',
  'https://www.youtube.com/embed/ks4s9rB6aqA?start=2',
];

// making the button appear on the episode we hovered on
episodesContainer.addEventListener('mouseover', e => {
  const hovered = e.target.closest('.episode');

  if (!hovered) return;

  const hoveredRelBtn = hovered.querySelector('.btn--play');

  episodes.forEach(ep => ep.classList.remove('active'));
  hovered.classList.add('active');

  // making the buttons opacity change when hovering on it
  hoveredRelBtn.addEventListener('mouseover', e => {
    e.target.closest('.btn--play').classList.add('active');
  });

  hoveredRelBtn.addEventListener('mouseout', e => {
    e.target.closest('.btn--play').classList.remove('active');
  });
});

// making the buttons disappear when we leave the container
episodesContainer.addEventListener('mouseleave', () => {
  episodes.forEach(ep => {
    ep.classList.remove('active');
    ep.querySelector('.btn--play').classList.remove('active');
  });
});

// playing the clicked episodes related video in the player window
episodesContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.episode');

  if (!clicked) return;

  videoPlayer.src = videos[[...episodes].indexOf(clicked)];
});
