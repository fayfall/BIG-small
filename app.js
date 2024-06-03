const russianAlphabet = "ᴀбʙгдᴇжзийᴋлмʜᴏпᴘᴄʏȹxцчшщъыьэюя";
const englishAlphabet = "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ";
const numberAlphabet = "₀₁₂₃₄₅₆₇₈₉";


const russian = {
  А: "ᴀ",
  Б: "б",
  В: "ʙ",
  Г: "г",
  Д: "д",
  Е: "ᴇ",
  Ж: "ж",
  З: "з",
  И: "и",
  Й: "й",
  К: "ᴋ",
  Л: "л",
  М: "м",
  Н: "ʜ",
  О: "ᴏ",
  П: "п",
  Р: "ᴘ",
  С: "ᴄ",
  Т: "т",
  У: "ʏ",
  Ф: "ȹ",
  Х: "x",
  Ц: "ц",
  Ч: "ч",
  Ш: "ш",
  Щ: "щ",
  Ъ: "ъ",
  Ы: "ы",
  Ь: "ь",
  Э: "э",
  Ю: "ю",
  Я: "я",
};

const english = {
  A: "ᴀ",
  B: "ʙ",
  C: "ᴄ",
  D: "ᴅ",
  E: "ᴇ",
  F: "ғ",
  G: "ɢ",
  H: "ʜ",
  I: "ɪ",
  J: "ᴊ",
  K: "ᴋ",
  L: "ʟ",
  M: "ᴍ",
  N: "ɴ",
  O: "ᴏ",
  P: "ᴘ",
  Q: "ǫ",
  R: "ʀ",
  S: "s",
  T: "ᴛ",
  U: "ᴜ",
  V: "ᴠ",
  W: "ᴡ",
  X: "x",
  Y: "ʏ",
  Z: "ᴢ",
};

const number = {
  0: "₀",
  1: "₁",
  2: "₂",
  3: "₃",
  4: "₄",
  5: "₅",
  6: "₆",
  7: "₇",
  8: "₈",
  9: "₉",
};

const input = document.getElementById("input_zone");
const output = document.getElementById("output_zone");
const btnConvert = document.getElementById("Execute");

btnConvert.addEventListener("click", () => {
  let convertedText = convertText(input.value);
  output.innerHTML = convertedText;
});

function convertText(text) {
  let words = text.split(" ");

  let result = "";

  for (let word of words) {
    let upperWord = word.toUpperCase();
    let convertedWord = "";

    for (let i = 0; i < upperWord.length; i++) {
      let char = upperWord[i];

      if (russian[char]) {
        convertedWord += russian[char];
      } else if (english[char]) {
        convertedWord += english[char];
      } else if (number[char]) {
        convertedWord += number[char];
      } else {
        convertedWord += char;
      }
    }

    result += convertedWord + " ";
  }

  return result.trim();
}