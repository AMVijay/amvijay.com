# Java Keytool CheatSheet

## What is Java Keytool?
Java Keytool is a command line app to manage digital certificates with public and private key in a java language understandable keystore.

### Generate keystore
`keytool -genkey -alias <ALIAS_NAME> -keyalg RSA -sigalg SHA256withRSA -keysize 2048 -validity 365 -keystore <keystore.jks>`

### Change the alias name
`keytool -changealias -alias <current_alias> -destalias <new_alias> -keystore <keystore.jks>`

### Export Self Signed Certificate from Keystore
`keytool -export -file <cert_file_path> -keystore <keystore.jks path> -alias <alias_name>`