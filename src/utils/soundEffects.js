// Sound effects disabled per user request
class SoundManager {
  constructor() {
    this.enabled = false;
  }
  initCtx() {}
  isEnabled() {
    return false;
  }
  toggle() {
    return false;
  }
  playClick() {}
  playPop() {}
  playClap() {}
}

export const sounds = new SoundManager();
