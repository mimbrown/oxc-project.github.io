import{_ as e,c as t,j as s,a as n,G as l,a3 as o,B as p,o as r}from"./chunks/framework.BJhF9nxw.js";const m=JSON.parse('{"title":"Linter","description":"","frontmatter":{"title":"Linter","outline":"deep","badges":[{"src":"https://img.shields.io/npm/dw/oxlint","alt":"npm weekly downloads"}]},"headers":[],"relativePath":"docs/guide/usage/linter.md","filePath":"docs/guide/usage/linter.md"}'),h={name:"docs/guide/usage/linter.md"};function d(c,i,k,g,u,b){const a=p("AppBadgeList");return r(),t("div",null,[i[0]||(i[0]=s("h1",{id:"linter-oxlint",tabindex:"-1"},[n("Linter (oxlint) "),s("a",{class:"header-anchor",href:"#linter-oxlint","aria-label":'Permalink to "Linter (oxlint)"'},"​")],-1)),l(a),i[1]||(i[1]=o(`<p>Oxlint is designed to catch erroneous or useless code without requiring any configurations by default.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>At the current stage, oxlint is <strong>not intended to fully replace ESLint</strong>; it serves as an enhancement when ESLint&#39;s slowness becomes a bottleneck in your workflow.</p><p>We recommend running oxlint before ESLint in your lint-staged or CI setup for a quicker feedback loop, considering it only takes a few seconds to run on large codebases.</p></div><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li>50 - 100 times faster than ESLint, and scales with the number of CPU cores (<a href="https://github.com/oxc-project/bench-javascript-linter" target="_blank" rel="noreferrer">benchmark</a>).</li><li>Over 400 rules with a growing list from <code>eslint</code>, <code>typescript</code>, <code>eslint-plugin-react</code>, <code>eslint-plugin-jest</code>, <code>eslint-plugin-unicorn</code>, <code>eslint-plugin-jsx-a11y</code> and <a href="https://github.com/oxc-project/oxc/issues/481" target="_blank" rel="noreferrer">many more</a>.</li><li>Supports <ul><li><a href="https://eslint.org/docs/latest/use/configure/ignore#the-eslintignore-file" target="_blank" rel="noreferrer">.eslintignore</a>.</li><li><a href="https://eslint.org/docs/latest/use/configure/rules#disabling-rules" target="_blank" rel="noreferrer">ESLint comment disabling</a>.</li><li><a href="./linter/config.html">Partial ESLint v8 Configuration</a> in <code>json</code> format</li></ul></li></ul><h2 id="language-support" tabindex="-1">Language Support <a class="header-anchor" href="#language-support" aria-label="Permalink to &quot;Language Support&quot;">​</a></h2><ul><li>Supports: <ul><li>JavaScript and TypeScript by their extensions <code>js</code>, <code>mjs</code>, <code>cjs</code>, <code>jsx</code>, <code>ts</code>, <code>mts</code>, <code>cts</code> and <code>tsx</code>.</li><li><code>&lt;script&gt;</code> content of <code>.vue</code>, <code>.astro</code> and <code>.svelte</code> files.</li></ul></li><li>No support for: <ul><li><a href="https://typescript-eslint.io/getting-started/typed-linting" target="_blank" rel="noreferrer">type-aware rules</a> defined by <code>typescript-eslint</code>.</li><li><a href="https://eslint.style" target="_blank" rel="noreferrer">stylistic rules</a>.</li></ul></li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Run <code>oxlint</code> directly at the root of your repository:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-4ez3l" id="tab-3I9gETX" checked><label for="tab-3I9gETX">npm</label><input type="radio" name="group-4ez3l" id="tab-gZMctVd"><label for="tab-gZMctVd">pnpm</label><input type="radio" name="group-4ez3l" id="tab-MaMaGFl"><label for="tab-MaMaGFl">yarn</label><input type="radio" name="group-4ez3l" id="tab-thxpEU4"><label for="tab-thxpEU4">bun</label><input type="radio" name="group-4ez3l" id="tab-RkweQ5Q"><label for="tab-RkweQ5Q">deno</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxlint@latest</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dlx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxlint@latest</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dlx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxlint@latest</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bunx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxlint@latest</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deno</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm:oxlint@latest</span></span></code></pre></div></div></div><p>Or save it to your package.json:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-BHOCZ" id="tab-ai9X-ZX" checked><label for="tab-ai9X-ZX">npm</label><input type="radio" name="group-BHOCZ" id="tab-FHcllh7"><label for="tab-FHcllh7">pnpm</label><input type="radio" name="group-BHOCZ" id="tab-BsqIdWZ"><label for="tab-BsqIdWZ">yarn</label><input type="radio" name="group-BHOCZ" id="tab-ngJwoUc"><label for="tab-ngJwoUc">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxlint</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxlint</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxlint</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oxlint</span></span></code></pre></div></div></div><p><code>oxlint</code> does not require Node.js, the binaries can be downloaded from the <a href="https://github.com/oxc-project/oxc/releases/latest" target="_blank" rel="noreferrer">latest GitHub releases</a>.</p><h2 id="command-line-interface" tabindex="-1">Command-line Interface <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;Command-line Interface&quot;">​</a></h2><p>See <a href="./linter/cli.html">Command-line Interface</a></p><h2 id="configuration-file" tabindex="-1">Configuration File <a class="header-anchor" href="#configuration-file" aria-label="Permalink to &quot;Configuration File&quot;">​</a></h2><p>See <a href="./linter/config.html">Configuration File</a></p><h2 id="integration" tabindex="-1">Integration <a class="header-anchor" href="#integration" aria-label="Permalink to &quot;Integration&quot;">​</a></h2><h3 id="eslint" tabindex="-1">ESLint <a class="header-anchor" href="#eslint" aria-label="Permalink to &quot;ESLint&quot;">​</a></h3><p>If you are looking for a way to use oxlint in projects that still need ESLint, You can use <a href="https://github.com/oxc-project/eslint-plugin-oxlint" target="_blank" rel="noreferrer">eslint-plugin-oxlint</a> to turn off ESLint rules that are already supported by oxlint. So you can enjoy the speed of oxlint while still using ESLint.</p><h3 id="lint-staged" tabindex="-1">lint-staged <a class="header-anchor" href="#lint-staged" aria-label="Permalink to &quot;lint-staged&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;lint-staged&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,vue,astro,svelte}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;oxlint&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="vscode-extension" tabindex="-1">VSCode Extension <a class="header-anchor" href="#vscode-extension" aria-label="Permalink to &quot;VSCode Extension&quot;">​</a></h3><p>Download the official VSCode extension from the</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode" target="_blank" rel="noreferrer">Visual Studio Marketplace</a></li><li><a href="https://open-vsx.org/extension/oxc/oxc-vscode" target="_blank" rel="noreferrer">Open VSX Registry</a></li></ul><h3 id="zed-extension" tabindex="-1">Zed Extension <a class="header-anchor" href="#zed-extension" aria-label="Permalink to &quot;Zed Extension&quot;">​</a></h3><p><a href="https://zed.dev/extensions?q=oxc" target="_blank" rel="noreferrer">https://zed.dev/extensions?q=oxc</a></p><h3 id="continuous-integration" tabindex="-1">Continuous Integration <a class="header-anchor" href="#continuous-integration" aria-label="Permalink to &quot;Continuous Integration&quot;">​</a></h3><p>Since <code>oxlint</code> only takes a few seconds to run, we recommend running <code>oxlint</code> prior to ESLint for faster feedback loops.</p><h4 id="github-actions" tabindex="-1">GitHub Actions <a class="header-anchor" href="#github-actions" aria-label="Permalink to &quot;GitHub Actions&quot;">​</a></h4><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  oxlint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Lint JS</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npx --yes oxlint@0.0.0 --deny-warnings</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # change to the latest release</span></span></code></pre></div><p>It is advised to pin the version, otherwise CI may fail after a new release.</p><h3 id="pre-commit" tabindex="-1">pre-commit <a class="header-anchor" href="#pre-commit" aria-label="Permalink to &quot;pre-commit&quot;">​</a></h3><p>.pre-commit-hooks.yaml</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">repos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">repo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://github.com/oxc-project/mirrors-oxlint</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    rev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">v0.0.0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # change to the latest version</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    hooks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">oxlint</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        verbose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><h3 id="unplugin" tabindex="-1">Unplugin <a class="header-anchor" href="#unplugin" aria-label="Permalink to &quot;Unplugin&quot;">​</a></h3><p><a href="https://www.npmjs.com/package/unplugin-oxlint" target="_blank" rel="noreferrer">https://www.npmjs.com/package/unplugin-oxlint</a></p><h3 id="vite-plugin" tabindex="-1">Vite plugin <a class="header-anchor" href="#vite-plugin" aria-label="Permalink to &quot;Vite plugin&quot;">​</a></h3><p><a href="https://www.npmjs.com/package/vite-plugin-oxlint" target="_blank" rel="noreferrer">https://www.npmjs.com/package/vite-plugin-oxlint</a></p><h2 id="system-requirements" tabindex="-1">System Requirements <a class="header-anchor" href="#system-requirements" aria-label="Permalink to &quot;System Requirements&quot;">​</a></h2><p><code>oxlint</code> is built for darwin-arm64, darwin-x64, linux-arm64, linux-x64, win32-arm64 and win32-x64.</p>`,40))])}const E=e(h,[["render",d]]);export{m as __pageData,E as default};