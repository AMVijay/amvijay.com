# Render Angular Page inside Spring MVC
This is an attempt to render angular page inside spring mvc application JSP page. 

Spring MVC Application will have the components JSP for UI, and Controller Java Class, and Spring MVC Configuration as XML file or Java Annotation based.

## Solution Option 1 
If there is no requirement to retain the existing application menu, header and navigation code then we can implement below one of the approaches for redirecting to angular application url :
* Controller method can return ModelAndView object with redirect as `return new ModelAndView("redirect:" + <angular application url>);`
* Controller method can return RedirectView object as 
```java
@RequestMapping("/<relative url>"
public RedirectView redirectToAngularApplication() {
	RedirectView redirectView = new RedirectView();
	redirectView.setUrl(<Angular Application HTTP URL>);
	return redirectView;
} 
```
* Can use Object `HttpServletResponse` from Controller Method argument and redirect to Angular Application as below
```java
public void redirectToAngularApplication(HttpServletResponse httpServletResponse) throws IOException {
    httpServletResponse.sendRedirect(<Angular Application HTTP URL>);
}
```

## Solution Option 2
If the requirement is to retain the existing application menu, header and navigation code in legacy spring mvc application, then below implementation options will help to render the angular application page inside JSP.
* Use JQuery's .load() function to render the angular application page content in JSP as below.
```html
<script src="https://code.jquery.com/jquery-3.5.1.min.js"
	integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
	crossorigin="anonymous"></script>
<script>
	$(document).ready(function() {
		$("#angularContent").load("/angular/index.html");
	});
</script>
</head>
<body>
	<div id="angularContent"></div>
</body>
```
In this approach, advantages are, Angular application will be rendered in client side.
* If angular application hosted/deployed separately, Can use JSTL tag `<c:import url="<angular application URL>"/>`.
* If angular application is package inside same war and deployed, then can use `<jsp:include page="</relative path of angular index.html>"/>`


