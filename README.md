<h1>jQMeter</h1>
<p>jQMeter is a simple, light-weight jQuery plugin that allows you to display an animated horizontal or vertical progress meter. Just pass in the goal and amount raised or completed, and the rest is optional.</p>
<p>It has a simple design out-of-the-box, but this is on purpose so that you can customize the look to match your needs. You can pass several formatting options including width, height, background bar color, bar color, etc. You can also choose to display the percentage completed or not, as well as control the animation speed.</p>
<p>All you need to do is include the plugin file into your webpage, create a target wrapper element, and pass that element's id into the <code>jQMeter</code> method.</p>
<h2>Demo</h2>
<a href="http://www.gerardolarios.com/plugins-and-tools/jqmeter#demo" target="_blank">View demo</a>

<h2>Required Files</h2>
<ol>
  <li><a href="http://www.jquery.com/" target="_blank">jQuery Core JavaScript Library</a></li>
  <li><a href="http://www.gerardolarios.com/plugins-and-tools/jqmeter/js/jqmeter.min.js" target="_blank">jqmeter.min.js</a></li>
</ol>
<p>Include the above files into your webpage and invoke the <code>jQMeter()</code> method.</p>
<p>You can add your own CSS to style the progress meter to fit your needs.</p>

<h2>How to Use</h2>
<p>Create an empty wrapper element, in this case a <code>&lt;div&gt;</code>, and assign a unique id or class to it. Then pass that id into the <code>jQMeter()</code> method.</p>
<pre><code>
&lt;div id="jqmeter-container">&lt;/div>
&lt;script type="text/javascript">
$(document).ready(function(){
    $('#jqmeter-container').jQMeter();
});
&lt;/script>
</code></pre>

<h2>Configuration</h2>
		<p>jQMeter is pretty much ready to go, and the only necessary parameters to get started are the <code>goal</code> and <code>raised</code> values. It also has several options for customization. Some of these customizations can also be achieved with CSS such as colors, etc. Pass these options as an object into the <code>jQMeter()</code> method like this:</p>
<pre><code>$('#jqmeter-container').jQMeter({
    goal:'$1,000',
    raised:'$200',
    meterOrientation:'vertical',
    width:'50px',
    height:'200px'
});</code>
</pre>

<h2>Options</h2>
| Property      | Type          | Default  | Description |
| ------------- |:-------------:| -------- | ----------- |
| goal      | string | <strong>No default, must be set as option.</strong> |The goal of the meter. Can take strings like "$9,000" or integers like "9000".|
| raised      | string      |   <strong>No default, must be set as option.</strong> |The goal of the meter. Can take strings like "$9,000" or integers like "9000".|
| width | string      |    100% - for horizontal<br /><strong>(Must be set for vertical)</strong> |Set the width of the progress meter. You can pass percentages or pixel based values.|
|height|string|50px - for horizontal<br /><strong>(Must be set for vertical)</strong>|Set the height of the progress meter. You can pass percentages or pixel based values.|
|bgColor|string|#444|Supports hex, rgba, or word values.|
|barColor|string|#bfd255|Supports hex, rgba, or word values.|
|meterOrientation|string|horizontal|meterOrientation: 'horizontal' or 'vertical'. If set to 'vertical', width and height need to be specified.|
|displayTotal|boolean|true|Whether to display the percentage completed or raised.|
|animationSpeed|integer|2000|Animation time in milliseconds.|
|counterSpeed|integer|2000|Counter animation time in milliseconds.|

<h2>License</h2>

<p>jQMeter is free to use under the <a href="http://jquery.org/license" target="_blank">MIT/GPL</a> license for any application.
<div class="clear"></div>
<h2>Author</h2>
<p>This plugin was written by <a href="http://www.gerardolarios.com" target="_blank">Gerardo Larios</a>.</p>
