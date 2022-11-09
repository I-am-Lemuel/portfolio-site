import Link from "next/link";
import { FunctionComponent, useEffect } from "react";
import { BottomBar } from "../BottomBar/BottomBar";

export const TerminalArea: FunctionComponent = () => {
  // global vars
  let terminal: any, writeSpeed: number;

  useEffect(() => {
    // default settings
    terminal = document.getElementById("terminal");
    writeSpeed = 11;
    terminal.innerText = "[guest@I-am-Lemuel ~]$ ";
    terminalStart();

    // input listener
    terminal.addEventListener("keydown", terminalInputHandler);
  }, []);

  function terminalStart(): void {
    terminalWrite({
      text: "node welcome.js \n\n--Welcome to my Portfolio Site!--\n----------------------------------\nListing pages\n-(1) Home\n-(2) Who am I\n-(3) Knowledge\n-(4) Goals\n-(5) Contact me\n\nListing Actions\n-(6) clear terminal\n\nWaiting for an input:",
    });
  }

  function terminalWrite({ text }: { text: string }): void {
    let counter = 0;

    (function writer() {
      terminal.disabled = true;
      if (counter < text.length) {
        let terminalText = `${terminal.value.replace("|", "")}${text.charAt(
          counter
        )}`;
        if (counter !== text.length - 1) {
          terminalText = `${terminalText}|`;
        }
        terminal.value = terminalText;
        terminal.scrollTop = terminal.scrollHeight;
        counter++;
        setTimeout(writer, writeSpeed);
      } else {
        clearTimeout(writer as any);
        terminal.disabled = false;
        terminal.blur();
        terminal.focus();
      }
    })();
  }

  function terminalInputHandler(e: {
    keyCode: number;
    preventDefault: () => void;
  }) {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 49:
      case 97:
        terminalWrite({
          text: "\n--Welcome to my Portfolio Site!--\n----------------------------------\nListing pages\n-(1) Home\n-(2) Who am I\n-(3) Knowledge\n-(4) Goals\n-(5) Contact me\n\nListing Actions\n-(6) clear terminal\n\nWaiting for an input:",
        });
        break;
      case 50:
      case 98:
        terminal.value = "";
        terminal.style.whiteSpace = "";
        terminal.style.textAlign = "center";
        terminal.style.textAlignLast = "start";

        terminalWrite({
          text: "\n--Who am I?--\n----------------------------------\nI am a 17 year old developer from the UK. I have been programming for 2 years and I am currently learning React and Next.js. I am also learning Python and C++.\n\nListing pages\n-(1) Home\n-(2) Who am I\n-(3) Knowledge\n-(4) Goals\n-(5) Contact me\n\nListing Actions\n-(6) clear terminal\n\n\r\nWaiting for an input:",
        });
        break;
      case 54:
      case 102:
        terminal.value = "[guest@I-am-Lemuel ~]$ ";
        terminalWrite({
          text: "node clearTerminal.js \nTerminal Cleared\n\nPress 1 for home\n\nWaiting for an input:",
        });
      case 9:
        break;
      default:
        e.preventDefault();
        terminalWrite({
          text: "\nInvalid command!\n\nWaiting for an input:",
        });
    }
  }
  return (
    <>
      <textarea
        className="bg-transparent text-[#7C84A8] h-[calc(100%-8.1rem)] w-[calc(100%-1.4rem)] border-none outline-none resize-none text-xl mt-6 ml-6 mb-8"
        name="terminal"
        id="terminal"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      ></textarea>
      <BottomBar />
    </>
  );
};
