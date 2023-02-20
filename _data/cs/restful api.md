---
title: "RESTful API"
folder: "cs"
excerpt: "Note on RESTful API, what it means and how to make a RESTful API"
date: "2023-02-18"
---

REST stands for Representation State Transfer. A RESTful API is an API that conforms to the REST architectural style. REST provides constraints/conditions on how an API should work, which makes it easier for web systems to communicate with each other.

## API

API stands for Application Programming Interface which defines rules that must be followed to communicate with software systems. An API can be thought of as a mediator or middleman between the client and the resource or web service they want to get. For example, say we have an API design for financial information, the user (client) may be required to provide a stock symbol, once a stock symbol is specified, the API will return to the user a resource including information related to that API request (with that specific stock symbol). In addition to providing clients with access to information, API is also an effectice security/authentication tool. Since the API is a layer between the request and response, API calls can authenticate or validate clients before providing any response information.

Simply put, an API acts as an intermediary between systems (client and server) which processes data transfers.

## RESTful API

When a client request is made via a RESTful API, the server transfers a representation of the state of the resource to the requester or endpoint. The information included in the response is usually delivered in a language agnostic JSON format. For a API to be considered RESTful, the following must be met:

- Client-server architecture is used made up of clients, servers, and resources where requests are managed through HTTP.
- **Statelessness** - client-server communication is stateless meaning no client information is stored between get requests and each request is separate and unconnected.
- **Cacheability** - data that streamlines client-server interactions. Store some responses on the client or an intermediary.
- **Uniform interface** - information is transferred in a standard form. The formatted resource is called a representation in REST. Imposes 4 architectural constraints:
  1. Requests should identify resources.
  2. Clients have enough information in the resource representation to modify or delete the resource if they want to. Server should send metadata that describes the resource.
  3. Clients receive information about how to process the representation further.
  4. Clients receive information about all other related resources they need to complete a task.
- **Layered system** - client can connect to other authorized intermediaries between the client and server, and it will still receive responses from the server.
- **Code on demand** - optional for REST API. Here servers can temporarily extend or customize client functionality by transferring executable code from the server to the client. For example, when the user enter information into a sign-up form that is invalid, the response can send back mistakes which the browser can then use to highlight problems with the form information.

In simple terms, RESTful API includes a client sending a request to a server, the server then authenticates the client that sent the request, the server receives and processes the request, and finally the server returns a response to the client.

## RESTful API Request Requirements

RESTful API requests are required to contain the following:

- **Unique resource identifier** - typically accomplished through the use of a unique URL which specifies the path to the resource.
- **Method** - RESTful API's are implemented using HTTP. HTTP methods tell the server what it needs to do to the resource. Example HTTP methods include GET, POST, PUT, and DELETE.
- **HTTP Headers** - request headers made up of metadata exchanged between client and server. Request headers can indicate the format of the request and response, provide information about the response status, etc...

## RESTful API Authentication

Authentication happens before a response is processed/sent by a server (if needed). RESTful API has four common authentication methods:

- **Basic authentication** (an HTTP authentication scheme) - client sends user name and password in the request header.
- **Bearer authentication** (another HTTP authentication scheme) - give access to bearer of a token (bearer token). The bearer token is typically an encrypted string of characters that is generated in response to a login request. Any future requests by the client (after login) will include the bearer token in the request header providing access to resources.
- **API keys** - uniquely generated value is given to a new client.
- **OAuth** - combines both passwords and tokens. The server first asks for a password and then asks for a token to complete authorization. OAuth is about authorization NOT authentication. You can think of it in terms of a valet service. The key to your car allows the valet to go and park your car. Similarily a key in request-response allows authorization of data to be sent.
