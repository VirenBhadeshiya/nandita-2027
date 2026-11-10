/**
 * @license
 * NANDITA JAYSWAL — HAPPY NEW YEAR 2027
 * Welcome Experience Engine & Romantic Cinematic Instrumental Synthesizer
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
      this.step = 0;

      // Heartfelt ballad chords: Dmaj9 -> A/C# -> Bm9 -> Gmaj9
      this.chords = [
        { root: 73.42, pad: [146.83, 220.0, 277.18, 329.63] }, // Dmaj9
        { root: 69.30, pad: [138.59, 220.0, 277.18, 329.63] }, // A/C#
        { root: 61.74, pad: [123.47, 185.0, 220.0, 293.66] },  // Bm9
        { root: 49.00, pad: [98.0, 146.83, 196.0, 293.66] }    // Gmaj9
      ];

      // Soulful romantic piano melody steps (16-beat loop)
      this.melody = [
        // Measure 1: Dmaj9
        { note: 369.99, delay: 0, dur: 1.2 },    // F#4
        { note: 440.0, delay: 280, dur: 1.0 },   // A4
        { note: 587.33, delay: 560, dur: 1.8 },  // D5
        { note: 554.37, delay: 920, dur: 1.4 },  // C#5
        { note: 440.0, delay: 1200, dur: 1.2 },  // A4

        // Measure 2: A/C#
        { note: 329.63, delay: 1400, dur: 1.2 }, // E4
        { note: 440.0, delay: 1680, dur: 1.0 },  // A4
        { note: 554.37, delay: 1960, dur: 1.8 }, // C#5
        { note: 493.88, delay: 2320, dur: 1.4 }, // B4
        { note: 440.0, delay: 2600, dur: 1.2 },  // A4

        // Measure 3: Bm9
        { note: 293.66, delay: 2800, dur: 1.2 }, // D4
        { note: 369.99, delay: 3080, dur: 1.0 }, // F#4
        { note: 493.88, delay: 3360, dur: 1.8 }, // B4
        { note: 440.0, delay: 3720, dur: 1.4 },  // A4
        { note: 369.99, delay: 4000, dur: 1.2 }, // F#4

        // Measure 4: Gmaj9 (Tender resolution)
        { note: 392.0, delay: 4200, dur: 1.2 },  // G4
        { note: 493.88, delay: 4480, dur: 1.0 }, // B4
        { note: 587.33, delay: 4760, dur: 1.6 }, // D5
        { note: 659.25, delay: 5120, dur: 1.6 }, // E5
        { note: 739.99, delay: 5400, dur: 2.2 }  // F#5 (gentle high bell)
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

    // Acoustic Piano Synthesizer with realistic hammer strike & warmth
    playPianoNote(freq, timeOffset, duration, vol = 0.08) {
      if (!this.ctx || !this.isPlaying) return;
      const startTime = this.ctx.currentTime + timeOffset;

      // Fundamental oscillator
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, startTime);

      // Subtle warm second harmonic
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2, startTime);
      osc2.detune.setValueAtTime(4, startTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1600, startTime);
      filter.frequency.exponentialRampToValueAtTime(700, startTime + duration);

      // Hammer envelope
      noteGain.gain.setValueAtTime(0.0001, startTime);
      noteGain.gain.linearRampToValueAtTime(vol, startTime + 0.015); // Crisp hammer strike
      noteGain.gain.exponentialRampToValueAtTime(vol * 0.45, startTime + 0.15); // Initial pluck decay
      noteGain.gain.exponentialRampToValueAtTime(0.00001, startTime + duration); // Long singing sustain

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc1.start(startTime);
      osc2.start(startTime);
      osc1.stop(startTime + duration + 0.1);
      osc2.stop(startTime + duration + 0.1);
    }

    // Lush Cinematic Strings & Cello Bed
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

      // Warm acoustic bass note
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

    // Music Box Chime
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

    start() {
      this.init();
      this.isPlaying = true;
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.linearRampToValueAtTime(0.38, now + 1.8);

      const playPhrase = () => {
        if (!this.isPlaying) return;

        // Play the 4 chords
        this.playStringsChord(this.chords[0], 0, 3.8);
        this.playStringsChord(this.chords[1], 1.4, 3.8);
        this.playStringsChord(this.chords[2], 2.8, 3.8);
        this.playStringsChord(this.chords[3], 4.2, 4.0);

        // Play the soulful piano melody
        this.melody.forEach((item) => {
          this.playPianoNote(item.note, item.delay / 1000, item.dur, 0.08);
        });

        // Add music-box starlight chimes
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
  // Ambient Canvas Stardust (Velvet & Rose-Gold Palette)
  // ==========================================================================
  const canvas = document.getElementById('welcomeCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    const PARTICLE_COUNT = 60;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * (window.devicePixelRatio || 1);
      canvas.height = height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    }

    window.addEventListener('resize', resize);
    resize();

    class StardustParticle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 10;
        this.size = Math.random() * 2.2 + 0.6;
        this.speedY = Math.random() * 0.35 + 0.12;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.65 + 0.25;
        this.maxOpacity = this.opacity;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinkleAngle = Math.random() * Math.PI * 2;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.twinkleAngle += this.twinkleSpeed;
        this.opacity = (Math.sin(this.twinkleAngle) * 0.5 + 0.5) * this.maxOpacity;

        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
          this.reset(false);
        }
      }

      draw(isLight) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? '#B84D6C' : '#E8A5B8';
        ctx.globalAlpha = Math.max(0.08, this.opacity * (isLight ? 0.6 : 0.85));
        ctx.shadowBlur = this.size * 4;
        ctx.shadowColor = isLight ? '#B84D6C' : '#E8A5B8';
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new StardustParticle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      const isLight = document.documentElement.classList.contains('light');

      particles.forEach((p) => {
        p.update();
        p.draw(isLight);
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  // ==========================================================================
  // UI Controls
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

    const beginBtn = document.getElementById('beginCelebrationBtn');
    if (beginBtn) {
      beginBtn.addEventListener('click', () => {
        if (!audio.isPlaying && !audio.ctx) {
          audio.init();
        }
        try {
          if (audio.isPlaying) {
            sessionStorage.setItem('ambient_music_enabled', 'true');
          }
        } catch (err) {}
      });
    }

    try {
      if (sessionStorage.getItem('ambient_music_enabled') === 'true') {
        const autoStartHandler = () => {
          if (!audio.isPlaying) {
            audio.start();
            updateAudioUI(true);
          }
          document.removeEventListener('click', autoStartHandler);
        };
        document.addEventListener('click', autoStartHandler, { once: true });
      }
    } catch (e) {}
  });
})();
