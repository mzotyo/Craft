[fwBasic]
status = enabled
incoming = deny
outgoing = deny
routed = disabled

[Rule0]
ufw_rule = 80/tcp ALLOW OUT Anywhere (log-all, out)
description = http
command = /usr/sbin/ufw allow out log-all proto tcp from any to any port 80
policy = allow
direction = out
protocol = 
from_ip = 
from_port = 
to_ip = 
to_port = 80/tcp
iface = 
routed = 
logging = log-all

[Rule1]
ufw_rule = 443/tcp ALLOW OUT Anywhere on enp0s3 (log-all, out)
description = https
command = /usr/sbin/ufw allow out on enp0s3 log-all proto tcp from any to any port 443
policy = allow
direction = out
protocol = 
from_ip = 
from_port = 
to_ip = 
to_port = 443/tcp
iface = enp0s3
routed = 
logging = log-all

[Rule2]
ufw_rule = 53 ALLOW OUT Anywhere (log-all, out)
description = dns
command = /usr/sbin/ufw allow out log-all from any to any port 53
policy = allow
direction = out
protocol = 
from_ip = 
from_port = 
to_ip = 
to_port = 53
iface = 
routed = 
logging = log-all

[Rule3]
ufw_rule = 22/tcp ALLOW OUT Anywhere on enp0s3 (log-all, out)
description = ssh
command = /usr/sbin/ufw allow out on enp0s3 log-all proto tcp from any to any port 22
policy = allow
direction = out
protocol = 
from_ip = 
from_port = 
to_ip = 
to_port = 22/tcp
iface = enp0s3
routed = 
logging = log-all

[Rule4]
ufw_rule = 80/tcp (v6) ALLOW OUT Anywhere (v6) (log-all, out)
description = http
command = /usr/sbin/ufw allow out log-all proto tcp from any to any port 80
policy = allow
direction = out
protocol = 
from_ip = 
from_port = 
to_ip = 
to_port = 80/tcp
iface = 
routed = 
logging = log-all

[Rule5]
ufw_rule = 443/tcp (v6) ALLOW OUT Anywhere (v6) on enp0s3 (log-all, out)
description = https
command = /usr/sbin/ufw allow out on enp0s3 log-all proto tcp from any to any port 443
policy = allow
direction = out
protocol = 
from_ip = 
from_port = 
to_ip = 
to_port = 443/tcp
iface = enp0s3
routed = 
logging = log-all

[Rule6]
ufw_rule = 53 (v6) ALLOW OUT Anywhere (v6) (log-all, out)
description = dns
command = /usr/sbin/ufw allow out log-all from any to any port 53
policy = allow
direction = out
protocol = 
from_ip = 
from_port = 
to_ip = 
to_port = 53
iface = 
routed = 
logging = log-all

[Rule7]
ufw_rule = 22/tcp (v6) ALLOW OUT Anywhere (v6) on enp0s3 (log-all, out)
description = ssh
command = /usr/sbin/ufw allow out on enp0s3 log-all proto tcp from any to any port 22
policy = allow
direction = out
protocol = 
from_ip = 
from_port = 
to_ip = 
to_port = 22/tcp
iface = enp0s3
routed = 
logging = log-all

