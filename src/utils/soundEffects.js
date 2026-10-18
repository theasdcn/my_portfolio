// Web Audio API Synthesizer for High-End Tactile & Acoustic Sound Effects
// Pure mathematical synthesis via Web Audio API — zero external mp3/wav files required

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Elegant Mechanical Leaf Shutter (Leica M-Style)
 * Dual-stage precision shutter with warm acoustic body resonance.
 */
export function playCameraShutter() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Stage 1: Soft leaf shutter opening transient (filtered micro-noise pulse)
    const bufferSize = Math.floor(ctx.sampleRate * 0.04);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.008));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Warm bandpass filter for mechanical tactile feel
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(2.2, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.09, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(now);

    // Warm resonant body thud
    const oscBody = ctx.createOscillator();
    const gainBody = ctx.createGain();
    oscBody.type = 'sine';
    oscBody.frequency.setValueAtTime(260, now);
    oscBody.frequency.exponentialRampToValueAtTime(80, now + 0.045);

    gainBody.gain.setValueAtTime(0.08, now);
    gainBody.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

    oscBody.connect(gainBody);
    gainBody.connect(ctx.destination);
    oscBody.start(now);
    oscBody.stop(now + 0.05);

    // Stage 2: Second delicate shutter return click (t = now + 42ms)
    const returnTime = now + 0.042;
    const oscReturn = ctx.createOscillator();
    const gainReturn = ctx.createGain();
    oscReturn.type = 'sine';
    oscReturn.frequency.setValueAtTime(820, returnTime);
    oscReturn.frequency.exponentialRampToValueAtTime(320, returnTime + 0.025);

    gainReturn.gain.setValueAtTime(0.05, returnTime);
    gainReturn.gain.exponentialRampToValueAtTime(0.001, returnTime + 0.025);

    oscReturn.connect(gainReturn);
    gainReturn.connect(ctx.destination);
    oscReturn.start(returnTime);
    oscReturn.stop(returnTime + 0.03);
  } catch (e) {
    // Ignore audio restrictions before first user interaction
  }
}

/**
 * Elegant Tactile Luxury Click
 * Subtle, soft acoustic haptic feedback like a precision-milled switch or luxury dial.
 */
export function playVinylClick() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Harmonic 1: Delicate glass/ceramic high transient
    const oscHigh = ctx.createOscillator();
    const gainHigh = ctx.createGain();
    oscHigh.type = 'sine';
    oscHigh.frequency.setValueAtTime(2100, now);
    oscHigh.frequency.exponentialRampToValueAtTime(1200, now + 0.022);

    gainHigh.gain.setValueAtTime(0.055, now);
    gainHigh.gain.exponentialRampToValueAtTime(0.0005, now + 0.022);

    oscHigh.connect(gainHigh);
    gainHigh.connect(ctx.destination);
    oscHigh.start(now);
    oscHigh.stop(now + 0.025);

    // Harmonic 2: Velvety low body thud (gives physical weight without sharpness)
    const oscLow = ctx.createOscillator();
    const gainLow = ctx.createGain();
    oscLow.type = 'sine';
    oscLow.frequency.setValueAtTime(220, now);
    oscLow.frequency.exponentialRampToValueAtTime(95, now + 0.032);

    gainLow.gain.setValueAtTime(0.065, now);
    gainLow.gain.exponentialRampToValueAtTime(0.0005, now + 0.032);

    oscLow.connect(gainLow);
    gainLow.connect(ctx.destination);
    oscLow.start(now);
    oscLow.stop(now + 0.035);
  } catch (e) {}
}

/**
 * Elegant Soft Crystal Chime for interactive badges & skill tags
 */
export function playPopSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Delicate bell overtone pair (C5 and G5)
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, now); // C5
    osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.05); // E5

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(783.99, now); // G5
    osc2.frequency.exponentialRampToValueAtTime(987.77, now + 0.05); // B5

    gain.gain.setValueAtTime(0.045, now);
    gain.gain.exponentialRampToValueAtTime(0.0005, now + 0.065);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.07);
    osc2.stop(now + 0.07);
  } catch (e) {}
}
