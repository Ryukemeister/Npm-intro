#!/usr/bin/env node

// function to log my intro in the terminal
function logDescription() {
  const github = "https://github.com/Ryukemeister/";
  const linkedIn = "https://in.linkedin.com/in/rajiv-sahal-a18251193";
  const twitter = "https://twitter.com/sahal_rajiv";

  // color code for ANSI escape codes - https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797
  const pink = "\x1b[38;5;170m";
  const white = "\x1b[37;5;51m";
  const green = "\x1b[38;5;49m";

  console.log(
    `
Hey there I'm ${pink}Rajiv${white}, a frontend engineer at ${pink}BoxyHQ!${white} I like to ${pink}build${white} bridges between ${pink}aesthetics${white} and ${pink}interactivity${white} on the web, making it a ${pink}prettier${white} place one line of code at a time.
If you're ${pink}nosy${white} like me, my ${pink}socials${white} are just a click away!

GitHub - ${green}${github} ${white}
LinkedIn - ${green}${linkedIn} ${white}
Twitter - ${green}${twitter} ${white}
    `
  );
}

logDescription();
