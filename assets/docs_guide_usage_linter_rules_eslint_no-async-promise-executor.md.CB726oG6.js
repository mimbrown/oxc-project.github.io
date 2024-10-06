import{_ as l,c as o,j as e,a as i,G as a,w as h,a3 as p,B as t,o as c}from"./chunks/framework.BJhF9nxw.js";const b=JSON.parse('{"title":"eslint/no-async-promise-executor","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-async-promise-executor.md","filePath":"docs/guide/usage/linter/rules/eslint/no-async-promise-executor.md"}'),d={name:"docs/guide/usage/linter/rules/eslint/no-async-promise-executor.md"},k={id:"eslint-no-async-promise-executor",tabindex:"-1"},u={class:"rule-meta"};function E(y,s,g,m,f,x){const n=t("Badge"),r=t("Alert");return c(),o("div",null,[e("h1",k,[s[0]||(s[0]=i("eslint/no-async-promise-executor ")),a(n,{type:"info",text:"Correctness"}),s[1]||(s[1]=i()),s[2]||(s[2]=e("a",{class:"header-anchor",href:"#eslint-no-async-promise-executor","aria-label":'Permalink to "eslint/no-async-promise-executor <Badge type="info" text="Correctness" />"'},"​",-1))]),e("div",u,[a(r,{class:"default-on",type:"success"},{default:h(()=>s[3]||(s[3]=[e("span",{class:"emoji"},"✅",-1),i(" This rule is turned on by default. ")])),_:1})]),s[4]||(s[4]=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow using an async function as a Promise executor</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The <code>new Promise</code> constructor accepts an executor function as an argument, which has <code>resolve</code> and <code>reject</code> parameters that can be used to control the state of the created Promise. For example:</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> executor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  readFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>The executor function can also be an <code>async function</code>. However, this is usually a mistake, for a few reasons:</p><ul><li>If an async executor function throws an error, the error will be lost and won’t cause the newly-constructed <code>Promise</code> to reject.This could make it difficult to debug and handle some errors.</li><li>If a Promise executor function is using <code>await</code>, this is usually a sign that it is not actually necessary to use the <code>new Promise</code> constructor, or the scope of the <code>new Promise</code> constructor can be reduced.</li></ul><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_async_promise_executor.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,10))])}const w=l(d,[["render",E]]);export{b as __pageData,w as default};