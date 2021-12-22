# Generate JWT Signature using AWS KMS and ECDSA cryptographic algorithm

## Use case 
Need generate JWT in Javascript/Typescript. Here, AWS KMS should be used for JWT Signature, and JWT algorithm should be ES256.

---
## Implementation
## Techstack
* Javascript or Typescript
* AWS KMS Custom Managed Sign and Verify Key
* AWS SDK npm package
* base64url npm package
* ecdsaFormatter npm package 

### Implementation Challenge
* As per requirement, JWT algorithm should be ES256. Hence, AWS KMS should be configured to use ECDSA cryptographic algorithm. 
* Here, the challenge is that AWS KMS signature format is DER encoded ASN.1 format (Details are in https://docs.aws.amazon.com/kms/latest/APIReference/API_Sign.html#API_Sign_ResponseSyntax). But JWT signature should be in base64url encoded R | S format for ECDSA algorithm.
* So need to use custom code to convert the AWS KMS generated Signature from DER encoded ASN.1 format to base64url encoded R | S format.  

I am separating the implementation into below steps: 

### Step 1 - AWS KMS configuration
Create Custom Managed Key in AWS KMS with cryptographic algorithm ECDSA. 
AWS KMS configuration would be: 

![](https://amvijay.com/blog/aws-kms-ecdsa-sign-jwt/aws-kms-sign-ecdsa-configuration.jpg)

### Step 2 - JWT Creation using NodeJS
Create JWT header value. This should be base64url encoded value.
```javascript
// JWT Header Creation - base64url encoded format
const header = {
    "typ": "JWT",
    "alg": "ES256",
    "kid": keyid
}
const jwtHeader = base64url(JSON.stringify(header));

Create JWT payload value. This should be base64url encoded value.
// JWT Payload Creation - base64url encoded format
const payload = {
    "sub": "name",
    "status": "valid",
    "aud": "name"
}
const jwtPayload = base64url(JSON.stringify(payload));
```

### Step 3 - Fetch AWS Signature
Using AWS SDK, invoke AWS KMS sign method and fetch the signature.
```javascript
const message = Buffer.from(jwtHeader + "." + jwtPayload);
let kmsResponse = await kms.sign({
      Message: message,
      KeyId: keyid,
      SigningAlgorithm: 'ECDSA_SHA_256',
      MessageType: 'RAW'
    }).promise();
```

### Step 4 - Convert Signature into JWT Format
By default, The AWS KMS Signature will be in DER encoded ASN.1 format. But JWT Signature should be in base64url encoded R || S format. We can call JWT signature as JOSE format. JOSE stands for JSON Object Signature and Encryption.
```javascript
let ecdsaSignature = ecdsaFormatter.derToJose(kmsResponse.Signature, 'ES256');
```
---
## Conclusion
As mentioned in use case, able to generate the JWT with ES256 algorithm using AWS KMS signature.

