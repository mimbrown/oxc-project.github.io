import{_ as i,c as t,j as a,a as e,I as r,a4 as n,o,E as l}from"./chunks/framework.Qpa4gud8.js";const x=JSON.parse('{"title":"eslint/guard-for-in","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/guard-for-in.md","filePath":"docs/guide/usage/linter/rules/eslint/guard-for-in.md"}'),h={name:"docs/guide/usage/linter/rules/eslint/guard-for-in.md"},d={id:"eslint-guard-for-in",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#eslint-guard-for-in","aria-label":'Permalink to "eslint/guard-for-in <Badge type="info" text="Style" />"'},"​",-1),p=n(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule is aimed at preventing unexpected behavior that could arise from using a for in loop without filtering the results in the loop. As such, it will warn when for in loops do not filter their results with an if statement.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/guard_for_in.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8);function u(g,f,_,k,m,b){const s=l("Badge");return o(),t("div",null,[a("h1",d,[e("eslint/guard-for-in "),r(s,{type:"info",text:"Style"}),e(),c]),p])}const y=i(h,[["render",u]]);export{x as __pageData,y as default};