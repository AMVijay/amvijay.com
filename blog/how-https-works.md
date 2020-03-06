# How Https Works
* Last Updated on 2019-10-14  

Nowadays, most of the latest browsers enforce to use https mostly for web communication between server and client. Let’s understand what https is about and how it works.

HTTPS is secured http protocol to transmit data between client and server.     SSL/TLS protocol is used for secured data transmission, and http protocol is used for http object communication between client and server. 

SSL/TLS uses asymmetric encryption and decryption which comes with two keys called public key and private key.  These keys are enclosed inside a single file called SSL certificate and configured in server.  

* **Public key**
	* This key is given to all clients by server whoever tries to communicate with. Client uses this public key to encrypt data and sends it to server. Client itself can’t decrypt the data once it is encrypted. This is the beauty of asymmetric encryption decryption. 
* **Private key**
	* This key is used by server not exposed to anybody. Server uses this key to decrypt the message received from client during handshake.

Below are the steps happens between browser and the server during https communication :

* Step1: Client sends hello message as http request to server along with its capability with SSL/TLS version it can use for further communication. 
* Step2: Server responds back to the client with hello message , SSL certificate with public key and acceptance to use the SSL/TLS along with version sent by client. 
* Step 3: Client validates the SSL certificate for identity the integrity. Then,  Client generates new key and encrypt the key using public key shared by server. This encrypted message is sent to server.  
* Step 4: Now, Server decrypts the message using its private key. Then, it sends back the requested http message encrypted message to client using the symmetric key.
* Step 5 : here onwards, browser client sends all the follow up requests using the symmetric key sent to server during handshake.

## Acronyms 
SSL - secured socket layer
TLS - transport layer secured 