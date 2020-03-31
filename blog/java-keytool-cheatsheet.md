# Java Keytool CheatSheet

## What is Java Keytool?
Java Keytool is a command line app to manage digital certificates with public and private key in a java language understandable keystore.

### Generate keystore
`keytool -genkey -alias <ALIAS_NAME> -keyalg RSA -sigalg SHA256withRSA -keysize 2048 -validity 365 -keystore <keystore.jks>`  
Here, 
* genkey - To Generate New Public and Private Key.
* alias - This is the name which will be used to persist in java keystore after generating public/private key. 
* keyalg - This is the name of key generation algorithm using which public/private key will be generated.
* sigalg - 
* keysize - The size of the public/private key size used in encrypt/decrypt. 
* validate - The number of days the key is valid in keystore for use.
* keystore - Keystore file location in which the generated public/private keys stored for use.

### Change the alias name
`keytool -changealias -alias <current_alias> -destalias <new_alias> -keystore <keystore.jks>`

### Export Self Signed Certificate from Keystore
`keytool -export -file <cert_file_path> -keystore <keystore.jks path> -alias <alias_name>`