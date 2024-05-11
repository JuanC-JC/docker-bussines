# !/bin/bash
echo "INIT IMPORTING DATA"

# /bin/bash /docker-entrypoint-initdb.d/demo/mongoexport.sh


cd /docker-entrypoint-initdb.d/agency
/bin/bash ./mongoexport.sh


cd /docker-entrypoint-initdb.d/demo
/bin/bash ./mongoexport.sh


cd /docker-entrypoint-initdb.d/generals
/bin/bash ./mongoexport.sh