(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{671:function(t,v,_){"use strict";_.r(v);var l=_(33),a=Object(l.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"策略模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#策略模式"}},[t._v("#")]),t._v(" 策略模式")]),t._v(" "),_("ul",[_("li",[t._v("Strategy Design Pattern")]),t._v(" "),_("li",[t._v("策略模式定义了一簇算法类，将每个算法分别封装起来，让他们可以相互替换。")]),t._v(" "),_("li",[t._v("策略模式可以使算法的变化独立于使用它们的客户端。")]),t._v(" "),_("li",[t._v("策略模式用来解耦策略的定义、创建、使用。")]),t._v(" "),_("li",[t._v("一个完整的策略模式由三部分组成\n"),_("ul",[_("li",[t._v("策略类的定义比较简单，包含一个策略接口和一组实现这个接口的策略类。")]),t._v(" "),_("li",[t._v("策略的创建由工厂类来完成，封装策略创建的细节。")]),t._v(" "),_("li",[t._v("策略模式包含一组策略可选，客户端代码如何选择使用哪种策略，有两种确定方法：编译时静态确定和运行时动态确定。")])])]),t._v(" "),_("li",[t._v("通过策略模式来移除 if-else 分支判断，本质上就是借助“查表法”，根据 type 查表替代根据 type 分支判断。")]),t._v(" "),_("li",[t._v("策略模式主要作用是解耦策略的定义、创建和使用，控制代码的复杂度，让每部分倒不至于过于复杂、代码量过多。")]),t._v(" "),_("li",[t._v("对于复杂的代码来说，策略模式还能让其满足开闭原则，添加新策略的时候，最小化、集中化代码改动，减少引入 bug 的风险。")])]),t._v(" "),_("h3",{attrs:{id:"实际应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实际应用"}},[t._v("#")]),t._v(" 实际应用")]),t._v(" "),_("ul",[_("li",[t._v("我们通过一个配置文件或者自定义的 annotation 来标注都有哪些策略类。")]),t._v(" "),_("li",[t._v("策略工厂类读取配置文件或者搜索被 annotation 标注的策略类，然后通过反射动态地加载这些策略类、创建策略对象。")]),t._v(" "),_("li",[t._v("当我新添加一个策略的时候，只需要将这个被添加的策略类添加到配置文件或者用 annotation 标注即可。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);