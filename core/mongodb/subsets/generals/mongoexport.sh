# !/bin/bash
echo "INIT IMPORTING DATA"


mongoimport --db bh --jsonArray --collection timkotplans timkotplans.json
mongoimport --db bh --jsonArray --collection timkotmanifests timkotmanifests.json