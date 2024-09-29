import{_ as t,c as o,j as e,a as i,G as n,a2 as r,B as d,o as l}from"./chunks/framework.DlAqvapY.js";const F=JSON.parse('{"title":"unicorn/new-for-builtins","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/new-for-builtins.md","filePath":"docs/guide/usage/linter/rules/unicorn/new-for-builtins.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/new-for-builtins.md"},c={id:"unicorn-new-for-builtins",tabindex:"-1"};function p(k,s,u,g,y,E){const a=d("Badge");return l(),o("div",null,[e("h1",c,[s[0]||(s[0]=i("unicorn/new-for-builtins ")),n(a,{type:"info",text:"Pedantic"}),s[1]||(s[1]=i()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#unicorn-new-for-builtins","aria-label":'Permalink to "unicorn/new-for-builtins <Badge type="info" text="Pedantic" />"'},"​",-1))]),s[3]||(s[3]=r(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces the use of <code>new</code> for following builtins: <code>Object</code>, <code>Array</code>, <code>ArrayBuffer</code>, <code>BigInt64Array</code>, <code>BigUint64Array</code>, <code>DataView</code>, <code>Date</code>, <code>Error</code>, <code>Float32Array</code>, <code>Float64Array</code>, <code>Function</code>, <code>Int8Array</code>, <code>Int16Array</code>, <code>Int32Array</code>, <code>Map</code>, <code>WeakMap</code>, <code>Set</code>, <code>WeakSet</code>, <code>Promise</code>, <code>RegExp</code>, <code>Uint8Array</code>, <code>Uint16Array</code>, <code>Uint32Array</code>, <code>Uint8ClampedArray</code>, <code>SharedArrayBuffer</code>, <code>Proxy</code>, <code>WeakRef</code>, <code>FinalizationRegistry</code>.</p><p>Disallows the use of <code>new</code> for following builtins: <code>String</code>, <code>Number</code>, <code>Boolean</code>, <code>Symbol</code>, <code>BigInt</code>.</p><p>These should not use <code>new</code> as that would create object wrappers for the primitive values, which is not what you want. However, without <code>new</code> they can be useful for coercing a value to that type.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>They work the same, but <code>new</code> should be preferred for consistency with other constructors.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/new_for_builtins.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,14))])}const b=t(h,[["render",p]]);export{F as __pageData,b as default};