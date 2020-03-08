# Steps to install Next Cloud 16 in Linux/Debian/Debian Windows App. 
* Last Updated on 2019-07-07

## Install Debian Linux App in Windows and Configuration
* Install debian app in windows from windows store.
	* installation will be done in C:\Users\<userdir>\AppData\Local\Packages as folder `TheDebianProject.DebianGNULinux_76v4gfsz19hv4`
	* While launching first time, enter username as `admin` and password as `password`

* Run command `sudo passwd root` to change root user password as `password`, and remember the password.
	* If it is first time, password will be set directly without being asked the current password.
* Run command `sudo apt update` or `apt-get update` to update packages in Debian.
* Run command `sudo apt upgrade -y` or `apt-get upgrade -y` to run patches and latest updates for all packages installed already.

## Install Apache2 and Configure
* Run command `sudo apt install apache2` to install apache.
	* Add these 2 lines in `/etc/apache2/apache2.conf` using command `sudo vi /etc/apache2/apache2.conf`
	```
		Servername localhost
		AcceptFilter http none
	```
* You can start apache : `/etc/init.d/apache2 start` or 
```
	sudo service apache2 stop
	sudo service apache2 start
```

## Install MySQL and its configuration
* Execute command `sudo apt install mysql-server` or `sudo apt install mariadb-server`
* Command to start MYSQL Server	
```
	sudo service mysql start
	sudo service mqsql stop
```

## Install PHP7.3
* Add below repository sources to install PHP in Debian Linux Distribution (Would require root permission)
```
sudo apt install apt-transport-https lsb-release ca-certificates
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list
sudo apt update
sudo apt upgrade -y 
```
* Run command to install PHP7.3 Latest version
	`sudo apt install php7.3 libapache2-mod-php7.3 php7.3-common php7.3-gd php7.3-json php7.3-mysql php7.3-curl php7.3-mbstring php7.3-intl php7.3-xml php7.3-zip`

* To Search available php7.3 modules to install `sudo apt search php7.3`
* Remove older version of php using `sudo apt purge php7.1*`
* To check PHP modules `php -m`
* To check PHP version `php -v`


	
* Run command `sudo apt install php7.3 libapache2-mod-php7.3 php7.3-common php7.3-gd php7.3-json php7.3-mysql php7.3-curl php7.3-mbstring php7.3-intl php7.3-mcrypt php7.3-imagick php7.3-xml php7.3-zip`
* Run command `sudo apt-get install php libapache2-mod-php php-mcrypt php-mysql`

## Install NextCloud
* Run command `wget https://download.nextcloud.com/server/releases/nextcloud-16.0.2.zip --no-check-certificate` to download nextcloud.
* Install unzip using command `sudo apt install unzip`
* Unzip the nextcloud server zip file using command `unzip nextcloud-16.0.2.zip` 
* Move NextCloud folder to Apache using command `sudo mv nextcloud /var/www/html/nextcloud`
* `sudo mkdir /var/www/html/nextcloud/data`
* `sudo chown -R www-data:www-data /var/www/html/nextcloud/`
* `sudo chmod -R 755 /var/www/html/nextcloud/`
* Create a new configuration file called nextcloud.conf `sudo nano /etc/apache2/sites-available/nextcloud.conf`
* Add the below configuration to nextcloud.conf file   
	```
		<VirtualHost *:80>

		DocumentRoot /var/www/html/nextcloud/

		Alias /nextcloud "/var/www/html/nextcloud/"

		<Directory /var/www/html/nextcloud/>
		Options +FollowSymlinks
		AllowOverride All
		Require all granted
		<IfModule mod_dav.c>
		Dav off
		</IfModule>
		SetEnv HOME /var/www/html/nextcloud
		SetEnv HTTP_HOME /var/www/html/nextcloud
		</Directory>

		ErrorLog ${APACHE_LOG_DIR}/error.log
		CustomLog ${APACHE_LOG_DIR}/access.log combined

		</VirtualHost>
	```
* To save and exit the files first press CTRL+O and then CTRL+X.
* Enable the newly created site `sudo a2ensite nextcloud.conf`
* Enable the following modules for proper Nextcloud working…
```
sudo a2enmod rewrite
sudo a2enmod headers
sudo a2enmod env
sudo a2enmod dir
sudo a2enmod setenvif
sudo a2enmod mime
```
* Add system name to the php config.php `/var/www/html/nextcloud/config` as below 
```
'trusted_domains' =>
  array (
   0 => 'localhost',
   1 => 'lp0039973',
),
```

* To activate the new configuration, you need to run: `sudo service apache2 reload` or
```
	sudo service apache2 stop
	sudo service apache2 start
``` 
or `sudo service apache2 restart`

## MYSQL configuration for NextCloud
* Login to MySQL `sudo mysql`
* Create databse, we are giving it a name nextdb you can give whatever you would like… `CREATE DATABASE nextdb;`
* Create Database user along with password and assigned all the right or above created database to it.
`GRANT ALL ON nextdb.* to 'h2smedia'@'localhost' IDENTIFIED BY 'next@123';`
	* Note: h2smedia is username and next@123 is the password. You can change them with your choice. Whereas the nextdb is the above created database name.

* Flush the privleages so that MySQl can recognizwe the chnages and then exit.
```
FLUSH PRIVILEGES;
exit
```

## First Time Setup of NextCloud
* Access the URL `http://localhost/nextcloud` to get setup page
	* Admin User Name as `admin` and password as `password`
* By Default, NextCloud Setup Page would show Data Folder configuration as `/var/www/html/nextcloud/data`, Let's retain.
* Enter Database User as `h2smedia`, database password as `next@123`, Database name as `nextdb`
* Enter Finish Setup.
* We will get NextCloud site.

## Abbreviation
* apt - Advanced Packaging Tool
* sudo - Super User Do


