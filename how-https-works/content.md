# Instructions to setup Python Virtual Enviornment in Windows

* Download Latest version of Python from python.org. Here, i refer python-3.8 version.
* Execute script [https://github.com/AMVijay/tensorflow-learning/blob/master/python-env-setup.cmd](https://github.com/AMVijay/tensorflow-learning/blob/master/python-env-setup.cmd) to setup python executable in system path.
* Check whether the installation using command 
	* `python --version`
	* `pip3 --version`
	* `virtualenv --version`
* Mostly virtualenv installation won't be available in default python installation. So install virutal env using command `pip3 install -U pip virtualenv`
* PIP can be upgraded to latest version using command `python -m pip install -U pip`
* Navigate to the python installed directory, and create folder venv for virtual environments.
* Create Virtual environment using command `virtualenv --system-site-packages -p python ./venv`
  ![](https://amvijay.github.io/images/20191103-python-virualenv-creation.JPG)
* Activate the virual environment by navigating to `.\venv\Scripts\activate`.
* Upgrade the PIP in virtualenv using command `pip install --upgrade pip` 



## Visual Studio Code - Permission Error on Python venv activate`
UnauthorizedAccess error would occur while executing python file in visual studio code in virtual env. 
To resolve this issue, run powersheet as adminstrator and execute command `Set-ExecutionPolicy -ExecutionPolicy ByPass` 
![](./20191104-powershell-python-venv-permission.JPG) 

Reference : [https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-6#execution-policy-on-windows-server-core-and-window-nano-server](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-6#execution-policy-on-windows-server-core-and-window-nano-server)



