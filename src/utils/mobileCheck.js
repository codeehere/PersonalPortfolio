export const checkMobileDesktopMode = () => {
    // Check if it's a touch device
    const isTouchDevice = navigator.maxTouchPoints > 0 || 'ontouchstart' in window;

    // Check if screen width is large (like a desktop)
    const isLargeScreen = window.innerWidth >= 1024;

    // Detection logic: Touch device + Large screen = Likely Mobile in Desktop Mode
    if (isTouchDevice && isLargeScreen) {
        const overlay = document.createElement('div');
        overlay.id = 'desktop-mode-warning';
        overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.95);
      color: white;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;
      font-family: system-ui, -apple-system, sans-serif;
    `;

        overlay.innerHTML = `
      <div style="max-width: 400px;">
        <h2 style="margin-bottom: 20px; color: #ff6b6b; font-size: 24px;">Desktop Mode Detected</h2>
        <p style="margin-bottom: 30px; line-height: 1.6; font-size: 16px;">
          It looks like you're using <strong>Desktop Mode</strong> on a mobile device.
          <br><br>
          For the best experience, please disable Desktop Mode in your browser settings.
        </p>
        <button id="dismiss-warning" style="
          padding: 12px 24px;
          background: #4ecdc4;
          border: none;
          border-radius: 8px;
          color: #000;
          font-weight: bold;
          cursor: pointer;
          font-size: 16px;
        ">
          I understand, continue anyway
        </button>
      </div>
    `;

        document.body.appendChild(overlay);

        // Prevent scrolling
        document.body.style.overflow = 'hidden';

        document.getElementById('dismiss-warning').onclick = () => {
            overlay.remove();
            document.body.style.overflow = '';
        };
    }
};
