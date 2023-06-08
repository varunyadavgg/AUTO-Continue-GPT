function clickContinueGenerating() {
    const buttons = document.querySelectorAll('.btn');
    for (const button of buttons) {
      if (button.textContent.trim() === 'Continue generating') {
        button.click();
        break;
      }
    }
  }
  
  setInterval(clickContinueGenerating, 1000);
  