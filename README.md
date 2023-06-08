# AUTO-Continue-GPT
This Chrome extension automatically clicks the "Continue generating" button every second on OpenAI Chat (https://chat.openai.com/). This solves the major problem of not sitting at the computer to manually press the "continue generating" button
# Click Continue Generating Chrome Extension

This Chrome extension automatically clicks the "Continue generating" button every second on OpenAI Chat (`https://chat.openai.com/`).

## Installation

1. Clone or download this repository to your local machine.

```bash
git clone https://github.com/yourusername/click-continue-generating-extension.git
```

2. Open Google Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" by toggling the switch in the top right corner.

4. Click the "Load unpacked" button and select the folder containing the extension files (`click-continue-generating-extension`).

The extension is now loaded and active. It will automatically click the "Continue generating" button every second on `https://chat.openai.com/`.

## Usage

Visit `https://chat.openai.com/` and the extension will automatically start clicking the "Continue generating" button every second.

## Disabling or Removing the Extension

To disable or remove the extension, go back to `chrome://extensions/` and use the corresponding buttons.

## Files

- `manifest.json`: Contains the basic information about the extension, such as its name, version, and description. It also specifies that the extension will inject a content script (`content.js`) into the specified URL pattern.

- `content.js`: Contains the JavaScript code that will be injected into the web pages and executed. It defines a function that clicks the "Continue generating" button and sets an interval to call this function every second.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
