import{_ as r,c as i,j as a,a as e,I as t,w as l,a4 as c,E as s,o as h}from"./chunks/framework.Qpa4gud8.js";const C=JSON.parse('{"title":"jsx_a11y/anchor-has-content","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/anchor-has-content.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/anchor-has-content.md"}'),d={name:"docs/guide/usage/linter/rules/jsx_a11y/anchor-has-content.md"},p={id:"jsx-a11y-anchor-has-content",tabindex:"-1"},_=a("a",{class:"header-anchor",href:"#jsx-a11y-anchor-has-content","aria-label":'Permalink to "jsx_a11y/anchor-has-content <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},g=a("span",{class:"emoji"},"💡",-1),b=c(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce that anchors have content and that the content is accessible to screen readers. Accessible means that it is not hidden using the <code>aria-hidden</code> prop.</p><p>Alternatively, you may use the <code>title</code> prop or the <code>aria-label</code> prop.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><h4 id="good" tabindex="-1">good <a class="header-anchor" href="#good" aria-label="Permalink to &quot;good&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;a&gt;Anchor Content!&lt;/a&gt;</span></span>
<span class="line"><span> &lt;a&gt;&lt;TextWrapper /&gt;&lt;/a&gt;</span></span>
<span class="line"><span> &lt;a dangerouslySetInnerHTML={{ __html: &#39;foo&#39; }} /&gt;</span></span>
<span class="line"><span> &lt;a title=&#39;foo&#39; /&gt;</span></span>
<span class="line"><span> &lt;a aria-label=&#39;foo&#39; /&gt;</span></span></code></pre></div><h4 id="bad" tabindex="-1">bad <a class="header-anchor" href="#bad" aria-label="Permalink to &quot;bad&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;a /&gt;</span></span>
<span class="line"><span>&lt;a&gt;&lt;TextWrapper aria-hidden /&gt;&lt;/a&gt;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsx_a11y/anchor_has_content.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11);function m(x,f,y,v,k,j){const n=s("Badge"),o=s("Alert");return h(),i("div",null,[a("h1",p,[e("jsx_a11y/anchor-has-content "),t(n,{type:"info",text:"Correctness"}),e(),_]),a("div",u,[t(o,{class:"fix",type:"info"},{default:l(()=>[g,e(" A suggestion is available for this rule for some violations. ")]),_:1})]),b])}const P=r(d,[["render",m]]);export{C as __pageData,P as default};