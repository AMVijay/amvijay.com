# Spring MVC
* Last updated on 2020-01-22

Spring MVC is a web application development framework enhanced from java servlet api. It requires java web server to run. 

## In general, MVC Architecture is:

<img src="https://amvijay.github.io/images/general-mvc-architecture.jpg" style="max-width: 100%"/>

Here, 
* View is the user interface where user would see the UI. Typically, view is written in JSP, html5. 
* Model is the data communicated between View and Controller. Typically, model is java objects.
* Controller is the interface which processes the http request received from view and send back the http response with model. Controller is java servlet. 

## Spring MVC Architecture is: 

<img src="https://amvijay.github.io/images/spring-mvc-architecture.jpg" style="max-width: 100%"/>

Here, 
* View - this represents the user interface, typically it will be developed using JSP, html, JavaScript.
* Model - the data object which is used in view to show the data. This object is in communication between view and controller.
* Controller - Spring Dispatcher Servlet acts as controller which takes all http requests and directs to the valid controller method based on url mapping and view resolver.

## Spring Dispatcher Servlet
Spring Dispatcher Servlet acts as controller in Spring MVC framework. It is inherited from java HTTPServlet class and implemented the http request processing using Spring Framework for developers easy. 

During deployment time, Spring Dispatcher Servlet initializes 
* ViewResolver
	* ViewResolver is getting initialized in DispatcherServlet.
	* For all the ModelAndView return type from controller method, ViewResolver adds the location of view in deployed war and adds the extension of the view file (jsp, html).
	* Then, java web server renders the jsp with model object in server side and sends back the http response to client .
* LocaleResolver
* Handlers
* Interceptors

## Acronyms
* api - application programming interface
* MVC - Model View Controller
* JSP - java server pages