## Problem Description
Many of web page developer would have come across this problem, there would be a white space between <body> tag and first <div> tag.  

HTML Code 
```html
<html>
	<body>
		<div style="background-color:green;width:100%; height: 10vh;">
			<h1 style="margin:0">PAGE HEADER .... </h1>
		</div>
	</body>
</html>
```
Output of this above snippet would be: 
![](./images/20201101-html-first-div-whitespace-after-body.jpg)

## Root cause
By default, there is a margin added to first div after body that gives this extra white space.
![](./images/20201101-html-first-div-whitespace-after-body-rootcause.jpg)

## Fix
By adding margin to body as `margin:0`, then the immediate first div element will start at 0 position. So HTML code need to be modified as below:
```html
<html>
	<body style="margin:0">
		<div style="background-color:green;width:100%; height: 10vh;">
			<h1 style="margin:0">PAGE HEADER .... </h1>
		</div>
	</body>
</html>
```
then, the page content (div content) will start at 0th position as expected.
![](./images/20201101-html-first-div-whitespace-after-body-fixed.jpg)


