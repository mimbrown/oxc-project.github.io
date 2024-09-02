import{_ as t,c as i,j as s,a as e,I as n,a4 as r,o as p,E as l}from"./chunks/framework.Qpa4gud8.js";const E=JSON.parse('{"title":"typescript/ban-types","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/ban-types.md","filePath":"docs/guide/usage/linter/rules/typescript/ban-types.md"}'),h={name:"docs/guide/usage/linter/rules/typescript/ban-types.md"},o={id:"typescript-ban-types",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#typescript-ban-types","aria-label":'Permalink to "typescript/ban-types <Badge type="info" text="Pedantic" />"'},"​",-1),c=r(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule bans specific types and can suggest alternatives. Note that it does not ban the corresponding runtime objects from being used.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Some built-in types have aliases, while some types are considered dangerous or harmful. It&#39;s often a good idea to ban certain types to help with consistency and safety.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/typescript/ban_types.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,9);function k(y,u,b,g,_,m){const a=l("Badge");return p(),i("div",null,[s("h1",o,[e("typescript/ban-types "),n(a,{type:"info",text:"Pedantic"}),e(),d]),c])}const x=t(h,[["render",k]]);export{E as __pageData,x as default};