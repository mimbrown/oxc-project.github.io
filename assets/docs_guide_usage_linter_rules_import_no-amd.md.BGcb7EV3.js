import{_ as i,c as t,j as a,a as e,I as r,a4 as o,o as n,E as l}from"./chunks/framework.Qpa4gud8.js";const x=JSON.parse('{"title":"import/no-amd","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/import/no-amd.md","filePath":"docs/guide/usage/linter/rules/import/no-amd.md"}'),d={name:"docs/guide/usage/linter/rules/import/no-amd.md"},h={id:"import-no-amd",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#import-no-amd","aria-label":'Permalink to "import/no-amd <Badge type="info" text="Restriction" />"'},"​",-1),c=o('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Forbid AMD <code>require</code> and <code>define</code> calls.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([a, b], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {});</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`../name`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/import/no_amd.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',11);function k(m,u,g,_,E,b){const s=l("Badge");return n(),t("div",null,[a("h1",h,[e("import/no-amd "),r(s,{type:"info",text:"Restriction"}),e(),p]),c])}const y=i(d,[["render",k]]);export{x as __pageData,y as default};
