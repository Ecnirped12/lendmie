export const style = document.createElement("style")
   style.innerHTML = /*html*/`
      :root {
         --bg: #f4f5f9; --card: #ffffff; --text: #1b1d29; --muted: #6b7084;
         --line: #e3e5ee; --accent: #246d71; --accent-text: #ffffff;
         --error: #d93a4a; --ok: #1f9d6b;
      }

      * { box-sizing: border-box; }
      body {
         margin: 0; min-height: 100vh; display: grid; place-items: center;
         padding: 24px 16px; background: #ffffff; color: var(--text);
         font-family: "Montserrat", sans-serif;
      }
      .card {
         width: 35rem; 60rem; background-color: rgb(251 252 250);
         border: 1px solid var(--line);  padding: 28px 24px;
      }

      h1 { font-size: 1.4rem; margin: 0 0 4px; }
      .sub { margin: 0 0 20px; color: var(--muted); font-size: .92rem; }

      /* progress */
      .stepper { display: flex; list-style: none; margin: 0 0 14px; padding: 0; }
      .dot { flex: 1; position: relative; display: flex; flex-direction: column; align-items: center; gap: 6px; }
      .dot::before {
         content: ""; position: absolute; top: 15px; left: -50%; width: 100%;
         height: 3px; background: var(--line); transition: background .3s;
      }
      .dot:first-child::before { display: none; }
      .dot.done::before, .dot.active::before { background: var(--accent); }
      .circle {
         position: relative; z-index: 1; width: 32px; height: 32px; border-radius: 50%;
         display: grid; place-items: center; font-size: .85rem; font-weight: 600;
         background: var(--card); border: 2px solid var(--line); color: var(--muted);
         transition: all .3s;
      }
      .dot.active .circle { border-color: var(--accent); color: var(--accent); }
      .dot.done .circle { background: var(--accent); border-color: var(--accent); color: var(--accent-text); }
      .label { font-size: .75rem; color: var(--muted); }
      .dot.active .label, .dot.done .label { color: var(--text); }
      .bar { height: 6px; background: var(--line); border-radius: 99px; overflow: hidden; }
      .bar > i { display: block; height: 100%; width: 0; background: var(--accent); transition: width .35s ease; }
      .count { margin: 8px 0 22px; font-size: .8rem; color: var(--muted); text-align: right; }

      /* form */
      .step[hidden], .success[hidden], .actions[hidden] { display: none; }
      .step { animation: slide .3s ease; }
      @keyframes slide { from { opacity: 0; transform: translateX(14px); } to { opacity: 1; transform: none; } }
      .field { margin-bottom: 16px; }
      label.title { display: block; font-size: .85rem; font-weight: 600; margin-bottom: 6px; }
      input[type="text"], input[type="email"], input[type="password"], input[type="number"],
      input[type="tel"], input[type="date"] {
         width: 100%; padding: 11px 12px; font: inherit; color: var(--text);
         background: transparent; border: 1.5px solid var(--line); border-radius: 10px; outline: none;
      }
      input:focus-visible { border-color: var(--accent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent); }
      .field.invalid input { border-color: var(--error); }
      .error { margin: 6px 0 0; min-height: 1em; font-size: .85rem; font-weight: 600; color: var(--error); }
      .field.invalid { animation: shake .35s ease; }
      @keyframes shake {
         20%, 60% { transform: translateX(-5px); }
         40%, 80% { transform: translateX(5px); }
      }
      .rules { margin: 8px 0 0; padding: 0; list-style: none; display: flex; gap: 14px; flex-wrap: wrap; font-size: .78rem; color: var(--muted); }
      .rules li::before { content: "○ "; }
      .rules li.met { color: var(--ok); }
      .rules li.met::before { content: "✓ "; }
      .pw { position: relative; }
      .pw button {
         position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
         background: none; border: 0; color: var(--muted); font-size: .78rem; cursor: pointer; padding: 4px 6px;
      }

      .roles { display: grid; gap: 10px; }
      .role {
         display: flex; gap: 12px; align-items: center; padding: 12px 14px; cursor: pointer;
         border: 1.5px solid var(--line); border-radius: 10px;
      }
      .role:has(input:checked) { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, transparent); }
      .role:has(input:focus-visible) { box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent); }
      .role strong { display: block; font-size: .92rem; }
      .role span { font-size: .8rem; color: var(--muted); }

      dl.summary { margin: 0 0 16px; border: 1px solid var(--line); border-radius: 10px; padding: 4px 14px; }
      dl.summary div { display: flex; justify-content: space-between; gap: 12px; padding: 9px 0; border-bottom: 1px solid var(--line); font-size: .88rem; }
      dl.summary div:last-child { border-bottom: 0; }
      dl.summary dt { color: var(--muted); }
      dl.summary dd { margin: 0; font-weight: 600; text-align: right; word-break: break-all; }
      .check { display: flex; gap: 8px; align-items: flex-start; font-size: .85rem; }
      .check input { margin-top: 3px; }

      .actions { display: flex; gap: 10px; margin-top: 22px; }
      button.btn {
         flex: 1; padding: 12px 16px; font: inherit; font-weight: 600; border-radius: 10px;
         cursor: pointer; border: 1.5px solid transparent;
      }
      button.primary { background: var(--accent); color: var(--accent-text); }
      button.primary:hover { filter: brightness(1.08); }
      button.ghost { background: transparent; color: var(--text); border-color: var(--line); }
      button.ghost[hidden] { display: none; }
      button.btn:focus-visible { outline: 3px solid color-mix(in srgb, var(--accent) 40%, transparent); outline-offset: 2px; }

      .success { text-align: center; padding: 14px 0 4px; }
      .tick {
         width: 56px; height: 56px; margin: 0 auto 14px; border-radius: 50%;
         display: grid; place-items: center; font-size: 1.6rem; color: #fff; background: var(--ok);
      }
      .success h2 { margin: 0 0 6px; font-size: 1.2rem; }
      .success p { margin: 0; color: var(--muted); font-size: .9rem; }

      /* loan form */
      input[type="date"] { color-scheme: light; min-height: 46px; }
      .row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
      .group-title { display: block; font-size: .85rem; font-weight: 600; margin-bottom: 8px; }
      .hint { margin: 6px 0 0; font-size: .78rem; color: var(--muted); }
      .money { position: relative; }
      .money span {
         position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
         color: var(--muted); pointer-events: none;
      }
      .money input { padding-left: 28px; }
      .roles.two { grid-template-columns: 1fr 1fr; }

      .demo-note {
         margin: 0 0 18px; padding: 10px 12px; font-size: .8rem; color: var(--muted);
         border: 1px dashed var(--line); border-radius: 10px;
      }
      .score { margin-top: 18px; }
      .score[hidden] { display: none; }
      .score .num { display: block; font-size: 2.6rem; font-weight: 700; color: var(--accent); line-height: 1.1; }
      .score .band { display: block; margin-top: 2px; font-weight: 600; }
      .score .hint { margin-top: 8px; }

      @media (max-width: 520px) {
         .row, .roles.two { grid-template-columns: 1fr; gap: 10px; }
      }
   `
