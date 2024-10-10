import{_ as o,c as p,j as i,a as e,G as a,w as h,a3 as r,B as t,o as d}from"./chunks/framework.BJhF9nxw.js";const F=JSON.parse('{"title":"jest/no-test-prefixes","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jest/no-test-prefixes.md","filePath":"docs/guide/usage/linter/rules/jest/no-test-prefixes.md"}'),k={name:"docs/guide/usage/linter/rules/jest/no-test-prefixes.md"},c={id:"jest-no-test-prefixes",tabindex:"-1"},u={class:"rule-meta"};function E(g,s,f,y,x,b){const n=t("Badge"),l=t("Alert");return d(),p("div",null,[i("h1",c,[s[0]||(s[0]=e("jest/no-test-prefixes ")),a(n,{type:"info",text:"Style"}),s[1]||(s[1]=e()),s[2]||(s[2]=i("a",{class:"header-anchor",href:"#jest-no-test-prefixes","aria-label":'Permalink to "jest/no-test-prefixes <Badge type="info" text="Style" />"'},"​",-1))]),i("div",u,[a(l,{class:"fix",type:"info"},{default:h(()=>s[3]||(s[3]=[i("span",{class:"emoji"},"🛠️",-1),e(" An auto-fix is available for this rule. ")])),_:1})]),s[4]||(s[4]=r(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Require using <code>.only</code> and <code>.skip</code> over <code>f</code> and <code>x</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Jest allows you to choose how you want to define focused and skipped tests, with multiple permutations for each:</p><ul><li>only &amp; skip: it.only, test.only, describe.only, it.skip, test.skip, describe.skip.</li><li>&#39;f&#39; &amp; &#39;x&#39;: fit, fdescribe, xit, xtest, xdescribe.</li></ul><p>This rule enforces usages from the only &amp; skip list.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// invalid</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fdescribe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// invalid</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// invalid</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xtest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// invalid</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdescribe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// invalid</span></span></code></pre></div><p>This rule is compatible with <a href="https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md" target="_blank" rel="noreferrer">eslint-plugin-vitest</a>, to use it, add the following configuration to your <code>.eslintrc.json</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;vitest/no-test-prefixes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jest/no_test_prefixes.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,12))])}const v=o(k,[["render",E]]);export{F as __pageData,v as default};