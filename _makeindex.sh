#!/bin/sh

ls | egrep '(html|js|css|jpg|png)' |
perl -e 'print "<html><body><ul>"; while(<>) { chop $_; print "<li><a href=\"./$_\">$_</a></li>";} print "</ul></body></html>"' > index.html