import{e as a}from"./app.39480b94.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=a(`<h1 id="\u89E3\u51B3-android-7-0-\u65E0\u6CD5\u6293\u5305\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3-android-7-0-\u65E0\u6CD5\u6293\u5305\u7684\u95EE\u9898" aria-hidden="true">#</a> \u89E3\u51B3 Android 7.0 \u65E0\u6CD5\u6293\u5305\u7684\u95EE\u9898</h1><p>\u5728\u4F7F\u7528 Charles \u5BF9 Android APP \u6293\u5305\u65F6\uFF0C\u62A5\u9519 <code>SSLHandshakeException: Received fatal alert: certificate_unknown</code>\u3002\u539F\u56E0\u662F\u6211\u7684\u6D4B\u8BD5 Android \u7CFB\u7EDF\u7248\u672C\u592A\u9AD8\u4E86\u3002</p><p>\u5728 Android 7.0 \u7248\u672C\uFF08API Level 24\uFF09\uFF0C\u8C03\u6574\u4E86\u53D7\u4FE1\u4EFB\u8BC1\u4E66\u7684\u5B89\u5168\u7B56\u7565\uFF0C\u5E94\u7528\u5C06\u4E0D\u518D\u4FE1\u4EFB\u7528\u6237\u6216\u7BA1\u7406\u5458\u6DFB\u52A0\u7684 CA \u4EE5\u8FDB\u884C\u5B89\u5168\u8FDE\u63A5\u3002</p><p>\u89E3\u51B3\u529E\u6CD5\u662F\u5C06 apk \u53CD\u7F16\u8BD1\u5E76\u4FEE\u6539 <code>AndroidManifest.xml</code> \u540E\u518D\u91CD\u65B0\u6253\u5305\uFF0C\u6B65\u9AA4\u5982\u4E0B\u3002</p><h2 id="_1-\u53CD\u7F16\u8BD1-apk-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u53CD\u7F16\u8BD1-apk-\u6587\u4EF6" aria-hidden="true">#</a> 1. \u53CD\u7F16\u8BD1 APK \u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>apktool d demo.apk
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_2-\u4FEE\u6539-androidmanifest-xml" tabindex="-1"><a class="header-anchor" href="#_2-\u4FEE\u6539-androidmanifest-xml" aria-hidden="true">#</a> 2. \u4FEE\u6539 AndroidManifest.xml</h2><p>\u5728 <code>application</code> \u6807\u7B7E\u4E2D\u6DFB\u52A0\u5982\u4E0B\u6807\u8BB0</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>application</span> <span class="token attr-name"><span class="token namespace">android:</span>networkSecurityConfig</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@xml/network_security_config<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E4B\u540E\u5728 <code>res/xml</code> \u76EE\u5F55\u4E0B\u521B\u5EFA <code>network_security_config.xml</code> \u6587\u4EF6</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>network-security-config</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-config</span> <span class="token attr-name">cleartextTrafficPermitted</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>trust-anchors</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>certificates</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>system<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>certificates</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>trust-anchors</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-config</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>network-security-config</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3-\u91CD\u65B0\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#_3-\u91CD\u65B0\u7F16\u8BD1" aria-hidden="true">#</a> 3. \u91CD\u65B0\u7F16\u8BD1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>apktool b demo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_4-\u91CD\u65B0\u7B7E\u540D" tabindex="-1"><a class="header-anchor" href="#_4-\u91CD\u65B0\u7B7E\u540D" aria-hidden="true">#</a> 4. \u91CD\u65B0\u7B7E\u540D</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jarsigner -verbose -keystore ika.keystore demo/dist/demo.apk ika
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_5-\u5F52\u6863\u5BF9\u9F50" tabindex="-1"><a class="header-anchor" href="#_5-\u5F52\u6863\u5BF9\u9F50" aria-hidden="true">#</a> 5. \u5F52\u6863\u5BF9\u9F50</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>zipalign -v <span class="token number">4</span> demo/dist/demo.apk demo/dist/demo.new.apk
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6267\u884C\u5B8C\u4EE5\u4E0A\u5168\u90E8\u6B65\u9AA4\u540E\u91CD\u65B0\u5B89\u88C5 <code>demo.new.apk</code> \uFF0C\u6B64\u65F6\u4FBF\u80FD\u591F\u6B63\u5E38\u6293\u5305\u4E86\u3002</p>`,18);function t(p,c){return e}var i=n(s,[["render",t]]);export{i as default};
