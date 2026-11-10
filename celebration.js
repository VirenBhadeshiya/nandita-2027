/**
 * @license
 * NANDITA JAYSWAL — HAPPY NEW YEAR 2027
 * Cinematic Celebration Engine — Velvet Friendship Theme & Romantic Audio Synthesizer
 */

(function () {
  'use strict';

  // ==========================================================================
  // Theme Management (Velvet Twilight Dark / Cashmere Pearl Light)
  // ==========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem('theme_preference') || 'dark';
    const isLight = savedTheme === 'light';
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }

    const themeBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeBtnIcon');
    const themeLabel = document.getElementById('themeBtnLabel');

    function updateThemeUI(light) {
      if (!themeBtn) return;
      if (light) {
        if (themeIcon) themeIcon.textContent = '☀️';
        if (themeLabel) themeLabel.textContent = 'LIGHT';
        themeBtn.setAttribute('aria-label', 'Switch to dark theme');
      } else {
        if (themeIcon) themeIcon.textContent = '🌙';
        if (themeLabel) themeLabel.textContent = 'DARK';
        themeBtn.setAttribute('aria-label', 'Switch to light theme');
      }
    }

    updateThemeUI(isLight);

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const currentlyLight = document.documentElement.classList.contains('light');
        const nextLight = !currentlyLight;
        if (nextLight) {
          document.documentElement.classList.add('light');
          localStorage.setItem('theme_preference', 'light');
        } else {
          document.documentElement.classList.remove('light');
          localStorage.setItem('theme_preference', 'dark');
        }
        updateThemeUI(nextLight);
      });
    }
  }

  initTheme();

  // ==========================================================================
  // Emotional Love & New Year Piano Instrumental Synthesizer
  // ==========================================================================
  class RomanticNewYearAudioEngine {
    constructor() {
      this.ctx = null;
      this.masterGain = null;
      this.isPlaying = false;
      this.intervalId = null;

      // Heartfelt ballad chords: Dmaj9 -> A/C# -> Bm9 -> Gmaj9
      this.chords = [
        { root: 73.42, pad: [146.83, 220.0, 277.18, 329.63] }, // Dmaj9
        { root: 69.30, pad: [138.59, 220.0, 277.18, 329.63] }, // A/C#
        { root: 61.74, pad: [123.47, 185.0, 220.0, 293.66] },  // Bm9
        { root: 49.00, pad: [98.0, 146.83, 196.0, 293.66] }    // Gmaj9
      ];

      // Soulful romantic piano melody steps
      this.melody = [
        { note: 369.99, delay: 0, dur: 1.2 },    // F#4
        { note: 440.0, delay: 280, dur: 1.0 },   // A4
        { note: 587.33, delay: 560, dur: 1.8 },  // D5
        { note: 554.37, delay: 920, dur: 1.4 },  // C#5
        { note: 440.0, delay: 1200, dur: 1.2 },  // A4

        { note: 329.63, delay: 1400, dur: 1.2 }, // E4
        { note: 440.0, delay: 1680, dur: 1.0 },  // A4
        { note: 554.37, delay: 1960, dur: 1.8 }, // C#5
        { note: 493.88, delay: 2320, dur: 1.4 }, // B4
        { note: 440.0, delay: 2600, dur: 1.2 },  // A4

        { note: 293.66, delay: 2800, dur: 1.2 }, // D4
        { note: 369.99, delay: 3080, dur: 1.0 }, // F#4
        { note: 493.88, delay: 3360, dur: 1.8 }, // B4
        { note: 440.0, delay: 3720, dur: 1.4 },  // A4
        { note: 369.99, delay: 4000, dur: 1.2 }, // F#4

        { note: 392.0, delay: 4200, dur: 1.2 },  // G4
        { note: 493.88, delay: 4480, dur: 1.0 }, // B4
        { note: 587.33, delay: 4760, dur: 1.6 }, // D5
        { note: 659.25, delay: 5120, dur: 1.6 }, // E5
        { note: 739.99, delay: 5400, dur: 2.2 }  // F#5
      ];
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playPianoNote(freq, timeOffset, duration, vol = 0.08) {
      if (!this.ctx || !this.isPlaying) return;
      const startTime = this.ctx.currentTime + timeOffset;

      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, startTime);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2, startTime);
      osc2.detune.setValueAtTime(4, startTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1600, startTime);
      filter.frequency.exponentialRampToValueAtTime(700, startTime + duration);

      noteGain.gain.setValueAtTime(0.0001, startTime);
      noteGain.gain.linearRampToValueAtTime(vol, startTime + 0.015);
      noteGain.gain.exponentialRampToValueAtTime(vol * 0.45, startTime + 0.15);
      noteGain.gain.exponentialRampToValueAtTime(0.00001, startTime + duration);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc1.start(startTime);
      osc2.start(startTime);
      osc1.stop(startTime + duration + 0.1);
      osc2.stop(startTime + duration + 0.1);
    }

    playStringsChord(chord, timeOffset, duration = 3.8) {
      if (!this.ctx || !this.isPlaying) return;
      const startTime = this.ctx.currentTime + timeOffset;

      chord.pad.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, startTime);
        osc.detune.setValueAtTime((idx % 2 === 0 ? 5 : -5), startTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(650, startTime);
        filter.Q.setValueAtTime(1.2, startTime);

        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.linearRampToValueAtTime(0.035 / (idx + 1), startTime + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start(startTime);
        osc.stop(startTime + duration + 0.2);
      });

      const bassOsc = this.ctx.createOscillator();
      const bassGain = this.ctx.createGain();
      bassOsc.type = 'sine';
      bassOsc.frequency.setValueAtTime(chord.root, startTime);

      bassGain.gain.setValueAtTime(0.0001, startTime);
      bassGain.gain.linearRampToValueAtTime(0.06, startTime + 0.1);
      bassGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      bassOsc.connect(bassGain);
      bassGain.connect(this.masterGain);

      bassOsc.start(startTime);
      bassOsc.stop(startTime + duration + 0.2);
    }

    playMusicBoxChime(freq, timeOffset) {
      if (!this.ctx || !this.isPlaying) return;
      const startTime = this.ctx.currentTime + timeOffset;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.05, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.00001, startTime + 2.2);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(startTime);
      osc.stop(startTime + 2.3);
    }

    playWishBurstSound() {
      this.init();
      const now = this.ctx.currentTime;
      // Romantic ascending harp glissando
      const chord = [293.66, 369.99, 440.0, 554.37, 659.25, 739.99, 880.0, 1108.73, 1318.51];
      chord.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.065);

        gain.gain.setValueAtTime(0.0001, now + i * 0.065);
        gain.gain.exponentialRampToValueAtTime(0.07, now + i * 0.065 + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.00001, now + i * 0.065 + 2.2);

        osc.connect(gain);
        gain.connect(this.masterGain || this.ctx.destination);

        osc.start(now + i * 0.065);
        osc.stop(now + i * 0.065 + 2.3);
      });
    }

    start() {
      this.init();
      this.isPlaying = true;
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.linearRampToValueAtTime(0.38, now + 1.8);

      const playPhrase = () => {
        if (!this.isPlaying) return;

        this.playStringsChord(this.chords[0], 0, 3.8);
        this.playStringsChord(this.chords[1], 1.4, 3.8);
        this.playStringsChord(this.chords[2], 2.8, 3.8);
        this.playStringsChord(this.chords[3], 4.2, 4.0);

        this.melody.forEach((item) => {
          this.playPianoNote(item.note, item.delay / 1000, item.dur, 0.08);
        });

        this.playMusicBoxChime(880.0, 1.2);
        this.playMusicBoxChime(1108.73, 2.6);
        this.playMusicBoxChime(1318.51, 4.0);
        this.playMusicBoxChime(1479.98, 5.2);
      };

      playPhrase();
      this.intervalId = setInterval(playPhrase, 5800);

      try {
        sessionStorage.setItem('ambient_music_enabled', 'true');
      } catch (e) {}
    }

    stop() {
      this.isPlaying = false;
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      if (this.ctx && this.masterGain) {
        const now = this.ctx.currentTime;
        this.masterGain.gain.cancelScheduledValues(now);
        this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 1.2);
      }
      try {
        sessionStorage.setItem('ambient_music_enabled', 'false');
      } catch (e) {}
    }

    toggle() {
      if (this.isPlaying) {
        this.stop();
        return false;
      } else {
        this.start();
        return true;
      }
    }
  }

  const audio = new RomanticNewYearAudioEngine();

  // ==========================================================================
  // Realistic Canvas Fireworks Simulation (Tap to Cracker Removed)
  // ==========================================================================
  const canvas = document.getElementById('fireworksCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = 1;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    window.addEventListener('resize', resize);
    resize();

    // Palettes for Velvet Twilight and Cashmere Pearl
    const DARK_PALETTE = ['#FFF8F2', '#E8A5B8', '#F3D39B', '#B5A1E8', '#FFD1DC', '#FFE6AA'];
    const LIGHT_PALETTE = ['#B84D6C', '#9E7428', '#6B55A8', '#D4728C', '#C29845', '#8C3D56'];

    let fireworks = [];
    let particles = [];
    const MAX_PARTICLES = 320;

    class Rocket {
      constructor(startX, startY, targetX, targetY, type = 'chrysanthemum') {
        this.x = startX;
        this.y = startY;
        this.startX = startX;
        this.startY = startY;
        this.targetX = targetX;
        this.targetY = targetY;
        this.distanceToTarget = Math.hypot(targetX - startX, targetY - startY);
        this.distanceTraveled = 0;
        this.coordinates = [];
        this.coordinateCount = 3;
        while (this.coordinateCount--) {
          this.coordinates.push([this.x, this.y]);
        }
        this.angle = Math.atan2(targetY - startY, targetX - startX);
        this.speed = 3.2;
        this.acceleration = 1.04;
        this.type = type;
        const isLight = document.documentElement.classList.contains('light');
        const pal = isLight ? LIGHT_PALETTE : DARK_PALETTE;
        this.color = pal[Math.floor(Math.random() * pal.length)];
      }

      update(index) {
        this.coordinates.pop();
        this.coordinates.unshift([this.x, this.y]);

        this.speed *= this.acceleration;
        const vx = Math.cos(this.angle) * this.speed;
        const vy = Math.sin(this.angle) * this.speed;

        this.distanceTraveled = Math.hypot(this.x - this.startX, this.y - this.startY);

        if (this.distanceTraveled >= this.distanceToTarget || this.speed > 28) {
          createExplosion(this.targetX, this.targetY, this.type);
          fireworks.splice(index, 1);
        } else {
          this.x += vx;
          this.y += vy;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2.2;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.stroke();
      }
    }

    class Particle {
      constructor(x, y, color, type = 'chrysanthemum') {
        this.x = x;
        this.y = y;
        this.coordinates = [];
        this.coordinateCount = type === 'willow' ? 6 : 4;
        while (this.coordinateCount--) {
          this.coordinates.push([this.x, this.y]);
        }
        this.angle = Math.random() * Math.PI * 2;
        this.type = type;

        if (type === 'chrysanthemum') {
          this.speed = Math.random() * 6.5 + 1.5;
          this.friction = 0.94;
          this.gravity = 0.85;
          this.decay = Math.random() * 0.016 + 0.012;
        } else if (type === 'champagne') {
          this.speed = Math.random() * 8.0 + 2.0;
          this.friction = 0.92;
          this.gravity = 0.7;
          this.decay = Math.random() * 0.025 + 0.018;
        } else if (type === 'willow') {
          this.speed = Math.random() * 4.5 + 1.0;
          this.friction = 0.96;
          this.gravity = 0.5;
          this.decay = Math.random() * 0.009 + 0.007;
        } else {
          this.speed = Math.random() * 5.5 + 1.2;
          this.friction = 0.95;
          this.gravity = 0.75;
          this.decay = Math.random() * 0.018 + 0.014;
        }

        this.alpha = 1;
        this.color = color;
        this.flicker = Math.random() > 0.3;
        this.size = Math.random() * 2.0 + 1.0;
      }

      update(index) {
        this.coordinates.pop();
        this.coordinates.unshift([this.x, this.y]);

        this.speed *= this.friction;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed + this.gravity;
        this.alpha -= this.decay;

        if (this.alpha <= this.decay) {
          particles.splice(index, 1);
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = this.color;
        let currentAlpha = this.alpha;
        if (this.flicker && Math.random() > 0.4) {
          currentAlpha = Math.random() * this.alpha;
        }
        ctx.globalAlpha = Math.max(0.01, currentAlpha);
        ctx.lineWidth = this.size;
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        ctx.stroke();
        ctx.restore();
      }
    }

    function createExplosion(x, y, type) {
      const isLight = document.documentElement.classList.contains('light');
      const pal = isLight ? LIGHT_PALETTE : DARK_PALETTE;
      const particleCount = type === 'finale' ? 80 : 50;
      const baseColor = pal[Math.floor(Math.random() * pal.length)];

      if (particles.length > MAX_PARTICLES) {
        particles.splice(0, 30);
      }

      for (let i = 0; i < particleCount; i++) {
        const color = Math.random() > 0.4 ? baseColor : pal[Math.floor(Math.random() * pal.length)];
        particles.push(new Particle(x, y, color, type));
      }

      if (type === 'finale') {
        setTimeout(() => {
          for (let j = 0; j < 30; j++) {
            particles.push(new Particle(x, y, isLight ? '#B84D6C' : '#E8A5B8', 'champagne'));
          }
        }, 120);
      }
    }

    function launchFirework(targetX, targetY, type) {
      const startX = targetX + (Math.random() - 0.5) * 60;
      const startY = height + 10;
      fireworks.push(new Rocket(startX, startY, targetX, targetY, type));
    }

    const FIREWORK_TYPES = ['chrysanthemum', 'champagne', 'willow'];

    function scheduleAutoFireworks() {
      const randX = width * (0.15 + Math.random() * 0.7);
      const randY = height * (0.15 + Math.random() * 0.45);
      const randType = FIREWORK_TYPES[Math.floor(Math.random() * FIREWORK_TYPES.length)];

      launchFirework(randX, randY, randType);

      if (Math.random() > 0.6) {
        setTimeout(() => {
          launchFirework(randX + (Math.random() > 0.5 ? 100 : -100), randY + (Math.random() - 0.5) * 40, 'champagne');
        }, 280);
      }

      const nextDelay = Math.random() * 1800 + 1300;
      setTimeout(scheduleAutoFireworks, nextDelay);
    }

    setTimeout(scheduleAutoFireworks, 800);

    // NOTE: Tap anywhere to launch firework has been removed.

    function render() {
      const isLight = document.documentElement.classList.contains('light');
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = isLight ? 'rgba(250, 247, 245, 0.28)' : 'rgba(9, 6, 16, 0.22)';
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = isLight ? 'source-over' : 'lighter';

      for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].draw();
        fireworks[i].update(i);
      }

      for (let j = particles.length - 1; j >= 0; j--) {
        particles[j].draw();
        particles[j].update(j);
      }

      requestAnimationFrame(render);
    }

    render();

    window.launchGrandFinale = function () {
      const centerX = width * 0.5;
      const centerY = height * 0.32;
      launchFirework(centerX, centerY, 'finale');
      setTimeout(() => {
        launchFirework(centerX - 120, centerY + 25, 'willow');
        launchFirework(centerX + 120, centerY + 25, 'champagne');
      }, 320);
    };
  }

  // ==========================================================================
  // DOM Interactions & Wish Handling
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    const audioBtn = document.getElementById('audioToggleBtn');
    const audioLabel = document.getElementById('audioBtnLabel');

    function updateAudioUI(playing) {
      if (!audioBtn) return;
      if (playing) {
        audioBtn.classList.add('playing');
        if (audioLabel) audioLabel.textContent = 'MUSIC: ON';
        audioBtn.setAttribute('aria-label', 'Pause background music');
      } else {
        audioBtn.classList.remove('playing');
        if (audioLabel) audioLabel.textContent = 'ENABLE MUSIC ♫';
        audioBtn.setAttribute('aria-label', 'Enable background music');
      }
    }

    if (audioBtn) {
      audioBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isNowPlaying = audio.toggle();
        updateAudioUI(isNowPlaying);
      });
    }

    try {
      if (sessionStorage.getItem('ambient_music_enabled') === 'true') {
        const resumeOnFirstTouch = () => {
          if (!audio.isPlaying) {
            audio.start();
            updateAudioUI(true);
          }
          document.removeEventListener('click', resumeOnFirstTouch);
          document.removeEventListener('touchstart', resumeOnFirstTouch);
        };
        document.addEventListener('click', resumeOnFirstTouch, { once: true });
        document.addEventListener('touchstart', resumeOnFirstTouch, { once: true, passive: true });
      }
    } catch (e) {}

    // Make A Wish Button
    const wishBtn = document.getElementById('makeWishBtn');
    const wishToast = document.getElementById('wishToast');

    if (wishBtn) {
      wishBtn.addEventListener('click', () => {
        if (typeof window.launchGrandFinale === 'function') {
          window.launchGrandFinale();
        }

        audio.playWishBurstSound();

        if (wishToast) {
          wishToast.classList.add('active');
          wishBtn.style.transform = 'scale(0.96)';
          setTimeout(() => {
            wishBtn.style.transform = '';
          }, 250);

          clearTimeout(window.wishTimeout);
          window.wishTimeout = setTimeout(() => {
            wishToast.classList.remove('active');
          }, 7500);
        }
      });
    }

    // Two Guiding Stars interaction
    const stage = document.querySelector('.twin-lights-interactive-stage');
    if (stage) {
      stage.addEventListener('pointerdown', () => {
        audio.playMusicBoxChime(880.0, 0);
        setTimeout(() => audio.playMusicBoxChime(1108.73, 0), 180);
      });
    }
  });
})();
