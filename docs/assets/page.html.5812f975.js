import{_ as p,r as e,o,c,a as n,b as s,e as i,d as t}from"./app.8f8f123e.js";const l={},u=i(`<h1 id="\u9875\u9762\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u6E32\u67D3" aria-hidden="true">#</a> \u9875\u9762\u6E32\u67D3</h1><p>tmagic-editor\u7684\u9875\u9762\u6E32\u67D3\uFF0C\u662F\u901A\u8FC7\u5728\u8F7D\u5165\u7F16\u8F91\u5668\u4E2D\u4FDD\u5B58\u7684 DSL \u914D\u7F6E\uFF0C\u901A\u8FC7 ui \u6E32\u67D3\u5668\u6E32\u67D3\u9875\u9762\u3002\u5728\u5BB9\u5668\u5E03\u5C40\u539F\u7406\u91CC\u6211\u4EEC\u63D0\u5230\u8FC7\uFF0C\u5BB9\u5668\u548C\u7EC4\u4EF6\u5728\u914D\u7F6E\u4E2D\u5448\u6811\u72B6\u7ED3\u6784\uFF0C\u6240\u4EE5\u6E32\u67D3\u9875\u9762\u7684\u65F6\u5019\uFF0C\u6E32\u67D3\u5668\u4F1A\u9012\u5F52\u914D\u7F6E\u5185\u5BB9\uFF0C\u4ECE\u800C\u6E32\u67D3\u51FA\u9875\u9762\u6240\u6709\u7EC4\u4EF6\u3002</p><img src="https://vfiles.gtimg.cn/vupload/20211009/f4d3031633778551251.png"><h2 id="\u5BB9\u5668\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u6E32\u67D3" aria-hidden="true">#</a> \u5BB9\u5668\u6E32\u67D3</h2><p>\u9875\u9762\u7684\u6E32\u67D3\u5668\uFF0C\u5176\u5B9E\u5C31\u662F\u4E24\u4E2A\u57FA\u7840\u7EC4\u4EF6\uFF0C\u57FA\u7840\u5BB9\u5668\u7EC4\u4EF6\u548C\u57FA\u7840\u7EC4\u4EF6\u3002\u9875\u9762\u5728\u8BFB\u5230 DSL \u914D\u7F6E\u4E4B\u540E\uFF0C\u6839\u7EC4\u4EF6\u5FC5\u5B9A\u662F\u4E00\u4E2A\u5BB9\u5668\uFF0C\u6B64\u65F6\u6E32\u67D3\u57FA\u7840\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u800C\u5BB9\u5668\u7EC4\u4EF6\u7684\u804C\u8D23\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u5C06\u5176\u5B50\u7EC4\u4EF6\u6E32\u67D3\u51FA\u6765\u3002\u5177\u4F53\u5F62\u5F0F\u4E3A\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>magic-ui-component</span> 
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in config.items<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>magic-ui-component</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;magic-ui-container&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u4EF6\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u6E32\u67D3" aria-hidden="true">#</a> \u7EC4\u4EF6\u6E32\u67D3</h2><p>\u6240\u6709tmagic-editor\u7EC4\u4EF6\uFF0C\u90FD\u901A\u8FC7\u4E00\u4E2Atmagic-editor\u57FA\u7840\u7EC4\u4EF6\u6765\u6E32\u67D3\u3002\u8FD9\u4E2A\u57FA\u7840\u7EC4\u4EF6\u4F1A\u8BC6\u522B\u5F53\u524D\u6E32\u67D3\u7EC4\u4EF6\u7684\u7C7B\u578B\u3002\u5982\u679C\u5F53\u524D\u6E32\u67D3\u7EC4\u4EF6\u662F\u666E\u901A\u7EC4\u4EF6\uFF08\u5305\u62ECui\u4E2D\u63D0\u4F9B\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u4E1A\u52A1\u5F00\u53D1\u7684\u4E1A\u52A1\u7EC4\u4EF6\uFF09\uFF0C\u5219\u76F4\u63A5\u6E32\u67D3\uFF1B\u5982\u679C\u5F53\u524D\u6E32\u67D3\u7EC4\u4EF6\u662F\u5BB9\u5668\uFF0C\u5219\u56DE\u5230<a href="#%E5%AE%B9%E5%99%A8%E6%B8%B2%E6%9F%93">\u5BB9\u5668\u6E32\u67D3</a>\u903B\u8F91\u4E2D\u3002</p><p>\u57FA\u7840\u7EC4\u4EF6\u7684\u5177\u4F53\u5F62\u5F0F\u4E3A\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span>
    <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tagName<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>config<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;magic-ui-component&#39;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tagName</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">magic-ui-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>config<span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6E32\u67D3\u5668\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u5668\u793A\u4F8B" aria-hidden="true">#</a> \u6E32\u67D3\u5668\u793A\u4F8B</h2><p>\u5728tmagic-editor\u7684\u793A\u4F8B\u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E09\u4E2A\u7248\u672C\u7684 @tmagic/ui\u3002\u53EF\u4EE5\u53C2\u8003\u5BF9\u5E94\u524D\u7AEF\u6846\u67B6\u7684\u6E32\u67D3\u5668\u5B9E\u73B0\u3002</p>`,12),r={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/ui/src/container/src/Container.vue",target:"_blank",rel:"noopener noreferrer"},k=t("vue3 \u6E32\u67D3\u5668"),d={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/ui-vue2/src/container/Container.vue",target:"_blank",rel:"noopener noreferrer"},v=t("vue2 \u6E32\u67D3\u5668"),m={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/ui-react/src/container/Container.tsx",target:"_blank",rel:"noopener noreferrer"},g=t("react \u6E32\u67D3\u5668");function b(h,f){const a=e("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[k,s(a)])]),n("li",null,[n("a",d,[v,s(a)])]),n("li",null,[n("a",m,[g,s(a)])])])])}var y=p(l,[["render",b],["__file","page.html.vue"]]);export{y as default};
