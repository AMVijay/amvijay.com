# Generate JWT Signature using AWS KMS and ECDSA cryptographic algorithm

## Use case 
Our requirement is to generate JWT using NodeJS with signature using AWS KMS. Here, JWT alg is ES256, hence need to use ECDSA. Here, the challenge is AWS KMS signature format is DER encoded ASN.1 format (Details are in https://docs.aws.amazon.com/kms/latest/APIReference/API_Sign.html#API_Sign_ResponseSyntax). But JWT signature should be in base64url encoded R | S format for ECDSA algorithm.

---
## Implementation
I am separating the implementation into below steps: 

### Step 1 - AWS KMS configuration
Create Custom Managed Key in AWS KMS with cryptographic algorithm ECDSA. 
![](https://amvijay.com/blog/aws-kms-ecdsa-sign-jwt/aws-kms-sign-ecdsa-configuration.jpg)

### Step 2 - JWT Creation using NodeJS

```javascript
// JWT Header Creation - base64url encoded format
const header = {
    "typ": "JWT",
    "alg": "ES256",
    "kid": keyid
}
const jwtHeader = base64url(JSON.stringify(header));

// JWT Payload Creation - base64url encoded format
const payload = {
    "sub": "name",
    "status": "valid",
    "aud": "name"
}
const jwtPayload = base64url(JSON.stringify(payload));
```

### Step 3 - Fetch AWS Signature
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


