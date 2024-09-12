import{_ as r,c as o,j as e,a as s,I as i,w as l,a4 as d,E as a,o as c}from"./chunks/framework.Qpa4gud8.js";const C=JSON.parse('{"title":"unicorn/prefer-includes","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-includes.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-includes.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/prefer-includes.md"},p={id:"unicorn-prefer-includes",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#unicorn-prefer-includes","aria-label":'Permalink to "unicorn/prefer-includes <Badge type="info" text="Style" />"'},"​",-1),k={class:"rule-meta"},f=e("span",{class:"emoji"},"🚧",-1),g=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prefer <code>includes()</code> over <code>indexOf()</code> when checking for existence or non-existence. All built-ins have <code>.includes()</code> in addition to <code>.indexOf()</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The <code>.includes()</code> method is more readable and less error-prone than <code>.indexOf()</code>.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">indexOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/prefer_includes.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11);function E(_,m,x,y,b,v){const t=a("Badge"),n=a("Alert");return c(),o("div",null,[e("h1",p,[s("unicorn/prefer-includes "),i(t,{type:"info",text:"Style"}),s(),u]),e("div",k,[i(n,{class:"fix",type:"info"},{default:l(()=>[f,s(" An auto-fix is still under development. ")]),_:1})]),g])}const q=r(h,[["render",E]]);export{C as __pageData,q as default};
