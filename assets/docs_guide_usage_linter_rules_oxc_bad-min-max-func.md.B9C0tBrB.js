import{_ as h,c as l,j as a,a as s,I as e,w as r,a4 as o,E as i,o as c}from"./chunks/framework.Qpa4gud8.js";const B=JSON.parse('{"title":"oxc/bad-min-max-func","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/oxc/bad-min-max-func.md","filePath":"docs/guide/usage/linter/rules/oxc/bad-min-max-func.md"}'),d={name:"docs/guide/usage/linter/rules/oxc/bad-min-max-func.md"},p={id:"oxc-bad-min-max-func",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#oxc-bad-min-max-func","aria-label":'Permalink to "oxc/bad-min-max-func <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},m=a("span",{class:"emoji"},"✅",-1),E=o(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Checks whether the clamp function <code>Math.min(Math.max(x, y), z)</code> always evaluate to a constant result because the arguments are in the wrong order.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, z));</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/oxc/bad_min_max_func.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,6);function x(_,g,f,b,y,C){const t=i("Badge"),n=i("Alert");return c(),l("div",null,[a("h1",p,[s("oxc/bad-min-max-func "),e(t,{type:"info",text:"Correctness"}),s(),k]),a("div",u,[e(n,{class:"default-on",type:"success"},{default:r(()=>[m,s(" This rule is turned on by default. ")]),_:1})]),E])}const v=h(d,[["render",x]]);export{B as __pageData,v as default};