/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], // <- page에서 사용 할 수 있게 말을 해줘야함 page의 모든 폴더에 모든 파일. 확장자는 저뒤에
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
