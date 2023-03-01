---
title: "CORS"
folder: "Programming"
excerpt: "What is CORS and why is it used"
date: "2023-02-18"
---

**CORS** stands for **Cross-Origin Resource Sharing** which is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than it's own from which a browser should permit loading resources. Essentially CORS defines a way that a browser and server can interact to determine if it is safe to allow a cross-origin request. It is more secure then simply allowing all cross-origin requests and at the same time allows for more freedom and functionality as opposed to ONLY allowing **same-origin** requests.

## CORS Example

Lets say we visit a website, http://www.example.com, and that page attempts to fetch some data from another side, http://www.service.example.com. The browser will send a GET request to service.example.com with an `Origin` HTTP header containing the domain that served the parent page (http://www.example.com).

The server, at http://www.service.example.com, can then send one of three responses:

1. The requested data along with `Access-Control-Allow-Origin: http://www.example.com` as a header in the response which will indicate that the request from the origin (http://www.example.com) is allowed.
2. The requested data along with `Access-Control-Allow-Origin: *` as a header in the response which indicates that requests from ALL domains are allowed.
3. An error response from the server if cross-origin requests are not allowed.

The value of `*` is special in that it does not allow requests to supply credentials. It does not allow HTTP authentication, client-side SSL certificates, or cookies to be sent in the cross-domain request.

## Preflight

For HTTP request methods that can cause side-effects on server data, browsers must "preflight" the request which is carried out before the actual request is made. A preflight request is an HTTP OPTIONS request which includes headers such as `origin` (tells server the origin of the request), `access-control-request-headers` (tells the server which headers the request includes) and `access-control-request-method` (tells the server which HTTP method the request implements).

Upon "approval" from the server of the preflight request, the server will then receive the actual request. For example, lets use the same http://www.example.com and http://www.service.example.com sites we used above:

Lets say a preflight request is initiated. The request from the user visiting http://www.example.com, which will be a PUT request, may look like this:

```
Options /
Host: service.example.com
Origin: http://www.example.com
Access-Control-Request-Method: PUT
```

If service.example.com is willing to accept the action, it may respond with the following headers:

```
Access-Control-Allow-Origin: http://www.example.com
Access-Control-Allow-Method: PUT
```

After which the browser will then make the actual request. If, however, service.example.com does not accept cross-site requests from the origin specified, then it will respond with an error to the OPTIONS request and the actual request will NOT be made by the browser.
