<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Gerardo Larios - Web Developer and Designer</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="jquery plugin that allows you to display an animated horizontal or vertical progress meter." />
<meta name="keywords" content="jquery progress meter, jquery plugin, progress meter, thermometer, progress thermometer, meter" />
<meta name="google-site-verification" content="przSBLLbnrPKMvAl1OsddHE7n7EwSVUe3M2wltgRqDA" />
<link rel="SHORTCUT ICON" href="../gerardo-larios.ico" type="image/x-icon" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300italic,700italic,300,700" />
<link rel="stylesheet" href="../css/plugins-main.css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script src="js/jqmeter.min.js"></script>
<script>
$(document).ready(function(e) {
  $('#jqmeter-horizontal').jQMeter({goal:'$10,000',raised:'$6,600',width:'300px'});
  $('#jqmeter-horizontal2').jQMeter({goal:'$10,000',raised:'$3000',width:'270px',height:'20px',bgColor:'#dadada',barColor:'#f09246',animationSpeed:1000,displayTotal:false});
  $('#jqmeter-horizontal3').jQMeter({goal:'$10,000',raised:'$8000',width:'160px',height:'40px',bgColor:'#bfb345',barColor:'#f3e45b',animationSpeed:600});
  $('#jqmeter-vertical').jQMeter({goal:'10,000',raised:'9,000',orientation:'vertical',width:'50px',height:'200px',barColor:'#d9235c'});
  $('#jqmeter-vertical2').jQMeter({goal:'10,000',raised:'4,000',orientation:'vertical',width:'30px',height:'150px',barColor:'#93d5c7',bgColor:'#e1e1e1',displayTotal:false,animationSpeed:400}); 
 
});
</script>
</head>
<body>
<h1>jQMeter</h1>
<div class="right-col">
<a href="http://www.gerardolarios.com/jqmeter/js/jqmeter.min.js" class="get" target="_blank">Get jQMeter</a>
<p>jQMeter is free to use under the <a href="http://jquery.org/license" target="_blank">MIT/GPL</a> license for any application. Donations are <strong>greatly</strong> appreciated, but not required.</p>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHPwYJKoZIhvcNAQcEoIIHMDCCBywCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYCHffB309bIPfZm9M9CtIKYB+E65Vdmlos4GM/5yoA5IyKXeutrBRX0a55Y/mdtzOCI1Q5SS8BYnqEA3ZZrwyadVXbDu+2Il5N2LsgGgVEkz2Je0LR7mcCoVT5R1T0vMZz3rDGn56LGx9QlD0oIOmr3JfwO1oXVZsnTBHwIKdO0QzELMAkGBSsOAwIaBQAwgbwGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIjRzEmmBCLw2AgZh4EZaBp+LONjjlUiz47hmK/S5gnAU1wDhJrd53UmTWcey5P+CHzXMXCMPh2r3wqZY5dQXCC6dhJh6/3pMAkh5/iGHWc4z+Uej82K4ZFXAwXv9u/Ba1brF9QyTnfUf9mym3dUvd/uL0daQTb6Hc5kocjUozprqpJ66SPIjTkiQDN21bCf+zQi2uXvvZPOXbAR59M6aDWbKtkKCCA4cwggODMIIC7KADAgECAgEAMA0GCSqGSIb3DQEBBQUAMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTAeFw0wNDAyMTMxMDEzMTVaFw0zNTAyMTMxMDEzMTVaMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAwUdO3fxEzEtcnI7ZKZL412XvZPugoni7i7D7prCe0AtaHTc97CYgm7NsAtJyxNLixmhLV8pyIEaiHXWAh8fPKW+R017+EmXrr9EaquPmsVvTywAAE1PMNOKqo2kl4Gxiz9zZqIajOm1fZGWcGS0f5JQ2kBqNbvbg2/Za+GJ/qwUCAwEAAaOB7jCB6zAdBgNVHQ4EFgQUlp98u8ZvF71ZP1LXChvsENZklGswgbsGA1UdIwSBszCBsIAUlp98u8ZvF71ZP1LXChvsENZklGuhgZSkgZEwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tggEAMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAgV86VpqAWuXvX6Oro4qJ1tYVIT5DgWpE692Ag422H7yRIr/9j/iKG4Thia/Oflx4TdL+IFJBAyPK9v6zZNZtBgPBynXb048hsP16l2vi0k5Q2JKiPDsEfBhGI+HnxLXEaUWAcVfCsQFvd2A1sxRr67ip5y2wwBelUecP3AjJ+YcxggGaMIIBlgIBATCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE1MDIxNTE0MjkzNFowIwYJKoZIhvcNAQkEMRYEFKyIa6ZkCBbmdIpRU4Jp0DJLcPHLMA0GCSqGSIb3DQEBAQUABIGAEq4ShOn1w6ok6sonDUw/ZfoKS1/OOWv9z4Y+DL/mbJuEqagy6jAJwlYXiGW7DML48G24NVX5L/1UXXQf4CUD4b/gqHL0g89IGnldrnzPlILYSnNZ8evrWI9Nyothy1t8qLskjsLFpnqe3EJSDeGismUbx+BHTfAuloceKMc2nHo=-----END PKCS7-----
">
<input type="image" src="../img/beer.png" border="0" name="submit" alt="Buy me a beer!">
<p>Buy me a beer!</p>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
</div>
<div class="left-col">
<p>jQMeter is a simple, light-weight jQuery plugin that allows you to display an animated horizontal or vertical progress meter. Just pass in the goal and amount raised or completed, and the rest is optional.</p>
<p>It has a simple design out-of-the-box, but this is on purpose so that you can customize the look to match your needs. You can pass several formatting options including width, height, background bar color, bar color, etc. You can also choose to display the percentage completed or not, as well as control the animation speed.</p>
<p>All you need to do is include the plugin file into your webpage, create a target wrapper element, and pass that element's id into the method.</p>
<h2>Demo</h2>
<div class="left col horizontal">
<div id="jqmeter-horizontal"></div>
<div class="therm-container" id="jqmeter-horizontal2"></div>
<div class="clear"></div>
<div class="therm-container" id="jqmeter-horizontal3"></div>
</div>
<div class="left col">
<div class="therm-container" id="jqmeter-vertical"></div>
<div class="therm-container" id="jqmeter-vertical2"></div>
</div>
<div class="clear"></div>

<h2>Required Files</h2>
<ol>
  <li><a href="http://www.jquery.com/" target="_blank">jQuery Core JavaScript Library</a></li>
  <li><a href="http://www.gerardolarios.com/jqmeter/js/jqmeter.min.js" target="_blank">jqmeter.min.js</a></li>
</ol>
<p>Include the above files into your webpage and invoke the jQMeter() method.</p>
<p>You can add your own CSS to style the progress meter to fit your needs.</p>

<h2>How to Use</h2>
<p>Create an empty wrapper element, in this case a <code>&lt;div&gt;</code>, and assign a unique id or class to it. Then pass that id into the jQMeter method.</p>

<pre><code>&lt;<span class="red">div</span> <span class="green">id</span>=<span class="yellow">"jqmeter-container"</span>&gt;&lt;/<span class="red">div</span>&gt;
&lt;<span class="red">script</span> <span class="green">type</span>=<span class="yellow">"text/javascript"</span>&gt;		
<span class="red">$</span>(<span class="blue">document</span>).ready(<span class="blue">function</span>(){ 
    <span class="red">$</span>(<span class="yellow">'#jqmeter-container'</span>).jQMeter(); 
});
&lt;/<span class="red">script</span>&gt;</code></pre>

<h2>Configuration</h2>
		<p>jQMeter is pretty much ready to go, and the only necessary parameters to get started are the <code>goal</code> and <code>raised</code> values. It also has several options for customization. Some of these customizations can also be achieved with CSS such as colors, etc. Pass these options as an object into the <code>jQMeter()</code> method like this:</p>
<pre><code><span class="red">$</span>(<span class="yellow">'#jqmeter-container'</span>).jQMeter({ 
    goal:<span class="yellow">'$1,000'</span>,
    raised:<span class="yellow">'$200'</span>,
    orientation:<span class="yellow">'vertical'</span>,
    width:<span class="yellow">'50px'</span>,
    height:<span class="yellow">'200px'</span>
});</code></pre>

<h2>Options</h2>
        <table cellspacing="0" cellpadding="0" id="options">
			<tr>

				<th>Property</th>
				<th>Type</th>
				<th>Default</th>
				<th>Description</th>
			</tr>
            <tr>
				<td>goal</td>
				<td>string</td>
				<td><strong>No default, must be set as option.</strong></td>
				<td>The goal of the meter. Can take strings like "$9,000" or integers like "9000".</td>
			</tr>
			<tr>
				<td>raised</td>
				<td>string</td>
				<td><strong>No default, must be set as option.</strong></td>
				<td>The goal of the meter. Can take strings like "$9,000" or integers like "9000".</td>
			</tr>
			<tr>
				<td>width</td>
				<td>string</td>
				<td>100% - for horizontal<br /><strong>(Must be set for vertical)</strong></td>
				<td>Set the width of the progress meter. You can pass percentages or pixel based values.</td>
			</tr>
			<tr>
				<td>height</td>
				<td>string</td>
				<td>50px - for horizontal<br /><strong>(Must be set for vertical)</strong></td>
				<td>Set the height of the progress meter. You can pass percentages or pixel based values.</td>
			</tr>
			<tr>
				<td>bgColor</td>
				<td>string</td>
				<td>#444</td>
				<td>Supports hex, rgba, or word values.</td>
			</tr>
			<tr>
				<td>barColor</td>
				<td>string</td>
				<td>#bfd255</td>
				<td>Supports hex, rgba, or word values.</td>
			</tr>
			<tr>
				<td>orientation</td>
				<td>string</td>
				<td>horizontal</td>
				<td>Orientation: 'horizontal' or 'vertical'. If set to 'vertical', width and height need to be specified.</td>
			</tr>
			<tr>
				<td>displayTotal</td>
				<td>boolean</td>
				<td>true</td>
				<td>Whether to display the percentage completed or raised.</td>
			</tr>
			<tr>
				<td>animationSpeed</td>
				<td>integer</td>
				<td>2000</td>
				<td>Animation time in milliseconds.</td>
			</tr>
		</table>
        
<h2>License</h2>

<p>jQMeter is free to use under the <a href="http://jquery.org/license" target="_blank">MIT/GPL</a> license for any application. Donations are <strong>greatly</strong> appreciated, but not required.</p>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHPwYJKoZIhvcNAQcEoIIHMDCCBywCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYCHffB309bIPfZm9M9CtIKYB+E65Vdmlos4GM/5yoA5IyKXeutrBRX0a55Y/mdtzOCI1Q5SS8BYnqEA3ZZrwyadVXbDu+2Il5N2LsgGgVEkz2Je0LR7mcCoVT5R1T0vMZz3rDGn56LGx9QlD0oIOmr3JfwO1oXVZsnTBHwIKdO0QzELMAkGBSsOAwIaBQAwgbwGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIjRzEmmBCLw2AgZh4EZaBp+LONjjlUiz47hmK/S5gnAU1wDhJrd53UmTWcey5P+CHzXMXCMPh2r3wqZY5dQXCC6dhJh6/3pMAkh5/iGHWc4z+Uej82K4ZFXAwXv9u/Ba1brF9QyTnfUf9mym3dUvd/uL0daQTb6Hc5kocjUozprqpJ66SPIjTkiQDN21bCf+zQi2uXvvZPOXbAR59M6aDWbKtkKCCA4cwggODMIIC7KADAgECAgEAMA0GCSqGSIb3DQEBBQUAMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTAeFw0wNDAyMTMxMDEzMTVaFw0zNTAyMTMxMDEzMTVaMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAwUdO3fxEzEtcnI7ZKZL412XvZPugoni7i7D7prCe0AtaHTc97CYgm7NsAtJyxNLixmhLV8pyIEaiHXWAh8fPKW+R017+EmXrr9EaquPmsVvTywAAE1PMNOKqo2kl4Gxiz9zZqIajOm1fZGWcGS0f5JQ2kBqNbvbg2/Za+GJ/qwUCAwEAAaOB7jCB6zAdBgNVHQ4EFgQUlp98u8ZvF71ZP1LXChvsENZklGswgbsGA1UdIwSBszCBsIAUlp98u8ZvF71ZP1LXChvsENZklGuhgZSkgZEwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tggEAMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAgV86VpqAWuXvX6Oro4qJ1tYVIT5DgWpE692Ag422H7yRIr/9j/iKG4Thia/Oflx4TdL+IFJBAyPK9v6zZNZtBgPBynXb048hsP16l2vi0k5Q2JKiPDsEfBhGI+HnxLXEaUWAcVfCsQFvd2A1sxRr67ip5y2wwBelUecP3AjJ+YcxggGaMIIBlgIBATCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE1MDIxNTE0MjkzNFowIwYJKoZIhvcNAQkEMRYEFKyIa6ZkCBbmdIpRU4Jp0DJLcPHLMA0GCSqGSIb3DQEBAQUABIGAEq4ShOn1w6ok6sonDUw/ZfoKS1/OOWv9z4Y+DL/mbJuEqagy6jAJwlYXiGW7DML48G24NVX5L/1UXXQf4CUD4b/gqHL0g89IGnldrnzPlILYSnNZ8evrWI9Nyothy1t8qLskjsLFpnqe3EJSDeGismUbx+BHTfAuloceKMc2nHo=-----END PKCS7-----
">
<input type="image" src="../img/beer.png" border="0" name="submit" width="50" alt="Buy me a beer!">
<p>Buy me a beer!</p>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
<div class="clear"></div>
<h2>Author</h2>
<p>This plugin was written by <a href="http://www.gerardolarios.com" target="_blank">Gerardo Larios</a>.</p>
</div>
        </body>
        </html>