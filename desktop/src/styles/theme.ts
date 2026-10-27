const style = document.createElement("style");
style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap');
:root { font-family: 'DM Sans', sans-serif; color: #202a28; background: #f4f2eb; font-synthesis: none; text-rendering: optimizeLegibility; }
* { box-sizing: border-box; }
body { margin: 0; min-width: 320px; min-height: 100vh; background: radial-gradient(ellipse at 82% 12%, #e5e9dd 0, transparent 37%), #f4f2eb; }
button, textarea { font: inherit; }
.shell { max-width: 1240px; min-height: 100vh; margin: auto; padding: 0 7.2%; display: flex; flex-direction: column; }
.topbar { height: 82px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #d9ddd4; }
.wordmark { font-size: 23px; font-weight: 700; letter-spacing: 0; color: inherit; text-decoration: none; }
.wordmark span { color: #e26948; }
.status, .eyebrow, .result-label, footer { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0; }
.status { color: #65716b; display: flex; align-items: center; gap: 8px; }
.status i { width: 7px; height: 7px; border-radius: 50%; background: #7d9b70; }
.workspace { flex: 1; display: grid; grid-template-columns: minmax(210px, .75fr) minmax(330px, 1fr); gap: 10%; align-items: center; padding: 72px 0 88px; }
.eyebrow { color: #bf6348; margin: 0 0 24px; }
h1 { font-size: clamp(42px, 5vw, 66px); line-height: 1.05; letter-spacing: 0; font-weight: 500; margin: 0; }
h1 em { font-family: 'Playfair Display', serif; color: #61765c; }
.lede { color: #68716b; line-height: 1.7; max-width: 290px; font-size: 14px; margin-top: 24px; }
.work-area { border-left: 1px solid #d9ddd4; padding-left: 40px; }
label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 12px; }
textarea { display: block; width: 100%; resize: vertical; min-height: 145px; padding: 16px; border: 1px solid #d6d9d0; border-radius: 3px; background: rgba(255,255,255,.55); color: #202a28; outline: none; line-height: 1.6; }
textarea:focus { border-color: #70836a; box-shadow: 0 0 0 2px #70836a20; }
textarea::placeholder { color: #9aa19a; }
.input-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 12px; color: #8a928b; font: 10px 'DM Mono', monospace; }
button { border: 0; border-radius: 2px; padding: 11px 15px; background: #d96848; color: #fffdf7; font-size: 12px; font-weight: 600; cursor: pointer; }
button:hover:not(:disabled) { background: #bb5539; }
button:disabled { opacity: .55; cursor: wait; }
.result { margin-top: 38px; border-top: 1px solid #d9ddd4; padding-top: 18px; }
.result-label { color: #748075; }
.result p { font-family: 'Playfair Display', serif; font-size: 17px; line-height: 1.6; white-space: pre-wrap; }
.result .empty-result { color: #a0a69e; font-style: italic; }
.error { font-size: 12px; color: #a53d2b; }
footer { color: #848d84; display: flex; justify-content: space-between; padding: 20px 0; border-top: 1px solid #d9ddd4; }
@media (max-width: 720px) { .shell { padding: 0 6%; } .workspace { grid-template-columns: 1fr; gap: 32px; padding: 48px 0; } .work-area { border-left: 0; border-top: 1px solid #d9ddd4; padding: 28px 0 0; } h1 { font-size: 48px; } }
`;
document.head.append(style);

export {};