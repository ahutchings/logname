# logname

[![Greenkeeper badge](https://badges.greenkeeper.io/ahutchings/logname.svg)](https://greenkeeper.io/)

Get the login name for the current user.

Like [getpass](http://docs.python.org/2/library/getpass.html), it checks `LOGNAME`, `USER`, `LNAME` and `USERNAME`, returning the first to have a value.


## Usage

`
require('logname').getLoginName()
`